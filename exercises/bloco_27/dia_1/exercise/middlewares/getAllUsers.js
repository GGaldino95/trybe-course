const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = rescue(async (_req, res) => { // Pedimos para o model buscar todos os usuários;
  const allUsers = await UserModel.findAll() // Como o `findAll` sempre retorna um Array, não precisamos nos preocupar com o `toArray`;
  res.status(200).json(allUsers);
});

