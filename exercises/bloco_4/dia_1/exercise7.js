let grade = 100;

if (grade > 100 || grade < 0) {
    console.log("Invalid grade! Try again.")
} else {
    if (grade >= 90) {
        grade = 'A';
        console.log(grade);
    } else if (grade >= 80) {
        grade = 'B';
        console.log(grade);
    } else if (grade >= 70) {
        grade = 'C';
        console.log(grade);
    } else if (grade >= 60) {
        grade = 'D';
        console.log(grade);
    } else if (grade >= 50) {
        grade = 'E';
        console.log(grade);
    } else {
        grade = 'F';
        console.log(grade);
    }
}