const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (words, target) => {
    let position = -1;
    for (let i in words) {
        if (target === words[i]) {
            position = Number(i);
        }
    }

    return position;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);