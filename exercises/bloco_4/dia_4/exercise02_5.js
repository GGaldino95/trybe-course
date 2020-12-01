function findMostRepeated(array) {
    let number = [];
    let currentValue;
    let repeatCount = 0;
    let numberCount = 0;

    for (i = 0; i < array.length; i++) {
        currentValue = array[i];
        
        if (number[currentValue] === undefined) {
            number[currentValue] = 1;
        } else {
            number[currentValue] += 1;
        }
    }

    for (let x in number) {
        if (number[x] > repeatCount) {
            repeatCount = number[x];
            numberCount = x;
        }
    }

    return numberCount;
}

let array = [2 , 3 , 2 , 5 , 8 , 2 , 3];
console.log(findMostRepeated(array));