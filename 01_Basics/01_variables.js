const accountId = 11231; // Const can't be changed
let accountEmail = "ashrut@gmail.com";
var accountPassword = "12345";
accountCity = "Bengaluru";
let accountState;


// Difference between let and var

/*
var not used because of its functional scope issues
let is used to get over that problem

When a variable is declared in JS its initialized to "UNDEFINED" value
*/

// accountId = 2 -> Not allowed
accountEmail = "arora@gmail.com";
accountPassword = "212121";
accountCity = "Jaipur";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
