const { AsyncLocalStorage } = require('async_hooks');
const { MongoClient } = require('mongodb');

// The original value is the docker-compose service name, which only resolves inside that network.
// Keeping it as the fallback means running this locally with docker is unchanged.
const MONGO_DB_URL = process.env.DB_URL || 'mongodb://mongodb:27017/StoreManager';
const DB_NAME = 'StoreManager';

// Carries the visitor's sandbox session down to this file without threading an argument through
// controllers, services and models. That is the whole point: those three layers are what the
// project exists to demonstrate, and they stay exactly as they were submitted.
const sessionStore = new AsyncLocalStorage();

let schema = null;

async function database() {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

// Every query in the models goes through here, so suffixing the collection name is all it takes to
// give each visitor their own products and sales. Without a session the names are untouched, so a
// request made with curl behaves exactly like the 2021 project.
async function connection() {
  const db = await database();
  const sessionId = sessionStore.getStore();

  if (!sessionId) return db;

  return { collection: (name) => db.collection(`${name}_${sessionId}`) };
}

module.exports = connection;
module.exports.database = database;
module.exports.sessionStore = sessionStore;
