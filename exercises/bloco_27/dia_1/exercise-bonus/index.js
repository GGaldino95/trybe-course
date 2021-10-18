// Importamos as libs que vamos usar;
const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

const app = express(); // Criamos a aplicação do express;

app.use(bodyParser.json()); // Instalamos o middleware que faz a leitura e conversão do corpo das requisições em JSON;

app.post('/user', middlewares.createUser); // Dizemos para o express que toda requisição enviada para `POST /user` deve ser tratada pelo middleware `createUser`;
app.get('/user', middlewares.getAllUsers); // Dizemos para o express que toda requisição enviada para `GET /user` deve ser tratada pelo middleware `getAllUsers`;
app.get('/user/:id', middlewares.findUserById); // Dizemos para o express que toda requisição enviada para `GET /user/:id` deve ser tratada pelo middleware `findUserById`;
app.put('/user/:id', middlewares.updateUser); // Dizemos para o express que toda requisição enviada para `PUT /user/:id` deve ser tratada pelo middleware `updateUser`;

app.use(middlewares.error); // Por último, adicionamos o middleware de erro ao express;

const PORT = 3000; // Definimos a porta;
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); }); // Iniciamos o servidor;
