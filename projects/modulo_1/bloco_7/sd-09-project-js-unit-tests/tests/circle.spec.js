/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    assert.deepStrictEqual(typeof circle(5), 'object');
    assert.strictEqual(Object.keys(circle(5)).length, 3);
    assert.deepStrictEqual(circle(), undefined);
    assert.strictEqual(parseFloat(Object.entries(circle(2))[2][1]), 12.56);
    assert.strictEqual(parseFloat(Object.entries(circle(3))[1][1]), 28.259999999999998);
    assert.deepStrictEqual(circle(3), { radius: 3, area: 28.259999999999998, circumference: 18.84 });
  });
});
