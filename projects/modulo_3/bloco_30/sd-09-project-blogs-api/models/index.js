'use strict';

const fs = require('fs');
const path = require('path');
const { AsyncLocalStorage } = require('async_hooks');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

// Carries the visitor's sandbox session down to this file without threading an argument through
// controllers, services and models. That is the whole point: those three layers are what the
// project exists to demonstrate, and they stay exactly as they were submitted.
const sessionStore = new AsyncLocalStorage();

// Builds one Sequelize instance plus its own models. Everything below the exports is per-database:
// a session's models are a separate set, associated among themselves, so an `include` resolves
// inside that session's database and nowhere else.
function buildModels(database) {
  const sequelize = new Sequelize(database, config.username, config.password, { ...config, database });
  const models = {};

  fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      models[model.name] = model;
    });

  Object.keys(models).forEach((name) => {
    if (models[name].associate) models[name].associate(models);
  });

  // ⚠️ The loop above is a dynamic require, which a serverless bundler cannot trace: it decides
  // what to ship by reading static require calls, sees none for these files, and leaves them out.
  // vercel.json carries an `includeFiles` for `models/**` to put them back. Without it the scan
  // finds nothing and the Proxies below are built over `undefined`, which throws somewhere far
  // from the cause. Fail here instead, where the message points at the real problem.
  if (!Object.keys(models).length) {
    throw new Error(
      `No model files found in ${__dirname}. On a serverless host this means they were not bundled.`,
    );
  }

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
}

const base = buildModels(config.database);

// One entry per live session, per server process. Serverless gives each function instance its own
// map, which is fine: it is a cache, and a miss only costs the connection it would have made anyway.
const sessions = new Map();

function sessionDatabase(sessionId) {
  return `${config.database}_${sessionId}`;
}

// Resolves the model set for whichever session is in scope. No session means the base database, so
// a request made with curl — or by Trybe's own evaluator — behaves exactly like the 2021 project.
function current() {
  const sessionId = sessionStore.getStore();

  if (!sessionId) return base;

  if (!sessions.has(sessionId)) sessions.set(sessionId, buildModels(sessionDatabase(sessionId)));

  return sessions.get(sessionId);
}

// The services capture their models at import time (`const { BlogPost } = require('../models')`),
// so the exported object has to keep a stable identity while the thing behind it changes per
// request. A Proxy per model does that.
//
// ⚠️ The target must be the real model class, not `{}`. Sequelize inspects the class shape when it
// resolves an `include`, and an empty-object target fails with `include.model.getTableName is not
// a function` even though the trap returns that function.
function routed(name) {
  return new Proxy(base[name], {
    get(_target, property) {
      const model = current()[name];
      const value = model[property];

      return typeof value === 'function' ? value.bind(model) : value;
    },
  });
}

const db = {};

Object.keys(base)
  .filter((name) => name !== 'sequelize' && name !== 'Sequelize')
  .forEach((name) => {
    db[name] = routed(name);
  });

db.sequelize = base.sequelize;
db.Sequelize = Sequelize;

module.exports = db;
module.exports.sessionStore = sessionStore;
module.exports.buildModels = buildModels;
module.exports.sessionDatabase = sessionDatabase;
module.exports.sessions = sessions;
module.exports.current = current;
