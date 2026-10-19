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
// Required before any request is served: it is what points a visitor's reads and writes at their
// own copy of talker.json.
const sandboxSession = require('./sandbox-session');

const app = express();
app.use(bodyParser.json());
// The portfolio calls this sandbox from another origin. Open on purpose: the data is a public
// demo, there are no cookies and no credentials to protect. `maxAge` matters because the session
// header below makes every request non-simple, and without it the browser would preflight each
// one instead of caching the answer.
app.use(cors({ maxAge: 7200 }));

// Gives each visitor their own copy of the data. A request without the header is left alone and
// behaves exactly like the 2021 project, which is what curl and the original test suite see.
app.use((request, _response, next) => {
  const sessionId = request.get(sandboxSession.HEADER);

  if (!sessionId || !sandboxSession.ID_PATTERN.test(sessionId)) return next();

  sandboxSession.sessionStore.run(sessionId, () => {
    sandboxSession.open(sessionId).then(() => next()).catch(next);
  });
});

const HTTP_OK_STATUS = 200;
const SERVER_ERROR_STATUS = 500;
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

// Puts the caller's data back to the seed. Not part of the 2021 requisitos. Inside a session it
// resets only that visitor's copy; without one, the shared talker.json, like `npm run restore`.
// Express 4 does not forward a rejected async handler, so this catches its own errors.
app.post('/reset', async (_request, response) => {
  try {
    const talkers = await sandboxSession.reset();
    return response.status(HTTP_OK_STATUS).json({ reset: true, talkers });
  } catch (err) {
    return response.status(SERVER_ERROR_STATUS).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
