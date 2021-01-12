// Parte 1
console.log(`\n=============\nParte 1\n=============`);

const fatorial = n => n <= 1 ? 1 : n * fatorial(n-1);
console.log(fatorial(5));

// Parte 2
console.log(`\n=============\nParte 2\n=============`);

const longestWord = string => {

    const arrayString = string.split(' ');
    let longestWord = '';

    for (let i = 0; i < arrayString.length; i += 1) {
        if (arrayString[i].length > longestWord.length) {
            longestWord = arrayString[i];
        }
    }
    return longestWord;
};

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Parte 3
console.log(`\n=============\nParte 3\n=============`);
window.onload = function () {
    let clickCount = 0;
    const count = document.getElementById('click-count');
    const button = document.getElementById('click-button');
    button.addEventListener('click', () => count.innerText = clickCount += 1);
}