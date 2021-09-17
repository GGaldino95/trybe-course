const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const crypto = require('crypto');

const simpsonsUtils = require('./utils/fs');
const auth = require(`./auth`);

const app = express();

app.use(express.json());

// Exercicio Bonus - signup tem que vir antes de `app.use(auth)` pois essa rota nao precisa de token, visto que ela e quem ira gerar a token.
app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

app.use(auth);

// Exercicio 01
app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

// Exercicio 02
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` });
});

// Exercicio 03
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  res.status(200).json({ message: `Hello, ${name}!` });
});

// Exercicio 04
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

// Exercicio 05
app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await simpsonsUtils.getSimpsons();
  const simpson = simpsons.find((simpson) => simpson.id === id);

  return !simpson
    ? res.status(404).json({ message: 'simpson not found' })
    : res.status(202).json(simpson);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await simpsonsUtils.getSimpsons();

  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  }

  simpsons.push({ id, name });
  await simpsonsUtils.setSimpsons(simpsons);
  res.status(204).end();
}));

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
