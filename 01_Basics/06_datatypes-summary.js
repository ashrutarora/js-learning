// JavaScript is Dynamically-typed where the interpreter assigns variables a type at runtime based on the variable's value at the time

// Datatypes are divided based on how they are stored in the memory, divided into Primitive and Non Primitive Data Types

/*
Primitive (Call by Value) Types
While making changes, a copy of value is passed and the changes are made on that and not on the orig value

7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const temp = null;
let userEmaill;

// 123 is same for both id and anotherId
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // Output : false
// This is because they are treated as unique symbols(values)
// Symbols are used as property keys to avoid property name collisions
// This ensures that symbols can be used reliably as unique identifiers.

// for converting a number from Numeric to BigInt we add n in the end
const bigNumber = 64241713881148171n;

/* 
Non Primitive(Call by Reference) / Reference Types
A reference for these values is passed and then the changes are done

Arrays, Objects, Functions
*/

// Array
const heros = ["Shaktiman", "nagaraj", "doge"];
console.log(heros);

// Object
let myObj = {
  name: "Ashrut",
  age: 22,
};
console.log(myObj);

// Functions
const myFunc = function () {
  console.log("Hello from myFunc");
};

