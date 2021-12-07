const { createUserService } = require('../services/users');
const Model = require('../models/users');

const createUser = async (req, res) => {
  try {
    const { username = '', password = '' } = req.body;
    const result = await createUserService(username, password);
    
    return res.status(result.status).json({ message: result.message });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};

const findUserById = async (req, res) => {
  if (req.params.userId !== req.user._id) {
    res.status(401).json({ error: 'Acesso negado' });
  }

  const {
    name,
    username,
    birthdate,
    biography
  } = await Model.findUserById(req.params.userId);

  res.status(200).json({
    name,
    username,
    birthdate,
    biography,
  });
};

module.exports = { createUser, findUserById };
