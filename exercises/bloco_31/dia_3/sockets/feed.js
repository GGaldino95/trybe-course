// Exercicio 02:
module.exports = (io) => io.on('connection', (socket) => {
  let currentLikes = 0;
  let currentStars = 0

  socket.on('likePost', () => {
    currentLikes += 1;

    // Exercicio 03:
    // socket.emit('updateLikes', currentLikes);

    // Exercicio 04:
    io.emit('updateLikes', currentLikes);
  })

  // Exercicio 06:
  socket.on('starPost', () => {
    currentStars += 1;

    socket.broadcast.emit('updateStars', currentStars);
  })
});