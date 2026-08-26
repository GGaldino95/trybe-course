const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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
// The portfolio calls this sandbox from another origin. Open on purpose: the data is a public
// demo, there are no cookies and no credentials to protect.
app.use(cors());

const HTTP_OK_STATUS = 200;
// The host assigns the port; 3000 stays the default so running it locally is unchanged.
const PORT = process.env.PORT || '3000';

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
