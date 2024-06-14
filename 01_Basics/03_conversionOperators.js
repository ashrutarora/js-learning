let score = 33;
let scoreInString = "33";

/* 
Knowing the type is necessary for working on problems.
We might not necessarily know the type.
*/

// Datatype of score is number and not Number
console.log("score =", score);
console.log("Type of score =", typeof score); // Expected output: number

// Datatype of scoreInString is string and not String
console.log("\nscoreInString =", scoreInString);
console.log("Type of scoreInString =", typeof scoreInString); // Expected output: string

// But we use Number and Strings in code
let scoreInNumber = Number(scoreInString);
console.log("\nscoreInNumber =", scoreInNumber); // Expected output: 33
console.log("Type of scoreInNumber =", typeof scoreInNumber); // Expected output: number

// Let's try to convert a mix of number and string
let numString = "33abc";
console.log("\nnumString =", numString);
console.log("Converting numString to Number");
let scoreInNum = Number(numString);
console.log("scoreInNum =", scoreInNum); // Expected output: NaN
console.log("Type of scoreInNum =", typeof scoreInNum); // Expected output: number
console.log(
  "We can see that the value is NaN and when converting string to number, it is not converted to a number type.\nNaN (Not a Number) - type of NaN is number"
);

// Let's try to convert null
let nullString = null;
console.log("\nnullString =", nullString);
console.log("Converting nullString to Number");
let nullScore = Number(nullString);
console.log("nullScore =", nullScore); // Expected output: 0
console.log("Type of nullScore =", typeof nullScore); // Expected output: number
console.log("We can see that the value is 0 when converting null to a number");

// Let's try to convert undefined
let undefString = undefined;
let undefScore = Number(undefString);
console.log("\nundefScore =", undefScore); // Expected output: NaN
console.log("Type of undefScore =", typeof undefScore); // Expected output: number
console.log(
  "We can see that the value is NaN when converting undefined to a number"
);

// Let's try to convert boolean
let boolString = false;
let boolScore = Number(boolString);
console.log("\nboolScore =", boolScore); // Expected output: NaN
console.log("Type of boolScore =", typeof boolScore); // Expected output: number
console.log(
  "We can see that the value is NaN when converting boolean to a number where",
  "1 is true, 0 is false"
);

// Let's try to convert number to boolean
let isLoggedIn = 1
console.log("\nisLoggedIn =", isLoggedIn);
console.log("Type of isLoggedIn =", typeof isLoggedIn);
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log("boolIsLoggedIn =", boolIsLoggedIn);
console.log("Type of boolIsLoggedIn =", typeof boolIsLoggedIn);
console.log("1 is true and 0 is false.\nEmpty String is false but any Non-Empty String is true");