const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const PORT = 3000;
const API_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const userRouter = require('./routers/user');
const postsRouter = require(`./routers/posts`);
const teamsRouter = require('./routers/teams');
const { validateToken } = require('./middlewares/validations');
const { routerNotFound } = require('./middlewares/errors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Exercicio 01
app.use('/user', userRouter);

// Exercicio 02
app.get('/btc', validateToken, async (_req, res) => {
  const result = await axios.get(API_ENDPOINT);
  res.status(200).json(result.data);
});

// Exercicio 03
app.use('/posts', postsRouter);

// Exercicio 04
app.use('/teams', teamsRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(routerNotFound);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
