const readline = require('readline-sync');

const limit: number = parseInt(readline.question("Enter the array limit: "));
let arr: number[] = [];

console.log("Enter the array elements: ");

for (let i: number = 0; i < limit; i++) {
    arr[i] = parseInt(readline.question())
}

for (let i: number = 0; i < limit - 1; i++) {
    for (let j: number = i; j < limit; j++) {
        if (arr[i] <= arr[j]) {
            let temp: number = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

let str: string = "";
for (let i: number = 0; i < limit; i++) {
    str += arr[i] + " ";
}

console.log("Sorted array is: ", str);

