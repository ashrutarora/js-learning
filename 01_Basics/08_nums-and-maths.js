const score = 400; // number defined
const balance = new Number(400); // New object defined as number
console.log(score);
console.log(balance);

// For eCommerce Apps
console.log(balance.toFixed(2));
console.log(`balance.toFixed(2) = ${balance.toFixed(2)}`);

// Precision function - Prirority is given before the decimal
const someNum = 541.57382;
// The precision focuses on the (n) numbers before the decimal
console.log(`\nsomeNum.toPrecision(1) = ${someNum.toPrecision(1)}`);
console.log(`someNum.toPrecision(2) = ${someNum.toPrecision(2)}`);
console.log(`someNum.toPrecision(3) = ${someNum.toPrecision(3)}`);
console.log(`someNum.toPrecision(4) = ${someNum.toPrecision(4)}`);

// For formatting the number as per Language Type
const otherNum = 100000;
console.log("Converting 100000 to localeString type");
console.log(
  `\notherNum.toLocaleString('en-IN') = ${otherNum.toLocaleString("en-IN")}`
);

// For MAX Number and MIN number
console.log(`\nNumber.MIN_SAFE_INTEGER = ${Number.MIN_SAFE_INTEGER}`);

// ******************** MATHS ********************
// Its an inbuilt library in js

console.log(`\nMath.abs(-4) = ${Math.abs(-4)}`);
console.log(`Math.round(112.531) = ${Math.round(112.531)}`);
console.log(`Math.ceil(3.4) = ${Math.ceil(3.4)}`);
console.log(`Math.floor(3.4) = ${Math.floor(3.4)}`);
console.log(`Math.min(33,4,2,4,2,) = ${Math.min(33, 4, 2, 4, 2)}`);

// But Maths is mostly used in Math.random()
console.log();

// The value that Math.random give is b/w 0-1
console.log(`Math.random() = ${Math.random()}`);

// To change the range
console.log();
console.log(`Math.random() = ${Math.random()}`);
console.log(`Math.random()*10 = ${Math.random() * 10}`);

// But suppose if the value is 0.041 then *10 would give 0.41
// To fix this and get the numbers starting from 1, we add 1 to it

console.log();
console.log(`Math.random() = ${Math.random()}`);
console.log(`(Math.random()*10) + 1 = ${Math.random() * 10 + 1}`);

// Now i want a range between a specific range

const min = 10;
const max = 20;

// I want random nums bw 10 and 20
const randVal = Math.floor(Math.random() * (max - min + 1) + min);
console.log();
console.log(`Random Value b/w 10 and 20 = ${randVal}`);

// The range is (max-min+1) = (20-10+1)
// But we need the starting point as 10(min) so we add it to the random value
// So finally our values are b/w 10 and 20 (both inclusive)

// formula is (random * (max - min + 1)) + min