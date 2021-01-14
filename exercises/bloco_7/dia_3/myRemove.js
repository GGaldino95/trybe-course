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
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); 
console.log(`Test 1 - Pass`);

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
console.log(`Test 2 - Pass`);

const array = [10, 11, 12, 13, 14, 15];
console.log(`\nArray inicial: ${array}.`);
myRemove(array, 11);
assert.deepStrictEqual(array, [10, 11, 12, 13, 14, 15]);
console.log(`Array final: ${array}. 
Test 3 - Pass (O array nao altera pois o retorno da funcao nao e armazenado em lugar nenhum.)`);