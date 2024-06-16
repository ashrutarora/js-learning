// When values arent compared but instead they are checked for their existence

/* 
Falsy Values

    -- false
    -- 0 & (-0)
    -- 0n (BigInt)
    -- null
    -- undefined
    -- NaN


Truthy Values

    -- true
    -- "0"
    -- "false"
    -- " "
    -- []
    -- {}
    -- function(){}
    --
*/

// Interview Qns
console.log(false == 0);
console.log(false == "");
console.log(0 == "");

// Logical Operators --> || &&
// Nullish Coalescing Operator --> (??) - null, undefined

// Powerful tool for providing default values when dealing with potential null or undefined values. It offers a more precise alternative to the logical OR (||) operator by only considering null or undefined as the values that trigger the fallback. This can be particularly useful when handling default configuration values, user input, or API responses.

/* 
let result = expression1 ?? expression2;
 	•	expression1: The value to check.
    •	expression2: The fallback value if expression1 is null or undefined.
*/

let val1;
val1 = 5 ?? 10; // 5 assigned
val1 = null ?? 10; // 10 assigned
val1 = undefined ?? 10; // 10 assigned
val1 = null ?? undefined ?? 20; // 20 assigned

console.log(val1);

// Terniary Operator (?)

// condition ? true : false

const price = 80;
price >= 50 ? console.log("Yes") : console.log("No");
