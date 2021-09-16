const readline = require('readline-sync');

const calculaImc = () => {
  const peso = readline.questionFloat('Por favor, digite seu peso (kg):');
  const altura = readline.questionInt('Por favor, digite sua altura (cm):');
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  
  console.log('\nCALCULO DE IMC')
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  console.log(`IMC: ${imc}`);

  if (imc < 18.5) console.log('Situação: Abaixo do peso (magreza)');
  if (imc >= 18.5 && imc < 25) console.log('Situação: Peso normal');
  if (imc >= 25 && imc < 30) console.log('Situação: Acima do peso (sobrepeso)');
  if (imc >= 30 && imc < 35) console.log('Situação: Obesidade grau I');
  if (imc >= 35 && imc < 40) console.log('Situação: Obesidade grau II');
  if (imc > 40) console.log('Situação: Obesidade graus III e IV');
};
calculaImc();
