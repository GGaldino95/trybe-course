const Category = require('../models/Category');

const getCategories = async (_req, res) => {
  const categories = await Category.getCategories();

  res.render('categories/index', { categories });
};

const redirectToCategories = (_req, res) => {
  res.redirect('/categories');
};

module.exports = {
  getCategories,
  redirectToCategories,
};
