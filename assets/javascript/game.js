// Waits for DOM to load and then modifies HTML
document.addEventListener("DOMContentLoaded", function(event) { 
    resetWord();
});

console.log("working");

var words = ["aardvark", "cheetah", "chimpanzee", "platypus", "octopus",
             "zebra", "falcon", "beetle", "grasshopper", "rhino"];

var wins = 0;
var guessesLeft = 15;
var correctLetters = [];
var wrongLetters = [];

// Randomly select word from array
function selectWord() {
    result = words[Math.floor(Math.random() * words.length)];
    return result;
}


//Add new set of underscores when new word is chosen
function resetWord() {
    for (i = 0; i < theWord.length; i++) {
        correctLetters[i] = "_";
    }
    document.getElementById("correct").innerHTML = correctLetters.join(" ");
}

//Storing selected word
theWord = selectWord();


//Checking user guesses and displaying correct/wrong letters
document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    for (i = 0; i < theWord.length; i++) {
        if ( userGuess === theWord[i] ) {
            correctLetters[i] = userGuess;
            console.log(correctLetters);
            document.getElementById("correct").innerHTML = correctLetters.join(" ");
        }
    }
}


console.log(theWord);
