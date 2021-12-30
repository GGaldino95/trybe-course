const connection = require('./connection');

const getAll = async () => {
  const [messages] = await connection.execute(
    'SELECT * FROM mural.messages_table;',
  );
  return messages;
};

const insertNewMessage = async (name, message) => {
  const sql = `INSERT INTO \`mural\`.\`messages_table\` (\`user\`, \`message\`) VALUES ('${name}', '${message}');`;
  await connection.query(sql);
};

module.exports = {
  getAll,
  insertNewMessage,
};
