const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const middlewares = require('./middlewares');
const { sessionStore } = require('./models');
const { reseed } = require('./seed');
const { current } = require('./models');
const sandboxSession = require('./sandbox-session');
const { authorization } = require('./middlewares/authorization');

const user = require('./controllers/users');
const { login } = require('./controllers/login');
const category = require('./controllers/categories');
const blogPost = require('./controllers/blogPosts');

const app = express();
// The host assigns the port. The default keeps local runs unchanged.
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;
const SERVER_ERROR_STATUS = 500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// The portfolio calls this sandbox from another origin. Open on purpose: the data is a public demo,
// there are no cookies and no credentials to protect. `maxAge` matters because the session header
// below makes every request non-simple, and without it the browser would preflight each one
// instead of caching the answer.
app.use(cors({ maxAge: 7200 }));

// Gives each visitor their own copy of the data. A request without the header is left alone and
// behaves exactly like the 2021 project, which is what curl and the original evaluator see.
app.use((request, response, next) => {
  const sessionId = request.get(sandboxSession.HEADER);

  if (!sessionId || !sandboxSession.ID_PATTERN.test(sessionId)) return next();

  sessionStore.run(sessionId, () => {
    sandboxSession.open(sessionId).then(() => next()).catch(next);
  });
});

// Requisito 01
app.post('/user', user.create);

// Requisito 02
app.post('/login', login);

// Requisito 03
app.get('/user', authorization, user.getAll);

// Requisito 04
app.get('/user/:id', authorization, user.getById);

// Requisito 05
app.post('/categories', authorization, category.create);

// Requisito 06
app.get('/categories', authorization, category.getAll);

// Requisito 07
app.post('/post', authorization, blogPost.create);

// Requisito 08
app.get('/post', authorization, blogPost.getAll);

// Requisito 09
app.get('/post/:id', authorization, blogPost.getById);

// Requisito 10
app.put('/post/:id', authorization, blogPost.update);

// Requisito 11
app.delete('/post/:id', authorization, blogPost.remove);

// Requisito 12
app.delete('/user/me', authorization, user.remove);

// Requisito 13
app.get('/post/search', authorization, blogPost.searchBy);

// Puts the caller's data back to its seeded state. Not part of the 2021 requisitos. With the
// session middleware above, the models already resolve to that visitor's own database, so this
// resets only them and needs to know nothing about sessions itself. It calls the same `reseed` a
// new session does, so the button and a fresh visit cannot drift apart.
// Express 4 does not forward a rejected async handler, so this catches its own errors.
app.post('/reset', async (_request, response) => {
  try {
    await reseed(current().sequelize);
    return response.status(200).json({ reset: true });
  } catch (err) {
    return response.status(SERVER_ERROR_STATUS).json({ message: err.message });
  }
});

app.use(middlewares.error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// Only listen when this file is the process entry. On a serverless host the app is imported and
// invoked per request, and a listening socket there is both unused and a startup error.
if (require.main === module) {
  app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
}

module.exports = app;
