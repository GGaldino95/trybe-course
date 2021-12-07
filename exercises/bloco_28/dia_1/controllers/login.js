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

  // Se o login for admin e a senha estiver incorreta
  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password'); // Criamos um novo objeto de erro
    err.statusCode = 401; // Adicionamos o status `401 Unauthorized` ao erro
    
    return next(err); // Passmos o erro para o express, para que seja tratado pelo middleware de erro
  }

  // Definimos admin como true se username e password estiverem corretos
  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';

  const payload = {
    username: req.body.username,
    admin, // Passamos a utilizar o valor da variável `admin` para determinar o valor do campo `admin` no payload do token
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });git

  res.status(200).json({ token });
};