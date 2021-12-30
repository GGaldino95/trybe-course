const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

io.on('connection', (socket) => {
  const initialXSocket = parseInt(Math.random() * 150, 10);
  const initialYSocket = parseInt(Math.random() * 150, 10);
  let trybeonSocket = false;
  let startDisableSocket = false;
  let randomXSocket;
  let randomYSocket;
  let xInitialPositionSocket;
  let yInitialPositionSocket;

  if (!trybeonSocket) io.emit('initialPosition', { initialXSocket, initialYSocket });

  socket.on('iniciar', (trybeon) => {
    console.log('trybeon', trybeon);
    trybeonSocket = trybeon;
    socket.broadcast.emit('settrybeon', trybeonSocket);
  });

  socket.on('startDisable', (startDisable) => {
    console.log('startDisable', startDisable);
    startDisableSocket = startDisable;
    socket.broadcast.emit('setstartDisable', startDisableSocket);
  });

  socket.on('random', ({ randomX, randomY }) => {
    console.log('randomX', randomX, 'randomY', randomY);
    randomXSocket = randomX;
    randomYSocket = randomY;
    socket.broadcast.emit('randomBack', { randomXSocket, randomYSocket });
  });

  socket.on('restart', ({ xInitialPosition, yInitialPosition }) => {
    xInitialPositionSocket = xInitialPosition;
    yInitialPositionSocket = yInitialPosition;
    socket.broadcast.emit('restartBack', { xInitialPositionSocket, yInitialPositionSocket });
  });
});

http.listen(4000, () => {
  console.log('listening on port 4000');
});
