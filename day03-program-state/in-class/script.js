var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var number = randomInteger + 1;
  return number;
};

var computerWord = "";
var countCorrectGuess = 0;
var countCorrectGuessLeftToWin = 0;

var secretWordBaseMain = function (userInput) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var computerNumber = randomNumber();
  if (computerNumber === 1) {
    computerWord = "banana";
  } else if (computerNumber === 2) {
    computerWord = "chisel";
  } else if (computerNumber === 3) {
    computerWord = "faucet";
  } else {
    computerWord = "error";
  }

  var correctGuess = userInput === computerWord;
  countCorrectGuess = countCorrectGuess + correctGuess;
  countCorrectGuessLeftToWin = 2 - countCorrectGuess;

  if (countCorrectGuess < 2) {
    return "You guessed ${userInput} and computer guessed ${computerWord}. The guess was ${correctGuess}. You have won ${countCorrectGuess} times. You need ${countCorrectGuessLeftToWin} to win";
  } else if (countCorrectGuess === 2) {
    return "You have guessed correctly twice. You won.";
  }
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
