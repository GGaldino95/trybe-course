const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');
const RecipeController = require('../controllers/RecipeController');
const { tokenValidation } = require('./auth/validateJWT');
const connection = require('../models/connection');
const { sessionStore } = require('../models/connection');
const { reseed } = require('../../sandbox-seed');
const sandboxSession = require('../../sandbox-session');
const { OK_STATUS } = require('../helpers/httpStatus');

const SERVER_ERROR_STATUS = 500;

const app = express();

app.use(bodyParser.json());
// The portfolio calls this sandbox from another origin. Open on purpose: the data is a public
// demo, there are no cookies, and the token is one the sandbox issued itself. `maxAge` matters
// because the session and authorization headers make every request non-simple, and without it the
// browser would preflight each one instead of caching the answer.
app.use(cors({ maxAge: 7200 }));

// Gives each visitor their own copy of the data. A request without the header is left alone and
// behaves exactly like the 2021 project, which is what curl and the original test suite see.
app.use((request, response, next) => {
  const sessionId = request.get(sandboxSession.HEADER);

  if (!sessionId || !sandboxSession.ID_PATTERN.test(sessionId)) return next();

  sessionStore.run(sessionId, () => {
    sandboxSession.open(sessionId).then(() => next()).catch(next);
  });
});

// Requisito 01
app.post('/users', UserController.create);

// Requisito 02
app.post('/login', LoginController.login);

// Requisito 03
app.post('/recipes', tokenValidation, RecipeController.create);

// Requisito 04
app.get('/recipes', RecipeController.getAll);

// Requisito 05
app.get('/recipes/:id', RecipeController.getById);

// Requisito 07
app.put('/recipes/:id', tokenValidation, RecipeController.update);

// Requisito 08
app.delete('/recipes/:id', tokenValidation, RecipeController.remove);

// Requisito 09
app.put('/recipes/:id/image', tokenValidation, RecipeController.uploadImage);

// Puts the caller's data back to its seeded state. Not part of the 2021 requisitos. With the
// session middleware above, `connection()` already resolves to that visitor's own collections, so
// this resets only them and needs to know nothing about sessions itself. It calls the same
// `reseed` the seed script does, so the button and the script cannot drift apart.
// Express 4 does not forward a rejected async handler, so this catches its own errors.
app.post('/reset', async (_request, response) => {
  try {
    const recipes = await reseed(await connection());
    return response.status(OK_STATUS).json({ reset: true, recipes });
  } catch (err) {
    return response.status(SERVER_ERROR_STATUS).json({ message: err.message });
  }
});

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
