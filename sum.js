var readline = require('readline-sync');
var num1 = readline.question("Enter the first number: ");
var num2 = readline.question("Enter the second number: ");
var sum = num1 + num2;
console.log("Sum of ".concat(num1, " + ").concat(num2, " = ").concat(sum));
