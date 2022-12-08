const readline = require('readline-sync');

let arr1: number[] = [];
let arr2: number[] = [];
let arr3: number[] = [];

let limit: number = parseInt(readline.question("Enter the array limit: "));
console.log("Enter first array: ");


for (let i: number = 0; i < limit; i++) {
    arr1[i] = parseInt(readline.question());
}

console.log("Enter the second array: ");

for (let i: number = 0; i < limit; i++) {
    arr2[i] = parseInt(readline.question());
}

// swapping

for (let i: number = 0; i < limit; i++) {
    arr3[i] = arr1[i];
    arr1[i] = arr2[i];
    arr2[i] = arr3[i];
}

let str1: string = "";
let str2: string = "";
for (let j: number = 0; j < limit; j++) {
    str1 += arr1[j] + " ";
    str2 += arr2[j] + " ";
}

console.log("Array 1: ", str1);
console.log("Array 2: ", str2);

export { }