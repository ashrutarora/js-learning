const user = {
  username: "Ashrut",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Jenga"; // Changing the username (context)
user.welcomeMessage(); // Invoking the function
console.log(this);

// this works inside Objects not inside Functions

function chai() {
  let username = "Ashrut";
  console.log(this.username);
}
chai(); // Prints undefined

const chaiOne = function chai() {
  let username = "Ashrut";
  console.log(this.username);
};

chai(); // Prints undefined

// ARROW FUNCTIONSSSSS

const chaiTwo = () => {
  let username = "Ashrut";
  console.log(this);
};
chai(); // Prints undefined


// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit Return way (Used in ReactJS)
// const addtwo = (num1, num2) => num1 + num2;
const addtwo = (num1, num2) => (num1 + num2);

console.log(addtwo(5, 7));

