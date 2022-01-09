const crypto = require('crypto');

const postLogin = (_req, res, _next) => {
  try {
    const token = crypto.randomBytes(8).toString('hex');

    return res.status(200).send({ token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = postLogin;
