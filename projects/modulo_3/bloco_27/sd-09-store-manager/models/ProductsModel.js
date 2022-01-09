const connection = require('./connection');
const { ObjectId } = require('mongodb');

const DB_COLLECTION = 'products';

const create = async (name, quantity) => {
  const createdProduct = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .insertOne({ name, quantity })
    );

  return createdProduct.ops[0];
};

const getAll = async () => (
  await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .find().toArray()
    )
);

const getById = async (id) => (
  !ObjectId.isValid(id)
    ? null
    : await connection()
      .then((db) => db.collection(DB_COLLECTION)
        .findOne({ _id: ObjectId(id) })
      )
);

const getByName = async (name) => (
  await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .find({ name }).toArray()
    )
);

const update = async (id, name, quantity) => {
  if (!ObjectId.isValid(id)) return null;

  const updatedProduct = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { name, quantity } },
        { returnOriginal: false } // OBS*
      )
    );

  return updatedProduct.value;
};

const remove = async (id) => (
  !ObjectId.isValid(id)
    ? null
    : await connection()
      .then((db) => db.collection(DB_COLLECTION)
        .findOneAndDelete({ _id: ObjectId(id) }) // https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndDelete/
      )
);

module.exports = {
  create,
  getAll,
  getById,
  getByName,
  update,
  remove,
};

/*
OBS*:

Deveria ser usado o 'returnNewDocument', mas não funciona.
Fonte: https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/

Já com o 'returnOriginal', funciona. Caso 'true', ele exibe o objeto antes de ser alterado, falhando o teste.
Fonte: https://stackoverflow.com/questions/35626040/findoneandupdate-used-with-returnnewdocumenttrue-returns-the-original-document
*/