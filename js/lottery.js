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

function setNumber() {
  number = Math.round(Math.random() * (100000 - 1) + 1);
  numberDisplay.textContent = `Your Number: ${number}`;
  changes++;
  console.log(changes);

  if (changes == 20) {
    clearInterval(intervalId);
    intervalId = null;

    setTimeout(HandleWinLost, 500);
  }
}

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
