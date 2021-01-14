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
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
console.log(`Test 1 - Pass`);

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
console.log(`Test 2 - Pass`);

const array = [10, 11, 12, 13, 14, 15];
console.log(`\nArray inicial: ${array}.`);
myRemoveWithoutCopy(array, 11);
assert.deepStrictEqual(array, [10, 12, 13, 14, 15]);
console.log(`Test 3 - Pass`);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
console.log(`Test 4 - Pass`);