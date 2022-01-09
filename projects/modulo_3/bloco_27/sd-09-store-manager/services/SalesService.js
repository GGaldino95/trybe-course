const SalesModel = require('../models/SalesModel');
const error = require('../helpers/errors');
const {
  productExists,
  isSalesQuantityValid,
  isProductStockAvailable
} = require('../middlewares/validations');

const create = async (productsList) => {
  for (const { productId, quantity } of productsList) {
    if (!productExists(productId)) return error.INVALID_ID_OR_QUANTITY;
    if (!isSalesQuantityValid(quantity)) return error.INVALID_ID_OR_QUANTITY;
    if (!await isProductStockAvailable(productId, quantity))
      return { error: error.INVALID_STOCK_AMOUNT };
  }

  const createdSale = await SalesModel.create(productsList);
  return createdSale;
};

const getAll = async () => {
  const salesList = await SalesModel.getAll();
  return salesList;
};

const getById = async (id) => {
  const foundSale = await SalesModel.getById(id);

  return !foundSale
    ? error.SALE_NOT_FOUND
    : foundSale;
};

const update = async (id, productsList) => {
  for (const { quantity } of productsList) {
    if (!isSalesQuantityValid(quantity)) return error.INVALID_ID_OR_QUANTITY;
  }

  const updatedSale = await SalesModel.update(id, productsList);
  return updatedSale;
};

const remove = async (id) => {
  const foundSale = await SalesModel.remove(id);

  return !foundSale
    ? error.WRONG_SALEID_FORMAT
    : foundSale;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
