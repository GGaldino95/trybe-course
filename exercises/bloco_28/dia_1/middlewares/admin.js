module.exports = (req, res, next) => {
  const { user } = req;

  // Caso `req.user` não exista
  if (!user) {
    const err = new Error('This endpoint requires authentication'); // Criamos um objeto de erro
    err.statusCode = 401; // Atribuímos o status `401 Unauthorized` ao erro
    
    return next(err); // E enviamos o erro para o middleware de erro
  }

  // Caso o usuário não seja admin
  if (!user.admin) {
    const err = new Error('Restricted access');
    err.statusCode = 403; // Criamos um novo erro com status `403 Forbidden`
  
    return next(err); // Enviamos o erro para ser processado no middleware de erros
  }
  
  return next(); // Se nenhuma das condições acima forem verdadeiras, a pessoa é admin e podemos continuar com a request
}
