const readline = require('readline-sync');

let value: number = parseInt(readline.question("Enter a number: "));

for (let i: number = 1; i <= 10; i++) {
    console.log(`${i} * ${value} = ${i * value}`);
}

export { }