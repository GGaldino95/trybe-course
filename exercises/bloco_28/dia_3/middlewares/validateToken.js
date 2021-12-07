const jwt = require('jsonwebtoken');
const { findUser } = require('../models/users');

const SECRET = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const payload = jwt.verify(token, SECRET);

    const user = await findUser(payload.username);

    if (!user) {
      return res.status(401).json({ message: 'invalid user' });
    }

    const { password, ...userWithoutPassword } = user;

    req.user = userWithoutPassword;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = { validateToken };
