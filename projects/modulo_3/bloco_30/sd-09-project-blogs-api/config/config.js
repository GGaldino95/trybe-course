require('dotenv/config');

// MYSQL_HOST first, HOSTNAME second: every container runtime sets HOSTNAME to the container id,
// so on a deployed host the original line silently pointed Sequelize at a machine name instead of
// a database. Locally, where nothing sets MYSQL_HOST, behaviour is unchanged.
const host = process.env.MYSQL_HOST || process.env.HOSTNAME;

// TiDB Cloud listens on 4000 and refuses unencrypted connections; local MySQL is 3306 with no
// certificate. Both stay driven by the environment rather than by which one is "the real" setup.
const port = process.env.MYSQL_PORT || 3306;
const dialectOptions = process.env.MYSQL_SSL
  ? { ssl: { minVersion: 'TLSv1.2', rejectUnauthorized: true } }
  : {};

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host,
    port,
    dialect: 'mysql',
    dialectOptions,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host,
    port,
    dialect: 'mysql',
    dialectOptions,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host,
    port,
    dialect: 'mysql',
    dialectOptions,
  },
};
