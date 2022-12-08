const readline = require('readline-sync');

let arr: number[] = [];

let limit: number = parseInt(readline.question("Enter the array limit: "));

console.log("Enter the array: ");
for (let i: number = 0; i < limit; i++) {
    arr[i] = parseInt(readline.question());
}

let count: number = 0;
for (let j: number = 0; j < limit; j++) {
    if (arr[j] % 2 == 0) {
        count++;
    }
}

console.log("Count of even numbers are ", count);
