const mysql = require('mysql2/promise');

const connection = mysql.createPool({ // Criamos uma "pool" de conexões;
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users_crud',
});

module.exports = connection; // Retornamos o pool criado para que possa ser utilizado pelo model;
