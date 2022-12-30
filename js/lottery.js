const button = document.getElementById("play");
const numberDisplay = document.getElementById("number");

let intervalId;
let changes = 0;
let number = 0;

function changeNumber() {
  if (!intervalId) {
    intervalId = setInterval(setNumber, 100);
  }
}

//This function sets the number being displayed to a random number between 1 and 100000 for 20 intervals before finally landing on a number and calling HandleWinLost
function setNumber() {
  number = Math.round(Math.random() * (100000 - 1) + 1);
  numberDisplay.textContent = `Your Number: ${number}`;
  changes++;

  if (changes == 20) {
    clearInterval(intervalId);
    intervalId = null;

    setTimeout(HandleWinLost, 500);
  }
}

//This function alerts the user to whether they have won or loss, then resets the necessary variables in order to play again once the alert box is closed.
function HandleWinLost() {
  if (number >= 1000) {
    alert("Too bad! You've lost!");
  } else {
    alert("Very Good! You've won!");
  }

  number = 0;
  numberDisplay.textContent = `Your Number: ${number}`;
  changes = 0;
}

button.addEventListener("click", (event) => {
  changeNumber();
});
