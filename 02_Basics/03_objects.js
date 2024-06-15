// Objects can be declared in 2 ways
// As a Literal -> const jsUser = {}
// As a Constructor -> Object.create()

// Singleton - If we make an object using Constructor then it becomes a Singleton object, but not when made with Literals

const jsUser = {
  name: "Ashrut",
  age: 20,
  location: "Bangalore",
  email: "ashrut@gmail.com",
  isLoggedIn: false,
  lastLogInDays: ["Monday", "Tuesday"],
  "full Name": "Ashrut Arora",
};

// How to Access Objectsm
// 1) Using dot(.) - No need to access it like String
console.log(jsUser.email);
// console.log(jsUser.full Name); ----> // Does not work because they are different words

// 2) Using [](Square Brackets) - Have to access it like String, but can access anything
console.log(jsUser["full Name"]);

// Interview Question  --> How to add a symbol to object and print it
const mySym = Symbol("Key1");

const jsUser1 = {
  name: "Ashrut",
  age: 20,
  location: "Bangalore",
  email: "ashrut@gmail.com",
  isLoggedIn: false,
  lastLogInDays: ["Monday", "Tuesday"],
  "full Name": "Ashrut Arora",
  mySym: "myKey1", // This is wrong, we are declaring it normally here and not referring to the above Symbol
  [mySym]: "myKey1",
};

console.log(jsUser1[mySym]); // See how we didnt use ("") double quotes --> Syntax

// To manipulate properties of Object
jsUser1["full Name"] = "Ashrut Alok Arora";
jsUser1.email = "ashrutarora@gmail.com";
console.log(jsUser1);

// To stop the manipulation of object use Object.Freeze()
Object.freeze(jsUser1);
jsUser1["full Name"] = "Ashrut Arora";

// Add a function to the object

jsUser.greeting = function () {
  console.log(`Hello ${this.name}`);
};
// this.{property} is used for the current reference

console.log(jsUser.greeting); // --> Shows [Function (anonymous)]
console.log(jsUser.greeting()); // --> Shows greeting message and undefined
