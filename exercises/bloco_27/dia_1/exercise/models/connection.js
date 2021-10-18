const { MongoClient } = require('mongodb');

const OPTIONS = { // Armazenamos as configurações de conexão em uma constante para facilitar a leitura do código;
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017'; // A string de conexão com o banco também é armazenada em uma constante;
let db = null; // Criamos uma variável para realizar "cache" da conexão;

const connection = () => (// Método que cria uma nova conexão ou retorna a existente;
  db // Usamos um ternário para verificar se já temos uma conexão e decidir o que retornar;
    ? Promise.resolve(db) // Se tivermos, a colocamos dentro de uma Promise já resolvida, utilizando `Promise.resolve`;
    : MongoClient.connect(MONGO_DB_URL, OPTIONS) // Caso ainda não tenhamos, criamos uma nova conexão;
      .then((conn) => {
        db = conn.db('model_example'); // Uma vez com a conexão aberta, a armazenamos na variável `db`;
        return db;  // Definimos `db` como o resultado da Promise, que é retornada por `connection()`;
      })
);

module.exports = connection;
