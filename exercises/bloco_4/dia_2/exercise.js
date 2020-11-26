let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let avg = sum / numbers.length;

if (avg > 20) {
    console.log("Value greater than 20")
} else {
    console.log("Value less than or equal to 20")
}