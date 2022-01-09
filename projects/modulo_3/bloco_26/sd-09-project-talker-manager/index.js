const express = require('express');
const bodyParser = require('body-parser');
const {
  getAllTalkers,
  getTalkerById,
  postLogin,
  addNewTalker,
  editTalkerById,
  deleteTalkerById,
  queryTalkerByName,
} = require('./middlewares');
const {
  tokenValidation,
  emailValidation,
  passwordValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
} = require('./services');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Requisito 01
app.get('/talker', getAllTalkers);

// Requisito 07
app.get('/talker/search',
  tokenValidation,
  queryTalkerByName);

// Requisito 02
app.get('/talker/:id', getTalkerById);

// Requisito 03
app.post('/login', emailValidation, passwordValidation, postLogin);

// Requisito 04
app.post('/talker',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
  addNewTalker);

// Requisito 05
app.put('/talker/:id',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
  editTalkerById);

// Requisito 06
app.delete('/talker/:id',
  tokenValidation,
  deleteTalkerById);

app.listen(PORT, () => {
  console.log('Online');
});
