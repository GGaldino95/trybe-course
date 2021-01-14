const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4,5), 9); // Test 1 - Pass
assert.strictEqual(sum(0,0), 0); // Test 2 - Pass
assert.strictEqual(sum(4, "5"), 9); // Test 3 - Error: Parameters must be numbers
