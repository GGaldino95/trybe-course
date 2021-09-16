const readline = require('readline-sync');

const calcularFatorial = (x) => {
  // Se x for 0 ou 1
  return [0, 1].includes(x)
    ? 1 // Caso base
    : x * realizaFatoracao(x - 1);
};

function fatorial() {
  const x = readline.questionInt('Informe o valor de x: ');

  if (x <= 0) return console.log('Digite um número maior que 0!');

  const resultado = calcularFatorial(x);

  console.log(`x: ${x}`);
  console.log(`Resultado: ${resultado}`);
};

fatorial();