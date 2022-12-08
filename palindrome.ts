const readline = require('readline-sync');

let value: string = readline.question("Enter the string: ");

let flag: boolean = true;
let len: number = value.length - 1;

for (let x of value) {
    if (x != value[len]) {
        flag = false;
        break;
    }
    len--;
}

if (flag) {
    console.log(value + " is palindrome");
} else {
    console.log(value + " is not palindrome");
}

export { }