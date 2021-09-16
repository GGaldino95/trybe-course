const readline = require('readline-sync');

const logResultado = (numero, resposta) => {
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  return console.log('Parabéns, número correto!');
};

const runGame = () => {
  const numero = parseInt(Math.random() * 10);
  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  logResultado(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (novamente !== 's') return console.log('OK, até a próxima!');

  runGame(); // Reinicia o jogo.
};
runGame(); // Inicia o jogo.
