function sayMyName() {
  console.log("A");
  console.log("S");
  console.log("H");
  console.log("R");
  console.log("U");
  console.log("T");
}
sayMyName();

console.log("\n\n");
// During function definition, num1 & num2 are Parameters.
function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  console.log(`Result(Inside Function) = ${result}`);

  return result || num1 + num2;

  console.log("Hello"); // Code after return is never executed
}
// When calling the function, num1 & num2 are Arguments.
const result = addTwoNumbers(1, 3);
console.log(`Result(Outside Function) = ${result}`);

console.log("\n\n");

// Another Example (Syntax)

function loginMessage(username = "King Jenga") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginMessage("Ashrut"));
console.log(loginMessage(""));
console.log(loginMessage()); // Undefined

console.log("\n\n\n");

// REST OPERATOR --> When we dont know the number of Arguments in function

function calcCartPrice(...num1) {
  return num1;
}

console.log(calcCartPrice(200, 400, 500));


const user = {
    username: "Ashrut",
    price: 199
}

function handleObject(anyObject){

    console.log(`Username is ${anyObject.username}\nPrice is ${anyObject.price}`);
}

handleObject(user)