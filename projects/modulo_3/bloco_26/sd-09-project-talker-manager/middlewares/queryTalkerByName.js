const fs = require('fs').promises;

const queryTalkerByName = async (req, res) => {
  console.log('teste');
  try {
    const nameSearch = req.query.q;
    console.log(req.query.q);
    const talkers = await fs.readFile('./talker.json', 'utf8').then((data) => JSON.parse(data));
    const selectedTalker = talkers.find((talker) => talker.name.includes(nameSearch));

    if (!nameSearch) { return res.status(200).json(talkers); }
    if (!selectedTalker) { return res.status(200).json([]); }

    return res.status(200).json(talkers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = queryTalkerByName;
