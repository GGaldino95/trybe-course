const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = numbers => {
    let sum = 0;
    for (let number in numbers) {
        sum += numbers[number];
    }

    return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);