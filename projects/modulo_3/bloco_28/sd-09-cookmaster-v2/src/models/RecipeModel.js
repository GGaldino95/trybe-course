const { ObjectId } = require('mongodb');
const connection = require('./connection');

const DB_COLLECTION = 'recipes';

const create = async (recipeInfo, user) => {
  const createdUser = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .insertOne({ ...recipeInfo, userId: user }));

  return { recipe: createdUser.ops[0] };
};

const getAll = async () => (
  connection().then((db) => db.collection(DB_COLLECTION).find().toArray())
);

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const foundRecipe = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .findOne({ _id: ObjectId(id) }));

  return foundRecipe;
};

const update = async (id, { name, ingredients, preparation }) => {
  if (!ObjectId.isValid(id)) return null;
  const updatedRecipe = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { name, ingredients, preparation } },
        { returnOriginal: false },
      ));

    return updatedRecipe.value;
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const removedRecipe = await connection()
  .then((db) => db.collection(DB_COLLECTION)
    .findOneAndDelete({ _id: ObjectId(id) }));

  return removedRecipe.value;
};

const uploadImage = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const updatedRecipe = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { image: `localhost:3000/src/uploads/${id}.jpeg` } },
        { returnOriginal: false },
      ));

    return updatedRecipe.value;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  uploadImage,
};
