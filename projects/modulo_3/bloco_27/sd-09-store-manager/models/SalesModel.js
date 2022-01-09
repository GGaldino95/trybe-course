const connection = require('./connection');
const { ObjectId } = require('mongodb');

const DB_COLLECTION = 'sales';

const create = async (productsList) => {
  const createdSale = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .insertMany([{ itensSold: [...productsList] }])
    );

  productsList.forEach(async ({ productId, quantity }) => {
    await connection()
      .then((db) => db.collection('products')
        .findOneAndUpdate(
          { _id: ObjectId(productId) },
          { $inc: { quantity: -quantity } }
        )
      );
  });

  return createdSale.ops[0];
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

const update = async (saleId, productsList) => {
  const updatedSale = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(saleId) },
        { $set: { itensSold: productsList } },
        { returnOriginal: false } // OBS*
      )
    );

  return updatedSale.value;
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const { itensSold } = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .findOne({ _id: ObjectId(id) })
    );

  itensSold.forEach(async ({ productId, quantity }) => {
    await connection()
      .then((db) => db.collection('products')
        .findOneAndUpdate(
          { _id: ObjectId(productId) },
          { $inc: { quantity: quantity } }
        )
      );
  });

  return await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .findOneAndDelete({ _id: ObjectId(id) }) // https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndDelete/
    );
};

module.exports = {
  create,
  getAll,
  getById,
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