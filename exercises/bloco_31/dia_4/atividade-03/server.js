const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

io.on('connection', (socket) => {
  socket.on('privateRoom', (privateRoom) => console.log(privateRoom));

  socket.on('symbolX', (X) => {
    socket.broadcast.emit('symbolO', '');
  });

  socket.on('symbolO', (O) => {
    socket.broadcast.emit('symbolX', '');
  });

  socket.on('p0', ({ symbol, p0 }) => {
    socket.broadcast.emit('updateP0', symbol);
  });

  socket.on('p1', ({ symbol, p1 }) => {
    socket.broadcast.emit('updateP1', symbol);
  });

  socket.on('p2', ({ symbol, p2 }) => {
    socket.broadcast.emit('updateP2', symbol);
  });

  socket.on('p3', ({ symbol, p3 }) => {
    socket.broadcast.emit('updateP3', symbol);
  });

  socket.on('p4', ({ symbol, p4 }) => {
    socket.broadcast.emit('updateP4', symbol);
  });

  socket.on('p5', ({ symbol, p5 }) => {
    socket.broadcast.emit('updateP5', symbol);
  });

  socket.on('p6', ({ symbol, p6 }) => {
    socket.broadcast.emit('updateP6', symbol);
  });

  socket.on('p7', ({ symbol, p7 }) => {
    socket.broadcast.emit('updateP7', symbol);
  });

  socket.on('p8', ({ symbol, p8 }) => {
    socket.broadcast.emit('updateP8', symbol);
  });

  socket.on('victory', () => {
    socket.broadcast.emit('loss', '');
  });
});

http.listen(4000, () => {
  console.log('listening on port 4000');
});
