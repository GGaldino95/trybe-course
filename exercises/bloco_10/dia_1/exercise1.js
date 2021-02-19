// Exercise 1 - Unit Tests
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

// Exercise 2 - Unit Tests
function myRemove(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (item !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// Exercise 3 - Unit Tests
function myRemoveWithoutCopy(arr, item) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i -= 1;
            len -= 1;
        }
    }

    return arr;
}

// Exercise 4 - Unit Tests
function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

// Exercise 5 - Unit Tests
const objCompare = {
    obj1: {
        title: 'My Title',
        description: 'My Description',
    },

    obj2: {
        description: 'My Description',
        title: 'My Title',
    },

    obj3: {
        title: 'My Different Title',
        description: 'My Description',
    }
}

module.exports = {
    sum,
    myRemove,
    myRemoveWithoutCopy,
    myFizzBuzz,
    objCompare
};