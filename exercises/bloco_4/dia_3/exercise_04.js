let n = 5;
let spacing = ' ';
let symbol = '*';

for (let i = 0; i < n; i += 2) {
    let line = '';
    let symbolQuantity = 1 + i;
    let leftSpacing = (n - symbolQuantity) / 2;
    let rightSpacing = (n - symbolQuantity) / 2;

    for (let j = 0; j < n; j += 1) {
        if (j < leftSpacing) {
            line += spacing;
        } else if (j >= leftSpacing && j < n - rightSpacing) {
            line += symbol;
        } else {
            line += spacing;
        }
    }
    console.log(line);
}
