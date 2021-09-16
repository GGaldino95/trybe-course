const readline = require('readline-sync');

const calcularFibonacci = (n) => {
  let a = 1;
  let b = 1;

  for (; n >= 0; n -= 1) {
    if (b) console.log(b);

    /* Armazenamos o último valor calculado em uma variável temporária
    Para calcular o novo valor, somamos o último valor com o penúltimo valor */
    const temp = a;

    
    a = a + b; // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado

    /* O valor antigo de `a`, que estava armazenado na variável temporária
    agora se torna o penúltimo número e, por isso, é armazenado em `b` */
    b = temp;
  };

  console.log(b);
  return b;
};

const fibonacci = () => {
  const n = readline.questionInt('Digite o valor de n: ');

  if (n <= 0) return console.log('Digite um número maior que 0!');

  
  console.log(`n: ${n}`);
  calcularFibonacci(n - 2);
};
fibonacci();
