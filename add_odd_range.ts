const readline = require('readline-sync');

let limit: number = parseInt(readline.question("Enter the limit: "));
let oddSum: number = 0;

for (let i: number = 1; i <= limit; i++) {
    if (i % 2 != 0)
        oddSum = oddSum + i;
}

console.log(`Odd sum within the limit ${limit} is ${oddSum}`);

export { }