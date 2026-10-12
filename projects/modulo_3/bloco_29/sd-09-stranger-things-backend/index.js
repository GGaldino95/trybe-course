require('dotenv/config');
const express = require('express');
const cors = require('cors');

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset,
);
const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository,
);

app.use(cors());

function getBool(str) {
  if (str === 'true') return true;
  return false;
}

const hereIsTheUpsideDown = getBool(process.env.UPSIDEDOWN_MODE) || false;

app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    hereIsTheUpsideDown,
  );

  res.status(200).json(characters);
});

// Only listen when this file is the process entry. On a serverless host the app is imported and
// invoked per request, and a listening socket there is both unused and a startup error.
if (require.main === module) {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Escutando na porta 3000');
  });
}

module.exports = app;
