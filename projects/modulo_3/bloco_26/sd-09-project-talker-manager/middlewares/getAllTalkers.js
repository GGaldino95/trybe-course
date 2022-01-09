const fs = require('fs').promises;

const getAllTalkers = async (req, res, _next) => {
  try {
    const talkers = await fs.readFile('./talker.json', 'utf8');

    return res.status(200).send(JSON.parse(talkers)); 
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllTalkers;
