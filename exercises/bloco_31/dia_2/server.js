const net = require('net');

const server = net.createServer((connection) => {
  // Exercicio 01: basta você comentar o conteudo abaixo:
  console.log('Cliente conectado');

  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  // Exercicio 03:
  connection.on('data', (data) => {
    console.log(`O cliente disse: ${data}`);
  });
  
  connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);
});

// Exercicio 02:
server.getConnections((_err, count) => {
  console.log(count);
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
