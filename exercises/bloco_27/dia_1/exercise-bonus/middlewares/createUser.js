const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = [ // Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model;
  (req, _res, next) => {
    const { error } = UserModel.isValid(req.body); // Pedimos ao Joi que valide o corpo da requisição de acordo com o que definimos em seu schema;

    if (error) return next(error); // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares;

    next(); // Se não há nenhum problema com os dados, podemos prosseguir para o próximo middleware;
  },
  rescue(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body; // Extraimos os dados da requisição;

    if (!UserModel.isValid({ firstName, lastName, email, password })) { // Verificamos se os dados são válidos;
      const err = new Error('Invalid data'); // Caso os dados não sejam válidos, nós criamos um novo erro;
      err.status = 400; // Atribuímos o status `400 Bad Request` ao erro;

      return next(err); // Iniciamos o fluxo e de erro e encerramos a execução do middleware;
    }

    const newUser = await UserModel.create({ firstName, lastName, email, password }); // Caso os dados sejam válidos, pedimos pro model criar o usuário;
    res.status(201).json(newUser); // Com o usuário criado, devolvemos o status 201 Created, a mensagem informando sucesso na operação
  }),
];
