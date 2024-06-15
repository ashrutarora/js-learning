const arr = [0, 1, 2, 3, 4]; // -> Object

function printArray(arr) {
  console.log(`arr = [${arr}]`);
}

// Original Array
printArray(arr);

// Adding elements to the last
arr.push(5);
printArray(arr);

// Removing elements from the last
arr.pop();
printArray(arr);

// Adds elements to the start -> Very inefficient
arr.unshift(7);
printArray(arr);

// Removes elements from the start
arr.shift();
printArray(arr);

// Check for a value in array
console.log(`arr.includes(3) = ${arr.includes(3)}`);

// Check for index of a value --> Returns -1 if it doesent exist
console.log(`arr.indexOf(3) = ${arr.indexOf(2)}`);

const newArr = arr.join(); // --> Converts to string + copies values
console.log(arr);
console.log(newArr);
console.log();

// Slice Operator -> Does not manipulate the original array
console.log("A =", arr);

console.log();
const myn1 = arr.slice(1, 3);
console.log(myn1);
console.log("B =", arr);

// Splice Operator -> Manipulates the original array
console.log();
const myn2 = arr.splice(1, 3);
console.log(myn2);
console.log("C =", arr);
