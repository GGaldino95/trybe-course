const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
  { name: 'Calcular fatorial', script: './fatorial.js' },
  { name: 'Exibir n números de fibonacci', script: './fibonacci.js' },
];

let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`);
 
mensagem.unshift('Escolha um número para executar o script correspondente');
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;
const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.script);
