const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let count = 0;

    for (let i = 0; i < characters.length; i += 1) {
        if (characters[i] === 'a' || characters[i] === 'o' || characters[i] === 'i' || characters[i] === 'e' || characters[i] === 'u') {
            count += 1;
            results.push(count);
        } else {
            results.push(characters[i]);
        }
    }
    return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowelsNew, 'function');
const output = removeVowelsNew(parameter);
assert.strictEqual(output, result);