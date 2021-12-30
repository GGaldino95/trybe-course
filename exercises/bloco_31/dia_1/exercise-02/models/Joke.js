const axios = require('axios');

const getRandomJoke = async () => {
  const { data } = await axios.get('https://api.chucknorris.io/jokes/random')

  return data.value;
};

const getJokeByCategory = async (category) => {
  const { data } = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)

  return data.value;
};

module.exports = {
  getRandomJoke,
  getJokeByCategory,
};
