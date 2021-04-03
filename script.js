let guesses = [];
let score = 1;

let correctNumber = getRandomNumber();

window.onload = function () {
  document.getElementById('number-submit').addEventListener('click', playGame);
  document.getElementById('restart-game').addEventListener('click', initGame);
};

function playGame() {
  const numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
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

function initGame() {
  correctNumber = getRandomNumber();
  document.getElementById('result').innerHTML = '';
  guesses = [];
  displayHistory();
}

function getRandomNumber() {
  const randomNumber = Math.random();
  const wholeNumber = Math.floor(randomNumber * 100);
  return wholeNumber;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      'You guessed ' +
      guesses[index] +
      '</li>';
    index--;
  }
  list += '</ul>';
  document.getElementById('history').innerHTML = list;
  score++;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case 'info':
      dialog = "<div class='alert alert-info' role='alert'>";
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
    'You guessed the number ' + correctNumber + ' from ' + score + ' times';
  let dialog = getDialog('won', text);
  document.getElementById('result').innerHTML = dialog;
}

function showNumberAbove() {
  const text = 'Your guess is too high!';
  let dialog = getDialog('info', text);
  document.getElementById('result').innerHTML = dialog;
}

function showNumberBelow() {
  const text = 'Your guess is too low!';
  let dialog = getDialog('danger', text);
  document.getElementById('result').innerHTML = dialog;
}
