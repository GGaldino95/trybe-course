const connect = require('./connection');
const ObjectId = require('mongodb').ObjectId;

const insertUser = async (username, password) => {
  const db = await connect();
  const result = db.collection('users').insertOne({ username, password });
  return result;
}

const findUser = async (username) => {
  const db = await connect();
  const result = db.collection('users').findOne({ username });
  return result;
}

const findUserById = async (userId) =>
  connect().then((db) => db.collection('users').find({ _id: ObjectId(userId) }));

module.exports = { insertUser, findUser, findUserById };
