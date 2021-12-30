const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});

io.on('connection', (socket) => {
  socket.on('updateCellphonePrice', ({ cellphone, name }) => {
    const newcellphone = cellphone + 5;
    io.emit('updateCellphonePriceForAll', newcellphone);
    if (newcellphone >= 100) {
      io.emit('cellphoneWinner', name);
    }
  });

  socket.on('updateTvPrice', ({ tv, name }) => {
    const newTv = tv + 5;
    io.emit('updateTvPriceForAll', newTv);
    if (newTv >= 100) {
      io.emit('tvWinner', name);
    }
  });

  socket.on('updateNotebookPrice', ({ notebook, name }) => {
    const newNotebook = notebook + 5;
    io.emit('updateNotebookPriceForAll', newNotebook);
    if (newNotebook >= 100) {
      io.emit('notebookWinner', name);
    }
  });
});

http.listen(4000, () => {
  console.log('listening on port 4000');
});
