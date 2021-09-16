const readline = require('readline-sync');

const calculaVelocidadeMed = () => {
  const distancia = readline.questionInt('Por favor, digite a distância percorrida (m):');
  const tempo = readline.questionInt('Por favor, digite o tempo gasto (s):');
  const velocidadeMedia = (distancia / tempo).toFixed(2);
  
  console.log(`Velocidade média: ${velocidadeMedia} m/s`);
};
calculaVelocidadeMed();
