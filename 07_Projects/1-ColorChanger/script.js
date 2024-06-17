// Select all the buttons
const buttons = document.querySelectorAll(".button");

// Select the body to change the Bg color
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const color = e.target.id;
    body.style.backgroundColor = color;
  });
});
