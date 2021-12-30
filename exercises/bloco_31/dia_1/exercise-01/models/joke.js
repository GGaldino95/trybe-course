const axios = require("axios");

const URL = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

async function getJoke() {
  const { data } = await axios(URL);

  return data.joke;
}

module.exports = {
  getJoke
};
