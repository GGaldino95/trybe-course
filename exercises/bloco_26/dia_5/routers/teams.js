const router = require('express').Router();
const { readContentFile, writeContentFile } = require('../utils/fs');
const { validateTeams } = require('../middlewares/validations');
const PATH_FILE = './teams.json';

router.get('/', async (_req, res) => {
  const teams = await readContentFile(PATH_FILE) || [];
  res.status(200).json({ teams });
});

router.post('/', validateTeams, async (req, res,) => {
  const newTeam = {
    ...req.body,
    initials: req.body.initials.toUpperCase(),
  };
  const team = await writeContentFile(PATH_FILE, newTeam);

  res.status(200).json(team);
});

module.exports = router;

/* Dummy:

{
	"name": "Time Teste",
	"initials": "TT",
	"country": "Brazil",
	"league": ""       <=== OPCIONAL
}

*/
