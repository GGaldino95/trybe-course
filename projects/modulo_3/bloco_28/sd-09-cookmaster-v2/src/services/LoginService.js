const UserModel = require('../models/UserModel');
const error = require('../helpers/errors');

const login = async ({ email, password }) => {
  if (!email || !password) return error.EMPTY_FIELD;

  const foundUser = await UserModel.getByEmail(email);

  return !foundUser || foundUser.password !== password
    ? error.INCORRECT_CREDENTIALS
    : foundUser;
};

module.exports = {
  login,
};
