let randNum = Math.round(Math.random() * 100) + 1;
console.log(randNum);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const prevGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
    return;
  }
  if (guess < 1) {
    alert("Please enter a number more than 1");
    return;
  }
  if (guess > 100) {
    alert("Please enter a number less than 100");
    return;
  }

  prevGuess.push(guess);

  if (numGuesses >= 10) {
    displayGuess(guess);
    displayMessage(`Game Over. Random number was ${randNum}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randNum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randNum) {
    displayMessage(`Your guess is low`);
  } else if (guess > randNum) {
    displayMessage(`Your guess is high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuesses.innerHTML += `${guess}  `;
  numGuesses++;

  remainingGuesses.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randNum = Math.round(Math.random() * 100) + 1;
    console.log(randNum);
    prevGuess = [];
    numGuesses = 1;
    prevGuesses.innerHTML = "";
    remainingGuesses.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    subt.removeAttribute("disabled"); // Re-enable the submit button  // Disable the submit button
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  subt.setAttribute("disabled", ""); // Disable the submit button
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
