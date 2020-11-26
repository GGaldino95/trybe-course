let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let lowerValue = 999999;

for (let i = 0; i < numbers.length; i++) {
    if (lowerValue > numbers[i]) {
        lowerValue = numbers[i];
    }
}

console.log(lowerValue);

