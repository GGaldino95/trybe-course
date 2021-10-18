const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = [
  (req, _res, next) => {
    const { error } = UserModel.isValid(req.body); // De forma semelhante ao middleware de criação de usuário, começamos validando os dados da request;

    if (error) return next(error); // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares;

    next(); // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware;
  },
  rescue(async (req, res) => {
    const { id } = req.params; // Extraímos o id do usuário da rota;
    const { firstName, lastName, email, password } = req.body; // Extraímos os dados da request;
    const updatedUser = await UserModel.updateUser(id, { firstName, lastName, email, password }); // Pedimos que o model altere e nos devolva o usuário alterado;

    if (!updatedUser) { // Caso nenhum usuário seja encontrado;
      return res.status(404).json({ error: true, message: 'Usuário não encontrado' }); // Retornamos o status 404 Not Found e uma mensagem de erro;
    }

    return res.status(200).json(updatedUser); // Caso dê tudo certo, retornamos o status 200 OK e os dados do usuário atualizado;
  }),
];
