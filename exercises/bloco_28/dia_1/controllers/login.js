const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  // Utilizamos o Joi para validar o schema do body
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body); // Construímos um schema do Joi

  // Caso ocorra erro na validação do Joi, passamos esse erro para o express, que chamará nosso middleware de erro
  if (error) return next(error);

  const payload = {
    username: req.body.username,
    admin: false,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};