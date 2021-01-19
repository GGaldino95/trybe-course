### Bloco 7, Dia 3 -> Testes unitários em JavaScript

_**Exercício 7.3 - Parte I - Praticando a implementação de testes**_

Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.

1. Copie o código abaixo:
```javascript
    const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
```

 - A função `sum(a, b)` retorna a soma do parâmetro `a` com o `b`;
 - Teste se o retorno de `sum(4, 5)` é `9`;
 - Teste se o retorno de `sum(0, 0)` é `0`;
 - Teste se a função `sum` lança um erro quando os parametros são `4` e `"5"` (string 5);
 - Teste se a mensagem de erro é `"parameters must be numbers"` quando realizar a chamada `sum(4, "5")`.
<br><br>

2. Copie o código abaixo:
```javascript
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
```

 - A função `myRemove(arr, item)` recebe um _array_ `arr` e retorna uma cópia desse _array_ sem o elemento `item` caso ele exista no _array_;
 - Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o _array_ esperado;
 - Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` **não** retorna o _array_ `[1, 2, 3, 4]`;
 - Verifique se o _array_ passado por parâmetro não sofreu alterações;
 - Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o _array_ esperado.
<br><br>

3. Copie o código abaixo:
```javascript
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
```

 - A função `myRemoveWithoutCopy(arr, item)` recebe um _array_ `arr` e retorna o próprio _array_ sem o elemento `item` caso ele exista no _array_;
 - Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` retorna o _array_ esperado;
 - Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` **não** retorna o _array_ `[1, 2, 3, 4]`;
 - Faça uma chamada para a função `myRemoveWithoutCopy` e verifique se o _array_ passado por parâmetro sofreu alterações;
 - Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 5)` retorna o _array_ esperado.
<br><br>

4. Copie o código abaixo:
```javascript
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
```

 - A função `myFizzBuzz(num)` recebe um número `num` e retorna `"fizzbuzz"` se o número for divisível por `3` e `5`, retorna `"fizz"` se for divisível apenas por `3`, retorna `"buzz"` se divisível apenas por `5`, retorna o próprio número caso não seja divisível por `3` ou `5` e retorna `false` caso `num` não seja um número;
 - Faça uma chamada com um número divisível por `3` e `5` e verifique se o retorno é o esperado;
 - Faça uma chamada com um número divisível por `3` e verifique se o retorno é o esperado;
 - Faça uma chamada com um número divisível por `5` e verifique se o retorno é o esperado;
 - Faça uma chamada com um número que não é divisível por `3` ou `5` e verifique se o retorno é o esperado;
 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado;
<br><br>

5. Copie o código abaixo:
```javascript
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
```
 - Compare dois objetos (JSON) para verificar se são idênticos ou não
<br><br>

_**Exercício 7.3 - Parte II - Praticando TDD - Escrevendo código para testes**_

Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir disso, você escreverá testes e os usará de base para alterar o código. Como assim? Bem, vamos passo a passo!

Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. **É importante nunca alterar os testes ou as variáveis já escritas no código**:
Copie os testes já implementadas e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.

1. Copie o código abaixo:
```javascript
const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
```

 - Escreva a função `addOne` para passar nos testes já implementados.
<br><br>

2. Copie o código abaixo:
```javascript
const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
```

 - Escreva a função `wordLengths` para passar nos testes já implementados.
<br><br>

3. Copie o código abaixo:
```javascript
const assert = require('assert');
// escreva a função sumAllNumbers aqui

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
```

 - Escreva a função `sumAllNumbers` para passar nos testes já implementados.
<br><br>

4. Copie o código abaixo:
```javascript
const assert = require('assert');
// escreva a função findTheNeedle aqui

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
```

 - Escreva a função `findTheNeedle` para passar nos testes já implementados.
<br><br>

_**Exercício 7.3 - Parte II - Praticando TDD - Reescrevendo funções utilizando TDD**_

Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere-a para que passe nos testes. Use os casos de teste acima como inspiração, se tiver dúvidas!
> Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.

1. Copie o código abaixo:
```javascript
const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
```

 - Use a variável `parameter` como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável `result` e, caso não esteja, altere o código para que ele passe nos testes.
<br><br>

2. Copie o código abaixo:
```javascript
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(characters[i]);
    } else {
      results.push('_');
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
};
```

 - Use a variável `parameter` como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável `result` e, caso não esteja, altere o código para que ele passe nos testes.
<br><br>

3. Copie o código abaixo:
```javascript
const greaterThanTen = (array) => {
  let results = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results += array[i];
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
```

 - Use a variável `parameter` como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável `result` e, caso não esteja, altere o código para que ele passe nos testes.
<br><br>

4. Copie o código abaixo:
```javascript
function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x + y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
```

 - Use a variável `parameter` como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável `result` e, caso não esteja, altere o código para que ele passe nos testes.
