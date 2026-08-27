// Fills the sandbox with something to fetch. A request console against an empty collection
// demonstrates nothing, and this project shipped without a seed of its own.
//
//   DB_URL='mongodb+srv://...' node seed.js
//
// Products only. Sales are left empty on purpose: creating one through the playground is the
// interesting thing to watch, because it decrements the stock of the products below.
//
// `reseed` is also what POST /reset calls, so the button in the playground and this script put
// the sandbox back to the same state rather than to two versions of it.
const { MongoClient } = require('mongodb');

const DB_NAME = 'StoreManager';

// Names are over five characters and quantities above zero, matching the service's own rules,
// so every seeded row is one the API would have accepted.
const PRODUCTS = [
  { name: 'Martelo de Thor', quantity: 10 },
  { name: 'Traje de encolhimento', quantity: 20 },
  { name: 'Escudo do Capitão América', quantity: 30 },
  { name: 'Manopla do Infinito', quantity: 5 },
  { name: 'Arco do Gavião Arqueiro', quantity: 15 },
];

// Rerunnable: the seed is the baseline, so it replaces rather than appends. The products are
// copied on the way in because insertMany stamps an _id onto whatever objects it is handed, and
// PRODUCTS is the template every reset reads from.
async function reseed(db) {
  await db.collection('products').deleteMany({});
  await db.collection('sales').deleteMany({});

  const { insertedCount } = await db.collection('products').insertMany(
    PRODUCTS.map((product) => ({ ...product })),
  );

  return insertedCount;
}

async function seed() {
  const url = process.env.DB_URL;
  if (!url) {
    console.error('DB_URL is not set.');
    process.exit(1);
  }

  const options = { useNewUrlParser: true, useUnifiedTopology: true };
  const conn = await MongoClient.connect(url, options);
  const insertedCount = await reseed(conn.db(DB_NAME));

  console.log(`seeded ${insertedCount} products into ${DB_NAME}, sales left empty`);
  await conn.close();
}

// Only run when invoked directly. Requiring this file from the app must not wipe the database.
if (require.main === module) {
  seed().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}

module.exports = { reseed, PRODUCTS };
