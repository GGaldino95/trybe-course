// Exercise 1 - Unit Tests
const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, objCompare } = require('./exercise1');

describe('Unit Tests exercise 1 - Sum() function testing', () => {
  test('Check if 4 + 5 equals 9', () => expect(sum(4, 5)).toBe(9));
  test('Check if 0 + 0 equals 0', () => expect(sum(0, 0)).toBe(0));
  test('Check if function Throws when a parameter is a String', () => expect(() => sum(4, '5')).toThrow(/parameters must be numbers/));
  // For the test above, we need to use a High Order Function inside the expect() so that it can test the Throw exception.
});

describe('Unit Tests exercise 2 - myRemove() function testing', () => {
  test('Check if the element 3 will be removed from [1, 2, 3, 4]', () => expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]));
  test('Check if after the element 3 is removed, the return IS NOT [1, 2, 3, 4]', () => expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]));
  test('Check if the array has suffered changes on its elements', () => expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]));
});

describe('Unit Tests exercise 3 - myRemoveWithoutCopy() function testing', () => {
  test('Check if the element 3 will be removed from [1, 2, 3, 4]', () => expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]));
  test('Check if after the element 3 is removed, the return IS NOT [1, 2, 3, 4]', () => expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]));
  test('Check if the array has suffered changes on its elements', () => expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]));
});

describe('Unit Tests exercise 4 - myFizzBuzz() function testing', () => {
  test('Check if the parameter 15 will return fizzbuzz', () => expect(myFizzBuzz(15)).toMatch('fizzbuzz'));
  test('Check if the parameter 3 will return fizz', () => expect(myFizzBuzz(3)).toMatch('fizz'));
  test('Check if the parameter 5 will return buzz', () => expect(myFizzBuzz(5)).toMatch('buzz'));
});

describe('Unit Tests exercise 5 - objCompare() function testing', () => {
  test('Check if the obj1 and obj2 are equals', () => expect(objCompare.obj1).toStrictEqual(objCompare.obj2));
  test('Check if the obj1 and obj3 are NOT equals', () => expect(objCompare.obj1).not.toStrictEqual(objCompare.obj3));
  test('Check if the obj2 and obj3 are NOT equals', () => expect(objCompare.obj2).not.toStrictEqual(objCompare.obj3));
});
