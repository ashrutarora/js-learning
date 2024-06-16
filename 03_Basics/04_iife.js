// IIFE = Immediately Invoked Function Expressions

// WHY is it needed?

// i) Sometimes when we want to execute the function right after starting the application
// ii) In a file where we want to do DataBase Connection, we need to invoke it right after starting the app
// iii)  Often used to create a new scope to avoid polluting the global scope, especially in the context of avoiding conflicts with other code.

// 1) Normal function
function chai() {
  console.log("DB Connected");
}
chai();

// 2) IIFE - Wrap everything around () and add () to the end
// Named IIFE
(function chaiTwo() {
  console.log("DB Connected");
})();

// 3) IIFE as an Arrow Function

(() => {
  console.log("DB Not Connected");
})();

// 4) Pass arguments

((name) => {
    console.log(`DB Not Connected ${name}`);
  })("ashrut");
  