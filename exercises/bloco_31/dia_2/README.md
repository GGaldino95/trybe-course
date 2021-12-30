### Bloco 31, Dia 1 -> Software Architecture - View Layer

Para iniciarmos, vamos criar um projeto **_Node_** em qualquer pasta com o seguinte comando:
```bash
  npm init -y
```

Com o projeto **_Node_** criado, vamos criar um arquivo `server.js` dentro dele com o seguinte código:

```javascript
/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require('net');

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  connection.on('end', () => {
    console.log('Cliente desconectado');
  });
  /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
  connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);
});

/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
```

> Leia a documentação do pacote [net](https://nodejs.org/api/net.html#net_event_close_1), para se aprofundar.

Seguindo com a aplicação, após termos codificado o `"server"`, vamos agora para o `"client"`. Para isso, vamos criar um arquivo chamado `client.js`, na mesma pasta onde criamos o arquivo `server.js`, e vamos colocar o seguinte código:
```javascript
const net = require('net');
/* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos clientes aos servidores */
const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!');
});

/* Assim como no servidor, também temos eventos do lado do cliente, onde o evento 'data' é ativado quando o servidor envia uma mensagem para o cliente. */
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

/* Quando a conexão é interrompida/terminada, é ativado o evento 'end', onde podemos limpar alguns caches, dar uma mensagem para usuário, atualizar algum dado no banco de dados etc. */
client.on('end', () => {
  console.log('Desconectado do servidor');
});
```

**Chegou a hora de executar tudo isso!**

Primeiro, vamos executar o servidor com o comando:
```bash
 node server.js
```

Feito isso, conseguimos notar que o terminal não nos deu a opção de executar um segundo comando. Isso aconteceu porque nosso servidor está de pé, esperando alguma conexão do `"client"` chegar até ele.
Dito isso, vamos agora a um outro terminal executar o cliente, e então veremos que o servidor recebe uma conexão e o cliente vai abrir e logo em seguida fechar essa conexão:
```bash
 node client.js
```

<br>

_**Exercícios 31.1 - Parte I**_

Utilize o pacote `NET` para ver, na prática, como é trafegar dados via _sockets_ pelo **_Node.js_**!
Como vocês viram nos exemplos do course, a conexão nunca fica ligada por muito tempo, pois assim que recebemos e respondemos, a conexão é desligada. Por esse motivo, experimentem remover a resposta do servidor e veja quanto tempo a conexão fica ligada!

Através do método `server.getConnections((err, count) => {})`, imprima quantas conexões estão de pé;

> Observação: Abra um terminal para o _server_ e dois ou três para os _clientes_. Para cada cliente conectado, deverá ser impresso no server a quantidade de clientes conectados. Conecte todos os clientes e depois vá desconectando e conectando-os para você ver, na prática, como são feitas as conexões abertas que citamos no material.

Envie uma mensagem do cliente para o servidor.

Brinque com a troca de mensagens! Que tal fazer algum _software_ que faz algo com a mensagem recebida? Uma conta matemática, alguma lógica, o que for!
