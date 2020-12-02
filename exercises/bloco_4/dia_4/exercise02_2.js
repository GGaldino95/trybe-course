function findIndexHigherValue(array) {
    let higher = 0;
    let higherIndex = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > higher) {
            higher = array[i]
            higherIndex = i;
        }
    }
    return higherIndex;
}

let array = [2 , 3 , 6 , 7 , 10 , 1];
console.log(findIndexHigherValue(array));

