const fs = require('fs').promises;

const editTalkerById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const talkers = await fs.readFile('./talker.json', 'utf8').then((data) => JSON.parse(data)); 
    const filteredTalkers = talkers.filter((talker) => talker.id !== +id);
    const newTalkerInfo = { ...req.body, id };
    const updatedTalkers = [...filteredTalkers, newTalkerInfo];

    await fs.writeFile('./talker.json', JSON.stringify(updatedTalkers));

    res.status(200).json(newTalkerInfo);
  } catch (error) { console.log(error); }
};

module.exports = editTalkerById;
