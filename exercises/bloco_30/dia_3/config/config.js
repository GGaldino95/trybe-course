const dotenv = require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'hospital_control',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  }
};
