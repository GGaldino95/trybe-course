const jwt = require('jsonwebtoken');
const LoginService = require('../services/LoginService');
const { OK_STATUS } = require('../helpers/httpStatus');
const { secret } = require('../api/auth/validateJWT');

const login = async (req, res) => {
  const loginInfo = req.body;
  const loginResponse = await LoginService.login(loginInfo);

  if (loginResponse.error) return res.status(loginResponse.status).json(loginResponse.error);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const { name, password, ...user } = loginResponse;
  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return res.status(OK_STATUS).json({ token });
};

module.exports = {
  login,
};
