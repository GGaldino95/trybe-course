const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:4000',
      'http://localhost:5000',
    ], // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

io.on('connection', (socket) => {
  socket.on('update', ({ name, message }) => {
    socket.broadcast.emit('broadcast', {
      nameSocket: name,
      messageSocket: message,
    });
  });
});

http.listen(5000, () => {
  console.log('listening on port 5000');
});
