// let, const is scope specific
// var is NOT scope specific

var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  d = 30;
}

// console.log(a); // Error
// console.log(b); // Error
// console.log(c); // Output: 30
// console.log(d); // Output: 30

// Nested Scope

function one() {
  const username = "Ashrut";

  function two() {
    const website = "YT";
    console.log(username); // --> username is available in two() as we are inside one()
  }
  // console.log(website); // --> Scope of website ended

  two();
}
// This is known as Closure
one();

// Function Declaration and Scopes

// 1) You can declare a function after calling it (if its not stored in a variable)

addOne(5); // --> Correct
function addOne(num) {
  return num + 1;
}
addOne(5); // --> Correct


// addTwo(5); // --> Wrong
const addTwo = function (num) {
  return num + 1;
};
addTwo(5); // --> Correct
