const connection = require('./connection');

const DB_COLLECTION = 'users';

const create = async (userInfo) => {
  const createdUser = await connection()
    .then((db) => db.collection(DB_COLLECTION)
      .insertOne({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        role: userInfo.role,
      }));

  const { password, ...createdUserWithoutPassword } = createdUser.ops[0];
  return { user: createdUserWithoutPassword };
};

const getByEmail = async (email) => (
  connection().then((db) => db.collection(DB_COLLECTION)
      .findOne({ email }))
);

module.exports = {
  create,
  getByEmail,
};
