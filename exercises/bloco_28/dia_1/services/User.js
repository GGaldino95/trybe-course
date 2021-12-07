const jwt = require('jsonwebtoken');
const model = require('../models/User');

const { JWT_SECRET } = process.env;

const login = async (username, password) => {
  // Não precisamos validar os campos, pois o controller já faz isso pra nós
  // Buscamos as informações no arquivo Users.json
  const user = await model.findOne(username);

  if (!user || user.password !== password) {
    return {
      error: {
        code: 'invalidCredentials',
        message: 'Invalid username or password',
      },
    };
  }

  const payload = {
    username,
    /* Usamos a informaçào no arquivo Users.json para determinar
       se a pessoa é admin */
    admin: user.admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
};

const create = async (username, password) => {
  const userExists = await model.findOne(username); // A primeira coisa que precisamos fazer é verificar se o username informado já existe

  // Caso o username já exista
  if (userExists) {
    // Retornamos um objeto de erro
    return {
      error: {
        message: 'Username already exists',
        code: 'usernameExists',
      },
    };
  }

  // Caso o username não exista, "rolamos o dado" para descobrir se essa pessoa será admin
  const admin = Math.floor(Math.random() * 100) > 50;

  await model.create(username, password, admin); // Depois, armazenamos os dados no arquivo

  // Por fim, retornamos o token
  // Nao precisamos mais passar o valor de admin, pois será lido do arquivo */
  return login(username, password);
};

module.exports = {
  create,
  login,
};
