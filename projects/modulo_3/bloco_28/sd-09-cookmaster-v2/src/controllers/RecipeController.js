const RecipeService = require('../services/RecipeService');
const { CREATED_STATUS, OK_STATUS, NO_CONTENT } = require('../helpers/httpStatus');
const upload = require('../middlewares/upload');

const create = async (req, res) => {
  const recipeInfo = req.body;
  const { user } = req;
  const createdRecipe = await RecipeService.create(recipeInfo, user);

  return createdRecipe.error
    ? res.status(createdRecipe.status).json(createdRecipe.error)
    : res.status(CREATED_STATUS).json(createdRecipe);
};

const getAll = async (_req, res) => {
  const recipesList = await RecipeService.getAll();
  return res.status(OK_STATUS).json(recipesList);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const foundRecipe = await RecipeService.getById(id);

  return foundRecipe.error
    ? res.status(foundRecipe.status).json(foundRecipe.error)
    : res.status(OK_STATUS).json(foundRecipe);
};

const update = async (req, res) => {
  const { id } = req.params;
  const recipeNewInfo = req.body;
  const updatedRecipe = await RecipeService.update(id, recipeNewInfo);

  return updatedRecipe.error
    ? res.status(updatedRecipe.status).json(updatedRecipe.error)
    : res.status(OK_STATUS).json(updatedRecipe);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removedRecipe = await RecipeService.remove(id);

  return removedRecipe.error
    ? res.status(removedRecipe.status).json(removedRecipe.error)
    : res.status(NO_CONTENT).json();
};

const uploadImage = [
  upload.single('image'),
  async (req, res) => {
    const { id } = req.params;
    const updatedRecipe = await RecipeService.uploadImage(id);

  return updatedRecipe.error
    ? res.status(updatedRecipe.status).json(updatedRecipe.error)
    : res.status(OK_STATUS).json(updatedRecipe);
  },
];

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  uploadImage,
};
