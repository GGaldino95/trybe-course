const fs = require('fs').promises;

const addNewTalker = async (req, res, _next) => {
  const talkers = await fs.readFile('./talker.json', 'utf8').then((data) => JSON.parse(data));
  req.body.id = talkers.length + 1;
  await fs.writeFile('./talker.json', JSON.stringify([...talkers, req.body]));

  return res.status(201).json(req.body);
};

module.exports = addNewTalker;
