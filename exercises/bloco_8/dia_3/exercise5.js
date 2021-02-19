const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];



function containsA() {
    return names.reduce((accumulator, currentName) => accumulator + currentName.split('')
        .reduce((acc, currentLetter) => (currentLetter === 'a' || currentLetter === 'A' ? acc + 1 : acc), 0), 0);
}

assert.deepStrictEqual(containsA(), 20);