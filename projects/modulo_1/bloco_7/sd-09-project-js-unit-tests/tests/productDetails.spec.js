/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(Array.isArray(productDetails('Alcool Gel', 'Mascara')), true);
    assert.strictEqual(productDetails('Alcool Gel', 'Mascara').length, 2);
    assert.deepStrictEqual(typeof Object.values(productDetails('Alcool Gel', 'Mascara')), 'object');
    assert.notDeepStrictEqual(Object.values(productDetails('Alcool Gel', 'Mascara'))[0], Object.values(productDetails('Alcool Gel', 'Mascara'))[1]);
    assert.deepStrictEqual((Object.values(Object.values(productDetails('Alcool Gel', 'Mascara')[0])[1])[0].slice(-3)), '123');
    assert.deepStrictEqual((Object.values(Object.values(productDetails('Alcool Gel', 'Mascara')[1])[1])[0].slice(-3)), '123');
  });
});
