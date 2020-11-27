let n = 5;

if (n < 1) {
    console.log("Invalid input! Try again.");
} else {
    let line = '';
    let spacing = '';

    for (let i = 0; i < n; i++) {
        spacing += ' ';
    }

    for (let i = 0; i < n; i++) {

        line += '*';
        spacing = spacing.slice(0, -1);
        console.log(spacing + line);
    }
}
