// Fills the sandbox with something to fetch. A request console against an empty collection
// demonstrates nothing, and this project shipped without a seed of its own.
//
//   DB_URL='mongodb+srv://...' node seed.js
//
// Products only. Sales are left empty on purpose: creating one through the playground is the
// interesting thing to watch, because it decrements the stock of the products below.
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

async function seed() {
  const url = process.env.DB_URL;
  if (!url) {
    console.error('DB_URL is not set.');
    process.exit(1);
  }

  const options = { useNewUrlParser: true, useUnifiedTopology: true };
  const conn = await MongoClient.connect(url, options);
  const db = conn.db(DB_NAME);

  // Rerunnable: the seed is the baseline, so it replaces rather than appends.
  await db.collection('products').deleteMany({});
  await db.collection('sales').deleteMany({});
  const { insertedCount } = await db.collection('products').insertMany(PRODUCTS);

  console.log(`seeded ${insertedCount} products into ${DB_NAME}, sales left empty`);
  await conn.close();
}

seed().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
