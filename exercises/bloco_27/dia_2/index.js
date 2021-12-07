require('dotenv').config(); // Carregamos as variáveis de ambiente
const express = require('express');
const bodyParser = require('body-parser');
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js');

const app = express(); // Criamos a aplicação do express
app.use(bodyParser.json());

// Registramos o endpoint `GET /ping`
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

// Registramos o endpoint `GET /cep/:cep`
app.get('/cep/:cep', Cep.findAddressByCep);

// Registramos o middleware de erro
app.use(errorMiddleware);

// Lemos a porta da variável de ambiente, ou usamos 3000
const PORT = process.env.PORT || 3000;

// Iniciamos a aplicação ouvindo na porta informada na variável de ambiente.
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
