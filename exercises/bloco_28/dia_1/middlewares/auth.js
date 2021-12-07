const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.headers.authorization; // Buscamos o token no header `Authorization`

  // Caso o token não exista
  if (!token) {
    const err = new Error('Token not found'); // Criamos um novo objeto de erro
    err.statusCode = 401; // Damos o status 401 ao erro
    
    return next(err); // Enviamos o erro para ser tratado pelo middleware de erro
  }

  // Realizamos uma tentativa de validar o token
  try {
    const payload = jwt.verify(token, JWT_SECRET); // Pedimos para que a bilioteca de JWT valide o token
    // Caso não ocorra nenhum erro, significa que o token é válido e podemos continuar

    req.user = payload // Armazenamos os dados da pessoa no objeto de request

    return next()
  } catch (err) {
    err.statusCode = 401; // Caso haja algum erro ao validar o token, adicionamos o status 401 a esse erro
    
    return next(err); // E enviamos o erro para ser processador pelo middleware de erro
  }
}