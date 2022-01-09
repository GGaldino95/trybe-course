const RecipeModel = require('../models/RecipeModel');
const error = require('../helpers/errors');

const create = async (recipeInfo, user) => {
  const { name, ingredients, preparation } = recipeInfo;
  if (!name || !ingredients || !preparation) return error.INVALID_ENTRIES;

  const createdRecipe = await RecipeModel.create(recipeInfo, user);
  return createdRecipe;
};

const getAll = async () => {
  const recipesList = await RecipeModel.getAll();
  return recipesList;
};

const getById = async (id) => {
  const foundRecipe = await RecipeModel.getById(id);

  return !foundRecipe
  ? error.RECIPE_NOT_FOUND
  : foundRecipe;
};

const update = async (id, recipeNewInfo) => {
  const updatedRecipe = await RecipeModel.update(id, recipeNewInfo);

  return !updatedRecipe
    ? error.RECIPE_NOT_FOUND
    : updatedRecipe;
};

const remove = async (id) => {
  const removedRecipe = await RecipeModel.remove(id);

  return !removedRecipe
  ? error.RECIPE_NOT_FOUND
  : removedRecipe;
};

const uploadImage = async (id) => {
  const updatedRecipe = await RecipeModel.uploadImage(id);

  return !updatedRecipe
    ? error.RECIPE_NOT_FOUND
    : updatedRecipe;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  uploadImage,
};
