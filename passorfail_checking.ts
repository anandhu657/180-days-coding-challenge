const readline = require('readline-sync');

let mark: number = parseInt(readline.question("Enter your mark: "));

if (mark >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}

export { }