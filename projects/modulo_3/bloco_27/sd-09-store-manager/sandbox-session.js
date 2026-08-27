// Per-visitor isolation for the hosted playground. Not part of the 2021 project: it exists so two
// people poking at the sandbox at the same time cannot see each other's writes.
//
// Each session gets its own `products_<id>` and `sales_<id>` collections, and the suffixing happens
// inside models/connection.js, below the layers the project is meant to show. Controllers, services
// and models are untouched.
const connection = require('./models/connection');
const { database, sessionStore } = require('./models/connection');
const { reseed } = require('./seed');

const HEADER = 'x-sandbox-session';
const REGISTRY = 'sessions';
// Fifteen minutes of inactivity, refreshed on every request, so an active visitor never loses
// their data mid-experiment and an absent one is reaped shortly after they stop.
const IDLE_SECONDS = 900;
// The id becomes part of a collection name, so nothing but hex gets anywhere near it.
const ID_PATTERN = /^[0-9a-f]{32}$/;
const SESSION_COLLECTION = /^(?:products|sales)_([0-9a-f]{32})$/;

let indexReady = false;

// A TTL index deletes the registry document, never the collections it stands for, which is exactly
// why the sweep below has to exist.
async function ensureIndex(db) {
  if (indexReady) return;

  try {
    await db
      .collection(REGISTRY)
      .createIndex({ at: 1 }, { expireAfterSeconds: IDLE_SECONDS });
  } catch (err) {
    // An index already built with a different window makes this throw. Sessions then stop
    // expiring, which the sweep still cleans up. Failing the request instead would take the whole
    // sandbox down over a housekeeping detail.
    console.error('sandbox session ttl index:', err.message);
  }

  indexReady = true;
}

// Runs only when a new session appears, which is precisely when the collection budget matters. A
// free cluster allows 500 collections in total, so the ones left behind by visitors who never came
// back have to go somewhere.
async function sweep(db) {
  const live = await db.collection(REGISTRY).find({}).toArray();
  const alive = new Set(live.map(({ sessionId }) => sessionId));
  const present = await db.listCollections().toArray();

  const orphans = present
    .map(({ name }) => ({ name, match: name.match(SESSION_COLLECTION) }))
    .filter(({ match }) => match && !alive.has(match[1]));

  for (const { name } of orphans) {
    // Two visitors arriving at once can both spot the same orphan. Losing that race is not a
    // failure: the collection is gone either way.
    await db.collection(name).drop().catch(() => {});
  }

  return orphans.map(({ name }) => name);
}

// Slides the window on every request, and seeds the session the first time it is seen.
async function open(sessionId) {
  const db = await database();
  await ensureIndex(db);

  // The upsert is both the touch that slides the window and the test for whether this is new:
  // findOneAndUpdate returns a null value when it inserted rather than matched.
  const { value } = await db.collection(REGISTRY).findOneAndUpdate(
    { sessionId },
    { $set: { at: new Date() } },
    { upsert: true, returnOriginal: true },
  );

  if (value) return false;

  await sweep(db);
  // Seeded through `connection()` so the collection names come from one place, and from the
  // PRODUCTS constant rather than from the shared collection, so nothing a curl user does to the
  // unheadered API can change what a visitor starts with.
  await sessionStore.run(sessionId, async () => reseed(await connection()));

  return true;
}

module.exports = { HEADER, ID_PATTERN, IDLE_SECONDS, REGISTRY, open, sweep };
