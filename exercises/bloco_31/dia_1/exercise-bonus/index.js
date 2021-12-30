require('dotenv').config();
const express = require('express');

const cepController = require('./controllers/cepController');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', cepController.lookupCEP);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
