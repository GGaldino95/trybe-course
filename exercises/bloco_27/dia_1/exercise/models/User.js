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

function formatUser(document) { // Função que remove dos documentos da collection 'users', os campos indesejados;
  const { // Extraímos as propriedades `_id` e `password`;
    _id,
    password,
    ...user // Utilizamos o operador rest (`...`) para guardar o resto das propriedades numa constante chamada `user`;
  } = document;

  const formattedResult = {   // Criamos um novo objeto contento os campos já formatados;
    id: _id, // Criamos um novo objeto contento os campos já formatados;
    ...user, // Utilizamos o operador _spread_ (`...`) para adicionar o resto das propriedades que tínhamos gravado em `user`;
  };

  return formattedResult; // Retornamos o objeto com os campos formatados;
};



function create({ firstName, lastName, email, password }) { // Função responsável por criar o usuário no banco de dados;
  return connection().then((db) => db
    .collection('users')
    .insertOne({ firstName, lastName, email, password })) // Utilizamos o `insertOne` para inserir o usuário na collection `users`;
    .then((result) => ({ id: result.insertedId, firstName, lastName, email })); // Depois de criar o usuário, obtermos o ID gerado pelo banco e retornamos num objeto juntamente com os demais dados do usuário recém-criado;
};

function findAll() {
  return connection()
    .then((db) => db.collection('users').find().toArray()) // Utilizamos o `find` para buscar todos os documentos da collection `users`. O `toArray` aqui é importante pois ele busca todos os registros, e transforma o resultado em um array, como o próprio nome diz;
    .then((results) => results.map(formatUser));
};

async function findById(id) {
  if (!ObjectId.isValid(id)) { // Verificamos que o id que recebemos é válido;
    return null; // Caso não seja um id válido, retornamos `null`;
  }

  const user = await connection() // Buscamos o usuário no banco
    .then((db) => db.collection('users').findOne(new ObjectId(id))); // É importante lembrar de converter o parâmetro `id` para um `ObjectId` do MongoDB utilizando `new ObjectId(id)`;

  if (!user) return null; // Se nenhum usuário for encontrado, retornamos `null`;

  return formatUser(user); // Caso encontremos um usuário retornamos seus dados formatados;
};

async function updateUser(id, { firstName, lastName, email, password }) {
  if (!ObjectId.isValid(id)) return null; // Verificamos se o id é válido. Se não for, retornamos `null`;

  const updatedUser = await connection() // Atualizamos o documento no banco utilizando os novos dados;
    .then((db) => {
      const userId = new ObjectId(id);
      const newData = { firstName, lastName, email, password };

      return db.collection('users')
        .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnDocument: after }) // Repare no uso da opção `returnDocument: after`. Ela faz com que o documento retornado já contenha os dados atualizados;
        .then((result) => result.value); // Obtemos apenas o valor de retorno do banco, que é o usuário atualizado;
    });

  if (!updatedUser) return null; // Caso nenhum usuário seja encontrado, retornamos `null`;

  return formatUser(updatedUser); // Por fim, retornamos o usuário com os campos já formatados;
};

module.exports = {
  isValid,
  create,
  findAll,
  findById,
  updateUser,
};
