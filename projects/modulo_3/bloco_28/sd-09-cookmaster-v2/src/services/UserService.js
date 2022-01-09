const UserModel = require('../models/UserModel');
const error = require('../helpers/errors');
const {
  isNameValid,
  isEmailValid,
  isPasswordValid,
  emailAlreadyExists,
} = require('../middlewares/validations');

const create = async (userInfo) => {
  if (!isNameValid(userInfo.name) 
  || !isEmailValid(userInfo.email)
  || !isPasswordValid(userInfo.password)) {
    return error.INVALID_ENTRIES;
  }
  
  if (await emailAlreadyExists(userInfo.email)) return error.ALREADY_EXISTS;
  
  const createdUser = await UserModel.create(userInfo);
  return createdUser;
};

module.exports = {
  create,
};
