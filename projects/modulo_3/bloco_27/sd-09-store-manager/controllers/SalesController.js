const SalesServices = require('../services/SalesService');
const {
  OK_STATUS,
  NOT_FOUND,
  UNPROCESSABLE_ENTITY_STATUS
} = require('../helpers/httpStatus');

const create = async (req, res) => {
  const productsList = req.body;
  const createdSale = await SalesServices.create(productsList);

  if (createdSale.err) return res.status(UNPROCESSABLE_ENTITY_STATUS).json(createdSale);
  if (createdSale.error) return res.status(NOT_FOUND).json(createdSale.error);
  return res.status(OK_STATUS).json(createdSale);
};

const getAll = async (_req, res) => {
  const salesList = await SalesServices.getAll();

  return res.status(OK_STATUS).json({ sales: salesList });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const selectedSale = await SalesServices.getById(id);

  return selectedSale.err
    ? res.status(NOT_FOUND).json(selectedSale)
    : res.status(OK_STATUS).json(selectedSale);
};

const update = async (req, res) => {
  const { id } = req.params;
  const productsList = req.body;
  const updatedSale = await SalesServices.update(id, productsList);

  return updatedSale.err
    ? res.status(UNPROCESSABLE_ENTITY_STATUS).json(updatedSale)
    : res.status(OK_STATUS).json(updatedSale);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removedSale = await SalesServices.remove(id);

  return removedSale.err
    ? res.status(UNPROCESSABLE_ENTITY_STATUS).json(removedSale)
    : res.status(OK_STATUS).json(removedSale);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
