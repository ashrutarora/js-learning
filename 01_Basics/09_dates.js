let myDate = new Date();

// Simple Date Operations
console.log(myDate); // Date Object
console.log(`\nmyDate = ${myDate}`); // toString is called automaticaly
console.log(`\nmyDate.toISOString() = ${myDate.toISOString()}`);
console.log(`\nmyDate.toUTCString() = ${myDate.toUTCString()}`);
console.log(`\nmyDate.toDateString() = ${myDate.toDateString()}`);
console.log(`\nmyDate.toLocaleDateString() = ${myDate.toLocaleDateString()}`);
console.log(`\nmyDate.toTimeString() = ${myDate.toTimeString()}`);

let newDate = new Date(2003, 10, 10, 4, 45);
console.log(newDate.toLocaleString());

// Time Operations
let time = Date.now();
console.log(`\ntime = ${time}`); // Result in Miliseconds
console.log(`myDate in ms = ${myDate.getTime()}`); // Result in Miliseconds

// To convert ms to sec
console.log(`myDate in sec = ${Math.floor(myDate.getTime() / 1000)}`); // Result in Miliseconds
