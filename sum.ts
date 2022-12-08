const readline = require('readline-sync');

let num1: number = parseInt(readline.question("Enter the first number: "));
let num2: number = parseInt(readline.question("Enter the second number: "));

let sum: number = num1 + num2;

console.log(`Sum of ${num1} + ${num2} = ${sum}`);

export {}
