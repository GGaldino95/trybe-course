// Fills the sandbox with something to fetch. Not part of the 2021 project: the course's seed.js
// is a mongo-shell script for the evaluator, so it cannot be required from here, and it stays as
// it was submitted.
//
//   DB_URL='mongodb+srv://...' node sandbox-seed.js
//
// `reseed` is also what POST /reset calls, so the button in the playground and this script put
// the sandbox back to the same state rather than to two versions of it.
const { MongoClient } = require('mongodb');

const DB_NAME = 'Cookmaster';

// The admin is the one the course's seed.js inserts. Erick is the user Trybe's own tests log in
// with, and the playground's login sample, so his email and password must not change.
const USERS = [
  { name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin' },
  { name: 'Erick Jacquin', email: 'erickjacquin@gmail.com', password: '12345678', role: 'user' },
];

const OWNER_INDEX = 1;

const RECIPES = [
  {
    name: 'Frango do Jacquin',
    ingredients: 'Frango, sal, alho, azeite',
    preparation: '40 minutos no forno a 200 graus',
  },
  {
    name: 'Pudim de leite',
    ingredients: 'Leite condensado, leite, ovos, açúcar',
    preparation: 'Bater, caramelizar a forma e assar em banho-maria por uma hora',
  },
  {
    name: 'Arroz de forno',
    ingredients: 'Arroz, presunto, queijo, ervilha',
    preparation: 'Misturar tudo e gratinar por 20 minutos',
  },
];

// Rerunnable: the seed is the baseline, so it replaces rather than appends. Rows are copied on the
// way in because insertMany stamps an _id onto whatever objects it is handed, and these constants
// are the template every reset reads from.
async function reseed(db) {
  await db.collection('users').deleteMany({});
  await db.collection('recipes').deleteMany({});

  const { insertedIds } = await db.collection('users').insertMany(
    USERS.map((user) => ({ ...user })),
  );
  // The same shape RecipeModel.create writes: the recipe plus the id of the user who made it.
  const userId = insertedIds[OWNER_INDEX];
  const { insertedCount } = await db.collection('recipes').insertMany(
    RECIPES.map((recipe) => ({ ...recipe, userId })),
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

  console.log(`seeded ${USERS.length} users and ${insertedCount} recipes into ${DB_NAME}`);
  await conn.close();
}

// Only run when invoked directly. Requiring this file from the app must not wipe the database.
if (require.main === module) {
  seed().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}

module.exports = { reseed, USERS, RECIPES };
