/*
Map
    -- map transforms each element.
    -- returns new arrays
    -- when we need to change each element of an array

Filter
    -- selects elements based on a condition.
    -- returns new arrays
    -- when you need a subset of the original array.

Reduce
    -- aggregates all elements into a single value.
    -- returns a single value
    -- when you need to derive a single value from an array.

*/

const numbers = [1, 2, 3, 4];

// Maps - When you want to transform each element
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// Filters - When you need to filter out values
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

// Reduce - When you want to reduce an array to a single value (sum, product, aggregate)
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);   
