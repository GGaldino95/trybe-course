/* eslint-disable max-len */

const assert = require('assert');
const average = require('../src/average');

describe('#average', () => {
  it("tests function average's behaviour as specified", () => {
    assert.strictEqual(average([3, 4, 5]), 4);
    assert.strictEqual(average([1, 2, 3, '4', 5]), undefined);
    assert.strictEqual(average([0, 0, 0, 0, 0, 0, 0]), 0);
    assert.strictEqual(average([1, 2, '3']), undefined);
    assert.strictEqual(average([1, 2, 3]), 2);
    assert.strictEqual(average([0, 0, 0, 0, 0, 0, 1]), 0);

    assert.strictEqual(average([]), undefined);
    assert.strictEqual(average([' ']), undefined);
    assert.strictEqual(average(['um', 'dois', 'tres']), undefined);
    assert.strictEqual(average([47, 63, 122]), 77);

    assert.strictEqual(average([-11, 2, 5]), -1);

    assert.strictEqual(average([-11, -5, 2]), -5);
  });
});
