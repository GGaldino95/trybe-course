// Exercicio 01:
const socket = io();

document.querySelector('#likeIcon').addEventListener('click', () => {
  socket.emit('likePost');
});

socket.on('updateLikes', (countLikes) => {
  document.querySelector('#currentLikes').innerHTML = countLikes;
});

// Exercicio 05:
document.querySelector('#starIcon').addEventListener('click', () => {
  const currentStarsElement = document.querySelector('#currentStars');
  let currentStars = parseInt(currentStarsElement.innerHTML);
  
  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost');
});

// Exercicio 07:
socket.on('updateStars', (countStars) => {
  document.querySelector('#currentStars').innerHTML = countStars;
});
