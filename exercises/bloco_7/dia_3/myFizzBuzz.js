const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
console.log(`Test 1 - Pass`);

assert.strictEqual(myFizzBuzz(9), 'fizz');
console.log(`Test 2 - Pass`);

assert.strictEqual(myFizzBuzz(25), 'buzz');
console.log(`Test 3 - Pass`);

assert.strictEqual(myFizzBuzz(38), 38);
console.log(`Test 4 - Pass`);

assert.strictEqual(myFizzBuzz('test'), false);
console.log(`Test 5 - Pass`);