// Converting to negative value
let value = 3;
let negValue = -value;
console.log(negValue);

// Basic Arithmetic Operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// Operations on Strings

let str1 = "hello";
let str2 = " ashrut";

let str3 = str1 + str2;
console.log("str3 =", str3);

// Tricky Operations
// Here we can see that these are being converted to Strings and then concatenated
console.log("\nString Tricky Operations");
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);

// But in this case when the string is at end then its first added then converted to string
console.log(1 + 2 + "2");

// Conclusion - If string is the first value then all values are converted to string

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// Prefix + Postfix 

/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/