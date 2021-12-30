const express = require('express');
const jokesController = require('./controllers/jokesController');
const categoriesController = require('./controllers/categoriesController');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/jokes', jokesController.randomJoke);

app.get('/jokes/:category', jokesController.jokeByCategory);

app.get('/categories', categoriesController.getCategories);

app.get('/', categoriesController.redirectToCategories);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
