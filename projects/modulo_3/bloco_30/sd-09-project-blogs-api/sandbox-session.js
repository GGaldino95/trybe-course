// Per-visitor isolation for the hosted playground. Not part of the 2021 project: it exists so two
// people poking at the sandbox at the same time cannot see each other's writes.
//
// Each session gets its own `blogs_api_<id>` database, and the routing happens inside
// models/index.js, below the layers the project is meant to show. Controllers, services and the
// model definitions are untouched.
//
// Why a whole database rather than suffixed tables, which is what the Mongo sandbox does: Sequelize
// fixes `tableName` and the foreign keys when the models are defined, so suffixing would mean
// rebuilding the models per request. A database is free to create here — unlike Atlas, where the
// scoped user is refused and collection-per-session was the only way.
const { sequelize } = require('./models');
const { buildModels, sessionDatabase, sessions } = require('./models');
const { createSchema, reseed } = require('./seed');

const HEADER = 'x-sandbox-session';
const REGISTRY = '_sandbox_sessions';
// Fifteen minutes of inactivity, refreshed on every request, so an active visitor never loses their
// data mid-experiment and an absent one is reaped shortly after they stop.
const IDLE_SECONDS = 900;
// The id becomes part of a database name, so nothing but hex gets anywhere near it.
const ID_PATTERN = /^[0-9a-f]{32}$/;

let registryReady = false;

// Lives in the base database, because it has to outlive the session databases it tracks.
async function ensureRegistry() {
  if (registryReady) return;

  await sequelize.query(
    `CREATE TABLE IF NOT EXISTS ${REGISTRY} (
      sessionId varchar(32) NOT NULL,
      touchedAt datetime NOT NULL,
      PRIMARY KEY (sessionId)
    )`,
  );

  registryReady = true;
}

// ⚠️ MySQL has no TTL index, so unlike the Mongo sandbox this is not a backstop behind an expiry
// mechanism — it is the only thing that reclaims anything. It runs when a new session appears,
// which is precisely when the budget matters.
async function sweep() {
  const [expired] = await sequelize.query(
    `SELECT sessionId FROM ${REGISTRY} WHERE touchedAt < NOW() - INTERVAL ${IDLE_SECONDS} SECOND`,
  );

  for (const { sessionId } of expired) {
    // DROP DATABASE takes the tables with it, which is the whole advantage over the Mongo side,
    // where expiring the registry row left the collections behind.
    await sequelize.query(`DROP DATABASE IF EXISTS \`${sessionDatabase(sessionId)}\``);
    await sequelize.query(
      `DELETE FROM ${REGISTRY} WHERE sessionId = ?`,
      { replacements: [sessionId] },
    );

    const cached = sessions.get(sessionId);
    if (cached) {
      await cached.sequelize.close().catch(() => {});
      sessions.delete(sessionId);
    }
  }

  return expired.map(({ sessionId }) => sessionId);
}

// Slides the window on every request, and builds the session the first time it is seen.
async function open(sessionId) {
  await ensureRegistry();

  // INSERT IGNORE is the atomic test for "have we seen this session": affectedRows is 1 when the
  // row was inserted and 0 when it was already there. Two requests racing on a brand-new session
  // cannot both win it.
  //
  // ⚠️ Not `ON DUPLICATE KEY UPDATE touchedAt = NOW()`: MySQL reports 0 affected rows when the
  // update writes a value equal to the existing one, and inside the same second NOW() is exactly
  // that. Every request then looks new, and the session's database is dropped and rebuilt under it.
  const [, inserted] = await sequelize.query(
    `INSERT IGNORE INTO ${REGISTRY} (sessionId, touchedAt) VALUES (?, NOW())`,
    { replacements: [sessionId] },
  );

  // Slides the window. Separate from the test above so it runs for new and returning alike.
  await sequelize.query(
    `UPDATE ${REGISTRY} SET touchedAt = NOW() WHERE sessionId = ?`,
    { replacements: [sessionId] },
  );

  const isNew = inserted && inserted.affectedRows === 1;
  if (!isNew) return false;

  await sweep();

  // Dropped first so a half-built database from an interrupted request cannot be inherited.
  await sequelize.query(`DROP DATABASE IF EXISTS \`${sessionDatabase(sessionId)}\``);
  await sequelize.query(`CREATE DATABASE \`${sessionDatabase(sessionId)}\``);

  const models = buildModels(sessionDatabase(sessionId));
  sessions.set(sessionId, models);

  await createSchema(models.sequelize);
  // Seeded from seed.js rather than by copying the base database, so nothing a curl user does to
  // the unheadered API can change what a visitor starts with.
  await reseed(models.sequelize);

  return true;
}

module.exports = { HEADER, ID_PATTERN, IDLE_SECONDS, REGISTRY, open, sweep };
