const UserService = require('../services/UserService');
const { CREATED_STATUS } = require('../helpers/httpStatus');

const create = async (req, res) => {
  const userInfo = req.body;
  const createdUser = await UserService.create({ role: 'user', ...userInfo });

  return createdUser.error
    ? res.status(createdUser.status).json(createdUser.error)
    : res.status(CREATED_STATUS).json(createdUser);
};

module.exports = {
  create,
};
