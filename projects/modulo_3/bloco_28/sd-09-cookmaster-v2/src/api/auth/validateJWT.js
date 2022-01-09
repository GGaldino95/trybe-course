const jwt = require('jsonwebtoken');
const UserModel = require('../../models/UserModel');
const { JWT_ERROR, INCORRECT_CREDENTIALS, TOKEN_NOT_FOUND } = require('../../helpers/errors');

const secret = 'oSegredoMaisSecretoDeTodosOsSegredosSuperSecretos';

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(TOKEN_NOT_FOUND.status).json(TOKEN_NOT_FOUND.error);

  try {
    const decoded = jwt.verify(token, secret);
    const foundUser = await UserModel.getByEmail(decoded.data.email);

    if (!foundUser) {
      return res.status(INCORRECT_CREDENTIALS.status).json(INCORRECT_CREDENTIALS.error);
    }

    const { _id } = foundUser;
    req.user = _id;

    next();
  } catch (err) {
    return res.status(JWT_ERROR.status).json({ message: err.message });
  }
};

module.exports = {
  tokenValidation,
  secret,
};
