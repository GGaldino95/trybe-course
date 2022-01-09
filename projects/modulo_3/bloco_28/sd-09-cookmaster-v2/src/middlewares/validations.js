const UserModel = require('../models/UserModel');

const isNameValid = (name) => name;
const isEmailValid = (email) => (/^\S+@\S+$/).test(email);
const isPasswordValid = (password) => password;
const emailAlreadyExists = async (email) => UserModel.getByEmail(email);

module.exports = {
  isNameValid,
  isEmailValid,
  isPasswordValid,
  emailAlreadyExists,
};
