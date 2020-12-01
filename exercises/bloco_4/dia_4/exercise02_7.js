function checkString(word, ending) {
    let check = true;

    for (let i = 0; i < ending.length; i++) {
        if (ending[ending.length - i] != word[word.length - i]) {
            check = false;
        }
    }

    return check;
}

let string1 = "trybe";
let string2 = "be";
console.log(checkString(string1, string2));