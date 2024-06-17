// Generate a random color

const randColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randColor());
let intervalId;

const startChangingColor = () => {
  changeBgColor = () => {
    document.body.style.backgroundColor = randColor();
  };
  intervalId = setInterval(changeBgColor, 1000);
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
