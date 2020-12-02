function findIndexLowerValue(array) {
    let lower = 999999;
    let lowerIndex = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] < lower) {
            lower = array[i]
            lowerIndex = i;
        }
    }
    return lowerIndex;
}

let array = [2 , 4 , 6 , 7 , 10 , 0 , -3];
console.log(findIndexLowerValue(array));

