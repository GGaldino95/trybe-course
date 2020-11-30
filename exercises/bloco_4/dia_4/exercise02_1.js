function checkPalindrome(word) {
    let check = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i] != word[(word.length - i) - 1]) { // *
            check = false;
        }
    }
    return check;
}

let word = "arara";
console.log(checkPalindrome(word));

// CÓDIGO DE TESTE E COMPARAÇÃO VISÍVEL NO CONSOLE

/*
let check = true;

for (let i = 0; i <= word.length; i++) {
    let former = word[i];
    let latter = word[(word.length - i) - 1]; // !! ATENÇÃO NESSA LINHA !!
    console.log("Former: " + former + "| Latter: " + latter);        
    if (former != latter) {
        check = false;
    }
}
return check;
}
*/

// *: Se faz necessário o '-1' para que não seja feita uma comparação fora do comprimento do array.