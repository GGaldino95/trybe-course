let n = 5;

if (n < 1) {
    console.log("Invalid input! Try again.");
} else {
    let line = ''

    for (let i = 0; i < n; i++) {
        line += '*';
    }
    
    for (let i = 0; i < n; i++) {
        console.log(line);
    }
}
