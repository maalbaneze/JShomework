//Get instructions
//var directionsText = document.getElementByClass("directions-text");
//Set alphabet array
//var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//   't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Words to guess in an array
var guessWord = ["muzzle", "breech", "caisson", "howitzer", "cannon", "lanyard"];
//Set wins to 0
var wins = 0;
//var numberOfGuesses = [0, 1, 2, 3, 4, , 5, 6, 7, 8, 9] + 1;
var userGuessLetter = document.getElementByClass("userguess-letter");
//var guessesRemaining = document.getElementByClass("guessesremaining");
//var wrongGuessed = document.getElementByClass("alreadyguessed");
//var winsText = document.getElementByClass("wins");
//var button = [reset];
//var resetButton = document.getElementById("reset");

//document.onkeyup = "Start";
//function Start() {
// directionsText.textContent = "";
//}
//Pick a word to be guessed and setup blank word
let randomWord = guessWord[Math.floor(Math.random() * guessWord.length)];
let guessLetter = []
for (var i = 0; i < randomWord.length; i++) {
    guessLetter[i] = "_";
}
var remainingLetters = guessWord.length;

while (remainingLetters > 0) {
    alert(guessLetter.join(" "))
}

var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
    break;
} elseif(guess.length !== 1); {
    alert("Please enter a single letter.");
} else {
    for (var j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === guess) {
            guessLetter[j] = guess;
            remainingLetters--;
        }
    }
}
alert(answerArray.join(" "));
alert("Excellent! The answer was " + word);


//const guesses = document.querySelector('.userguess-letter');
//const lastResult = document.querySelector('.alreadyguessed');
//const guessSubmit = document.querySelector('.guessSubmit');
//const guessField = document.querySelector('.guessField');
//let guessCount = 1;

//play = function (event) {
//  var userGuess = event.key;
// char[userGuess]; alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
//if (userguess === guessWord, userGuess)
//  userGuess.textContent = "You chose: " + userGuess;
//else {
//  (notInWord(alphabet, userGuess))
//  GuessLetter.textContent = "You chose: " + userGuess + " , which is not in the word";
// console.log(userGuess);
//}
//}

// winsText.textContent = "wins: " + wins;

//result = function () {
//wordHolder = document.getElementById("hold");
//correct = document.createElement("ul");

//for (var i = 0; i < word.length; i++) {
 //   correct.setAttribute('id', 'my-word');
 //   guess = document.createElement('li');
  //  guess.setAttribute("class", "userGuessLetter");
  //  if (word[i] === "-") {
  //      guess.innerHTML = "-";
  //      space = 1;
  //  } else {
  //      guess.innerHTML = "_";
   // }
  //  geusses.push(guess);
 //   wordHolder.appendChild(correct);
  //  correct.appendChild(guess);
//}

//comments = function () {
  //  guessesRemainingText.innerHTML = "You have " + guesses + " guesses";
   // if (guesses < 1) {
   //     guessesRemainingText.innerHTML = "Game Over";
   // }
   // for (var i = 0; i < geusses.length; i++) {
   //     if (counter + space === geusses.length) {
    //        guessesRemainingText.innerHTML = "You Win!";
    //    }
   // }
//}
//playAgain = function () {
 //   var resetGame;
   // if (resetGame) {
   //     (button === true);
   //     //else {
    //    (resetGame === true);
   // }
//}
//}