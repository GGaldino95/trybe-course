const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
  
  // Exercicio 03:
  client.write('Cliente número 1');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('Desconectado do servidor');
});
