const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductsController = require('./controllers/ProductsController');
const SalesController = require('./controllers/SalesController');
const connection = require('./models/connection');
const { sessionStore } = require('./models/connection');
const { reseed } = require('./seed');
const sandboxSession = require('./sandbox-session');
const { OK_STATUS } = require('./helpers/httpStatus');

const SERVER_ERROR_STATUS = 500;

const app = express();
// The host assigns the port. The default keeps local runs unchanged.
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(bodyParser.json());
// The portfolio calls this sandbox from another origin. Open on purpose: the data is a public
// demo, there are no cookies and no credentials to protect. `maxAge` matters because the session
// header below makes every request non-simple, and without it the browser would preflight each
// one instead of caching the answer.
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
app.post('/products', ProductsController.create);

// Requisito 02
app.get('/products/', ProductsController.getAll);
app.get('/products/:id', ProductsController.getById);

// Requisito 03
app.put('/products/:id', ProductsController.update);

// Requisito 04
app.delete('/products/:id', ProductsController.remove);

// Requisito 05
app.post('/sales', SalesController.create);

// Requisito 06
app.get('/sales/', SalesController.getAll);
app.get('/sales/:id', SalesController.getById);

// Requisito 07
app.put('/sales/:id', SalesController.update);

// Requisito 08
app.delete('/sales/:id', SalesController.remove);

// Puts the caller's data back to its seeded state. Not part of the 2021 requisitos. With the
// session middleware above, `connection()` already resolves to that visitor's own collections, so
// this resets only them and needs to know nothing about sessions itself. It calls the same
// `reseed` the seed script does, so the button and the script cannot drift apart.
// Express 4 does not forward a rejected async handler, so this catches its own errors.
app.post('/reset', async (_request, response) => {
  try {
    const products = await reseed(await connection());
    return response.status(OK_STATUS).json({ reset: true, products });
  } catch (err) {
    return response.status(SERVER_ERROR_STATUS).json({ message: err.message });
  }
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Only listen when this file is the process entry. On a serverless host the app is imported and
// invoked per request, and a listening socket there is both unused and a startup error.
if (require.main === module) {
  app.listen(PORT, () => { console.log(`Ouvindo a porta ${PORT}`); });
}

module.exports = app;
