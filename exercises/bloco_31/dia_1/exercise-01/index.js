const express = require("express");

const app = express();

const { listJokes } = require("./controllers/joke.js")

app.set("view engine", "ejs");

app.set("views", "./views");

app.get("/", listJokes);

app.listen(3000, () => console.log('listening to the port 3000'));
