
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
var directionsText = document.getElementById("directions-text");
var guessWord = ["muzzle", "breech", "caisson", "howitzer", "cannon", "lanyard"]
var userGuessLetter = document.getElementById("userguess-letter");
var guessesRemainingText = document.getElementById("guessesremaining-text");
var alreadyGuessedText = document.getElementById("alreadyguessed-text");
var guesses = [];
var wins = 0;
var winsText = document.getElementById("wins-text");

//<h3> You just typed <span id="userguess-text"><strong>...Nothing.</strong></span></h3>;

document.onkeyup = function (userGuessLetter) {
    userText.textContent = event.key

    var userGuess = event.key;
    directionsText.textContent = "";
    char[userGuess]; alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
    if (isInWord(guessWord, userGuess))
        userGuessLetter.textContent = "You chose: " + userGuess;
    else {
        (notInWord(alphabet, userGuess))
        userGuessLetter.textContent = "You chose: " + userGuess + " , which is not in the word";
    }
}

// winsText.textContent = "wins: " + wins;

result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute("class", "userGuessText");
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }

        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

comments = function () {
    guessesRemainingText.innerHTML = "You have " + guesses + " guesses";
    if (guesses < 1) {
        guessesRemainingText.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
            guessesRemainingText.innerHTML = "You Win!";
        }
    }
}
