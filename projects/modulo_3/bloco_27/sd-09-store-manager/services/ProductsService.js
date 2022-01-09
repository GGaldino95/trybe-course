const ProductsModel = require('../models/ProductsModel');
const error = require('../helpers/errors');
const {
  productAlreadyExists,
  isNameValid,
  isQuantityValueValid,
  isQuantityTypeValid
} = require('../middlewares/validations');

const create = async (name, quantity) => {
  if (!isNameValid(name)) return error.NAME_SIZE;
  if (!isQuantityTypeValid(quantity)) return error.QUANTITY_TYPE;
  if (!isQuantityValueValid(quantity)) return error.QUANTITY_VALUE;

  const createdProduct = await ProductsModel.create(name, quantity);

  if (await productAlreadyExists(name)) return error.PRODUCT_EXISTS;

  return createdProduct;
};

const getAll = async () => {
  const productsList = await ProductsModel.getAll();
  return productsList;
};

const getById = async (id) => {
  const foundProduct = await ProductsModel.getById(id);

  return !foundProduct
    ? error.WRONG_PRODUCTID_FORMAT
    : foundProduct;
};

const update = async (id, name, quantity) => {
  if (!isNameValid(name)) return error.NAME_SIZE;
  if (!isQuantityTypeValid(quantity)) return error.QUANTITY_TYPE;
  if (!isQuantityValueValid(quantity)) return error.QUANTITY_VALUE;

  const updatedProduct = await ProductsModel.update(id, name, quantity);
  return updatedProduct;
};

const remove = async (id) => {
  const foundProduct = await ProductsModel.remove(id);

  return !foundProduct
    ? error.WRONG_PRODUCTID_FORMAT
    : foundProduct;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
