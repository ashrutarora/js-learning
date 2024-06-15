// const tinderUser = new Object() // -> Singleton Object
const tinderUser = {}; // -> Non Singleton Object

tinderUser.id = "123131abah";
tinderUser.name = "Jenga";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "jenga@gmail.com",
  fullName: {
    userFullName: "Ashrut",
    lastName: "Arora",
  },
};

console.log(
  regularUser.fullName.userFullName + " " + regularUser.fullName.lastName
);

// We have something known as optional chaining denoted by (?) --> Reduces the use of If Else
// console.log(
//   regularUser.fullName.userFullName + " " + regularUser?fullName.lastName
// );

// Mostly used during API calls

// How to merge multiple objects?

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// 1) const obj4 = { obj1 , obj2, obj3 } will not work because each object is treated as a property
// 2) Object.assign - {} means all the objects are compiled in it, else all objects will be compiled in obj1
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// 3) Use the spread operator
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);
console.log("\n\n\n");

// Users - Array of Objects
const users = [
  {
    id: 1,
    email: "1@gmail.com",
  },
  {
    id: 2,
    email: "2@gmail.com",
  },
  {
    id: 3,
    email: "3@gmail.com",
  },
  {
    id: 4,
    email: "4@gmail.com",
  },
  {
    id: 5,
    email: "5@gmail.com",
  },
];
console.log("Keys");
console.log(Object.keys(tinderUser)); // Returns an Array of Keys - Useful in db
console.log("Values");
console.log(Object.values(tinderUser));
console.log("Entries");
console.log(Object.entries(tinderUser));

// To check if Properties exist or not
console.log(tinderUser.hasOwnProperty("isLogged"));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
