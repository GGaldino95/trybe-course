const fs = require('fs').promises;

const getTalkerById = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const talkers = await fs.readFile('./talker.json', 'utf8');
    const foundTalker = JSON.parse(talkers).find((user) => user.id === +id);

    if (!foundTalker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } 

    return res.status(200).json(foundTalker);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getTalkerById;
