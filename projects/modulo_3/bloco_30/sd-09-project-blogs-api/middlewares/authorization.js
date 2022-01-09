require('dotenv/config');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const authorization = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return next({ statusCode: 401, message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);
    const foundUser = await User.findOne({ where: { email: decoded.email } });

    if (!foundUser) return next({ statusCode: 401, message: 'User not found' });

    const { _id, password, ...user } = foundUser;
    req.user = { id: _id, ...user };

    next();
  } catch (err) {
    return next({ statusCode: 401, message: 'Expired or invalid token' });
  }
};

module.exports = {
  authorization,
  secret,
};