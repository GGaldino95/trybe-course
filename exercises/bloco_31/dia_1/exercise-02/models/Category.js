const axios = require('axios');

const getCategories = async () => {
  const { data } = await axios.get('https://api.chucknorris.io/jokes/categories')

  return data;
};

module.exports = {
  getCategories
};
