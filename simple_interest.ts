const readline = require('readline-sync');

let principal_amount: number = parseInt(readline.question("Enter the principal amount: "));
let interest_rate: number = parseInt(readline.question("Enter the interest rate: "));
let no_of_years: number = parseInt(readline.question("Enter the number of years: "));

let simple_interst: number = (principal_amount * interest_rate * no_of_years) / 100;

console.log(`Simple interest rate of ${principal_amount} is: ${simple_interst}`);

export { }