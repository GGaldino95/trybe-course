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
assert.deepStrictEqual(obj1, obj2);
console.log(`Test 1 - Pass`);

//assert.deepStrictEqual(obj1, obj3);
console.log(`Test 2 - Fail`);

//assert.deepStrictEqual(obj2, obj3);
console.log(`Test 3 - Fail`);