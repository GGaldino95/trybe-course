const Joke = require('../models/Joke');

const randomJoke = async (_req, res) => {
  const joke = await Joke.getRandomJoke();

  res.render('jokes/index', { joke });
};

const jokeByCategory = async (req, res) => {
  const { category } = req.params;
  const joke = await Joke.getJokeByCategory(category);

  res.render('jokes/index', { joke });
};

module.exports = {
  randomJoke,
  jokeByCategory,
};
