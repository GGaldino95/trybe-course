const ProductsModel = require('../models/ProductsModel');
const FIVE = 5;
const ZERO = 0;

const productAlreadyExists = async (name) => {
  const foundProduct = await ProductsModel.getByName(name);
  return foundProduct.length > 1;
};

const isNameValid = (name) => name.length > FIVE;

const isQuantityValueValid = (quantity) => quantity > ZERO;

const isQuantityTypeValid = (quantity) => typeof quantity === 'number';

const productExists = async (id) => await ProductsModel.getById(id);

const isSalesQuantityValid = (quantity) => !(
  quantity <= ZERO || typeof quantity !== 'number'
);

const isProductStockAvailable = async (id, quantity) => {
  const foundProduct = await ProductsModel.getById(id);
  return (foundProduct.quantity >= quantity);
};

module.exports = {
  productExists,
  productAlreadyExists,
  isNameValid,
  isQuantityValueValid,
  isQuantityTypeValid,
  isSalesQuantityValid,
  isProductStockAvailable
};
