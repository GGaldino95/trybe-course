// Parte 1
console.log(`\n=============\nParte 1\n=============`)
const testingScope = escopo => {
    if (escopo) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo!`
        console.log(ifScope);
    } else {
        let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }
}

testingScope(true);

// Parte 2 - array.sort() code used from: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
console.log(`\n=============\nParte 2\n=============`)
const sortOddsAndEvens = array => array.sort((a, b) => a - b);

console.log(`Os números ${sortOddsAndEvens([13, 3, 4, 10, 7, 2])} se encontram ordenados de forma crescente!`);
