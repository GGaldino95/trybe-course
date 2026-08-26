const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductsController = require('./controllers/ProductsController');
const SalesController = require('./controllers/SalesController');

const app = express();
// The host assigns the port. The default keeps local runs unchanged.
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(bodyParser.json());
// The portfolio calls this sandbox from another origin. Open on purpose: the data is a public
// demo, there are no cookies and no credentials to protect.
app.use(cors());

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
