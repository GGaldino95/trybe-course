const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const model = require('./model');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/getAll', async (_req, res) => {
  const get = await model.getAll();
  res.status(200).json(get);
});

app.post('/insertNewMessage', async (req, res) => {
  const { name, message } = req.body;
  await model.insertNewMessage(name, message);
  const get = await model.getAll();
  res.status(200).json(get);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
