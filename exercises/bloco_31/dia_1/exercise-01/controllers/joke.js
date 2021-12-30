const jokeModel = require("../models/joke");

async function listJokes(_req, res) {
  const joke = await jokeModel.getJoke();
  console.log(joke)
  return res.render("jokeView", { joke });
}

module.exports = {
  listJokes
};
