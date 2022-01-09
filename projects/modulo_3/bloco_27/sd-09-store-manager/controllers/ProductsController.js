const ProductsService = require('../services/ProductsService');
const {
  OK_STATUS,
  CREATED_STATUS,
  UNPROCESSABLE_ENTITY_STATUS
} = require('../helpers/httpStatus');

const create = async (req, res) => {
  const { name, quantity } = req.body;
  const createdProduct = await ProductsService.create(name, quantity);

  return createdProduct.err
    ? res.status(UNPROCESSABLE_ENTITY_STATUS).json(createdProduct)
    : res.status(CREATED_STATUS).json(createdProduct);
};

const getAll = async (_req, res) => {
  const productsList = await ProductsService.getAll();

  return res.status(OK_STATUS).json({ products: productsList });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const selectedProduct = await ProductsService.getById(id);

  return selectedProduct.err
    ? res.status(UNPROCESSABLE_ENTITY_STATUS).json(selectedProduct)
    : res.status(OK_STATUS).json(selectedProduct);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const updatedProduct = await ProductsService.update(id, name, quantity);

  return updatedProduct.err
    ? res.status(UNPROCESSABLE_ENTITY_STATUS).json(updatedProduct)
    : res.status(OK_STATUS).json(updatedProduct);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removedProduct = await ProductsService.remove(id);

  return removedProduct.err
    ? res.status(UNPROCESSABLE_ENTITY_STATUS).json(removedProduct)
    : res.status(OK_STATUS).json(removedProduct);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
