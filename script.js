let guesses = [];
let score = 1;
let correctNumber = getRandomNumber();

window.onload = function () {
  document.getElementById('number-guess').select();
  document
    .getElementById('number-submit')
    .addEventListener('click', playGame, cleanInput);
};

function playGame() {
  const numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  guesses.push(numberGuess);
  displayHistory();
}

function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

function getRandomNumber() {
  const randomNumber = Math.random();
  const wholeNumber = Math.floor(randomNumber * 100);
  return wholeNumber;
}

function displayHistory() {
  document.getElementById('history').innerHTML = guesses;
  score++;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case 'warning':
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case 'danger':
      dialog = "<div class='alert alert-danger' role='alert'>";
      break;
    case 'won':
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += '</div>';
  return dialog;
}

function showYouWon() {
  const text =
    'Done! Guessed number ' + correctNumber + ' from ' + score + ' times!';
  let dialog = getDialog('won', text);
  document.getElementById('result').innerHTML = dialog;
}

function showNumberAbove() {
  const text = 'Your guess is too high';
  let dialog = getDialog('warning', text);
  document.getElementById('result').innerHTML = dialog;
}

function showNumberBelow() {
  const text = 'Your guess is too low';
  let dialog = getDialog('danger', text);
  document.getElementById('result').innerHTML = dialog;
}

document.addEventListener('keydown', event => {
  if (event.code === 'Enter'||event.code === 'NumpadEnter') {
    playGame();
    cleanInput();
  }
});

function cleanInput() {
  document.getElementById('number-guess').value = '';
}
