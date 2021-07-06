const mongodb = require('mongodb');
const connection = require('./connection');
const { ObjectId } = require('mongodb');

async function getAll() {
    const db = await connection();
    const products = await db.collection('products').find().toArray();
    return products;
  }

async function getById(id) {
  const db = await connection();
  if(!ObjectId.isValid(id)) return null;
  return db.collection('products').findOne(ObjectId(id));
}

async function add(name, brand) {
  const db = await connection();
  const addProduct = await db.collection('products').insertOne({name, brand});
  return addProduct;
}

async function exclude (id) {
  const db = await connection();
  if(!ObjectId.isValid(id)) return null;
  const product = await getBytId(id);
  await db.collection('products').deleteOne({ _id: ObjectID(id) });
  return product;
}

async function update(id) {
  const db = await connection();
  if(!ObjectId.isValid(id)) return null;
  const product = await db.collection('products').updateOne({ _id: ObjectID(id) }, { $set: name, brand });
  if(!product) return add(name, brand);
  return product;
}


module.exports = { add, getAll, getById, update, exclude };
