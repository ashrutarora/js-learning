function printArray(name, arr) {
  console.log(`${name}: [${arr}]`);
}

const marvel = ["Iron Man", "Hulk", "Spiderman"];
const dc = ["Flash", "Batman", "Superman"];

printArray("Marvel", marvel);
printArray("DC", dc);

// i) Merge these 2 arrays
// 1) Use .push() --> Does not work because it pushes the whole array and not each element
// 2) Use concat() --> Can merge only 2 arrays (old way to do it)
// 3) Use spread operator (...) --> Ca  n merge multiple arrays and best way to do it

const all = [...marvel, ...dc];
printArray("All", all);
console.log();

// ii) Flatten Arrays
// If there are arrays inside arrays, we can flatten them --> Using infinity flattens it all else we have to manually set the depth to flatten

const notFlatArray = [1, 2, 3, [4, 5], 6, [7, 8, [8, 9]]];
console.log("Array BEFORE Flattening: ");
console.log(notFlatArray);

FlatArray = notFlatArray.flat(Infinity);
console.log("Array AFTER Flattening: ");
console.log(FlatArray);

// iii) Array or Not
console.log(`Is "ASHRUT" array or not? - ${Array.isArray("ASHRUT")}`);

// iv) Make an Array
console.log(`Convert "ASHRUT" to array - [${Array.from("ASHRUT")}]`);

// v) Interesting Case for Interviews
console.log(Array.from({ name: "Ashrut" }));
// The above case returns empty because its neither array-like, nor iterable
// To convert this to array we will have to use Object class
// -> Object.values()
// -> Object.keys()
// -> Object.entries()

const obj = { name: "Ashrut" };

// Convert object values to an array
const valuesArray = Object.values(obj);
console.log(valuesArray); // Output: ["Ashrut"]

// Convert object keys to an array
const keysArray = Object.keys(obj);
console.log(keysArray); // Output: ["name"]

// Convert object entries to an array
const entriesArray = Object.entries(obj);
console.log(entriesArray); // Output: [["name", "Ashrut"]]

// vi) To make a new array from multiple elements

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

/*
Difference b/w Array.of and Array.from

	•	Array.of: Use it when you want to create an array from a set of arguments.
	•	Array.from: Use it when you need to convert array-like or iterable objects to arrays, especially with an optional transformation function.

*/