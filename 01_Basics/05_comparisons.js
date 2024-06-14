// Simple Comparisons : > >= <= < == != 

// Tricky Comparisons
// In the examples, 2 and 02 are converted to Numbers before comparison and hence true is returned
console.log("Comparisons b/w strings and numbers");
console.log("2" > 1);   // true
console.log("02" > 1);  // true


// Comparisons with null
// In the comparisons we can see that whenever its >= or <= it returns true because
// Comparisons (> < >= <=) convert null to a number (converts to 0) before comparing 
// Equailty check (==) in this case nul is converted to undefined
console.log("\nComparisons with NULL");
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null < 0);  // false
console.log(null <= 0); // true


// Strict check -> === (this checks the Datatype and Values both) [Used most of the times]
console.log("\nStrict Checks");
console.log("1" === 1);