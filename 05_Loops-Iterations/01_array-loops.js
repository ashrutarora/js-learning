// for of --> Works on arrays, maps, strings but NOT ON OBJECTS

// Array of Objects
// --> ["", "", ""]
// --> [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello Ashrut";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// MAPS - Holds UNIQUE key value pairs

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

console.log(map);

// Loop on Maps

for (const key of map) {
  console.log(key);
}
console.log();
// Destructuring the key and values
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// for in --> can iterate over Objects, arrays, strings but only keys else use arr[key], can't use for maps as they are not iterable
const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

console.log();
for (const key in myObject) {
  console.log(`${key} - ${myObject[key]}`);
}

console.log();
for (const key in arr) {
  console.log(arr[key]);
}

// for each (mostly used)

const coding = ["js", "ruby", "java", "python", "arr"];

coding.forEach((element) => {
  console.log(element);
});
