const connection = require('./connection'); // Começamos importando a conexão com o banco;
const { ObjectId } = require('mongodb'); // Vamos utilizar o ObjectId para validar e converter o id recebido como parâmetro;
const Joi = require('joi');

const userSchema = Joi.object({ // Primeiro definimos qual o schema da nossa requisição;
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': `O campo ${{ id: "label" }} é obrigatório`,
  'string.min': `O campo ${{ id: "label" }} deve ter, pelo menos, ${{ id: "limit" }} caracteres`,
  'string.email': `Informe um email válido no campo ${{ id: "label" }}`,
});

function isValid(userData) {
  return userSchema.validate(userData);
};

/* Antiga validação de isValid (sem Joi);
  function isValid({ firstName, lastName, email, password }) { // Criamos um método para verificar se os dados do usuário são válidos;
    const PASSWORD_REGEX = /[a-z0-9]{6,}/ig; // Regex que valida strings de 6 ou mais caracteres alfanuméricos;
    const fields = [firstName, lastName, email, password]; // Criamos um array para poder verificar com facilidade cada campo;

    if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) { // Se algum dos itens do array for `unfined`, `null`, ou uma string vazia, retornamos `false`;
      return false;
    }

    return PASSWORD_REGEX.test(password); // Por último, só precisamos garantir que `password` passa no regex. Caso passe, retornaremos `true`. Caso constrário, retornaremos `false`;
  };
*/

/*
  Agora, ao invés de recebermos um documento do MongoDB, recebemos as colunas do MySQL;
  Note que não realizamos destructure da senha, pois não precisaremos dela;
  Note, também, que renomeamos os campos fist_name e last_name para firstName e lastName, respectivamente;
*/
function formatUser({ id, first_name: firstName, last_name: lastName, email }) { // A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados e sem o campo passowrd;
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

function create({ firstName, lastName, email, password }) { // Função responsável por criar o usuário no banco de dados;
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';

  return connection.execute(query, [firstName, lastName, email, password]) // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`;
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email })); // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido;
};

function findAll() {
  return connection.execute('SELECT * from users;') // Mais uma vez, chamamos connection.execute para executar nossa query;
    .then(([results]) => results.map(formatUser)); // Passamos cada resultado pela função de formatação;
};

async function findById(id) {
  const user = await connection.execute('SELECT * FROM users WHERE id = ?', [id]) // Realizamos uma consulta buscando o usuário por ID;
    .then(([results]) => (results.length ? results[0] : null)); // Caso nenhum resultado seja encontrado, transformamos `user` em `null`;

  if (!user) { // Caso nenhum usuário seja encontrado, retornameos null;
    return null;
  }

  return formatUser(user); // Caso o usuário tenha sido entrado, retornamos seus dados formatados;
};

async function updateUser(id, { firstName, lastName, email, password }) {
  const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `; // Primeiro, executamos a query de atualização;
  await connection.execute(query, [firstName, lastName, email, password, id]);

  return findById(id); // Por fim, buscamos o usuário, utilizando o método `findById` e o retornamos. Não precisamos nos preocupar em formatar os dados, ou em verificar se o usuário de fato existe, já que `findById` já faz isso pra nós;
};

module.exports = {
  isValid,
  create,
  findAll,
  findById,
  updateUser,
};
