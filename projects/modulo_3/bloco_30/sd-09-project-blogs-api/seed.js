// The schema and starting data for a sandbox session, as plain SQL.
//
// Not part of the 2021 project. The base `blogs_api` database is still built by sequelize-cli
// (`npm run prestart` then `npm run seed`); this exists because a *session* database has to be
// stood up inside a request, where shelling out to the CLI is not an option.
//
// `reseed` is also what POST /reset calls, so the button in the playground and a fresh session put
// a visitor's database into the same state rather than two versions of it.
//
// ⚠️ Ceiling: this DDL duplicates what `migrations/` produces. A future migration has to be applied
// here too, or new sessions drift from the base database. Four tables that have not changed since
// 2021 did not justify running a migration runner per visitor.

// Ordered: BlogPosts references Users, PostsCategories references both.
const TABLES = [
  `CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT,
    displayName varchar(255),
    email varchar(255),
    password int,
    image varchar(255),
    PRIMARY KEY (id)
  )`,
  `CREATE TABLE Categories (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    PRIMARY KEY (id)
  )`,
  `CREATE TABLE BlogPosts (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255),
    content varchar(255),
    userId int NOT NULL,
    published datetime NOT NULL,
    updated datetime NOT NULL,
    PRIMARY KEY (id),
    KEY fk_1 (userId),
    CONSTRAINT fk_1 FOREIGN KEY (userId) REFERENCES Users (id) ON DELETE CASCADE ON UPDATE CASCADE
  )`,
  `CREATE TABLE PostsCategories (
    postId int NOT NULL,
    categoryId int NOT NULL,
    PRIMARY KEY (postId, categoryId),
    KEY fk_2 (categoryId),
    CONSTRAINT fk_1 FOREIGN KEY (postId) REFERENCES BlogPosts (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_2 FOREIGN KEY (categoryId) REFERENCES Categories (id) ON DELETE CASCADE ON UPDATE CASCADE
  )`,
];

// Copied from `seeders/`, values unchanged, so a session starts with what the project ships with.
// `password` is an int column in the migration, hence an unquoted number here.
const ROWS = [
  `INSERT INTO Users (id, displayName, email, password, image) VALUES
    (1, 'Lewis Hamilton', 'lewishamilton@gmail.com', 123456,
     'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg'),
    (2, 'Michael Schumacher', 'MichaelSchumacher@gmail.com', 123456,
     'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg')`,
  `INSERT INTO Categories (id, name) VALUES (1, 'Inovação'), (2, 'Escola')`,
  `INSERT INTO BlogPosts (id, title, content, userId, published, updated) VALUES
    (1, 'Post do Ano', 'Melhor post do ano', 1, '2011-08-01 19:58:00', '2011-08-01 19:58:51'),
    (2, 'Vamos que vamos', 'Foguete não tem ré', 1, '2011-08-01 19:58:00', '2011-08-01 19:58:51')`,
  `INSERT INTO PostsCategories (postId, categoryId) VALUES (1, 1), (2, 2)`,
];

// Deepest dependency first, because a parent row cannot go while a child still points at it.
const TRUNCATION_ORDER = ['PostsCategories', 'BlogPosts', 'Categories', 'Users'];

async function createSchema(sequelize) {
  for (const statement of TABLES) {
    await sequelize.query(statement);
  }
}

// Rerunnable: the seed is a baseline, so it replaces rather than appends. A visitor who emptied
// every table and one who never touched it end up in the same place.
async function reseed(sequelize) {
  for (const table of TRUNCATION_ORDER) {
    await sequelize.query(`DELETE FROM ${table}`);
  }

  for (const statement of ROWS) {
    await sequelize.query(statement);
  }
}

module.exports = { createSchema, reseed, TABLES, ROWS };
