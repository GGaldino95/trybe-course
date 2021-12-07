require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const { getPosts } = require('./controllers/posts');
const { createUser, findUserById } = require('./controllers/users');
const { login } = require('./controllers/login');
const { createProduct } = require('./controllers/products');
const { validateToken } = require('./middlewares/validateToken')

const app = express();

app.use(bodyParser.json());

app.get('/api/posts', validateToken, getPosts);
app.get('/api/users/:userId', validateToken, findUserById);
app.post('/api/users', createUser);
app.post('/api/login', login);

app.post('/api/products', validateToken, createProduct);

const PORT = 3000;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
