// Waits for DOM to load and then modifies HTML
document.addEventListener("DOMContentLoaded", function(event) { 
    selectWord();
    resetWord();
});

var words = ["aardvark", "cheetah", "chimpanzee", "platypus", "octopus",
"zebra", "falcon", "beetle", "grasshopper", "rhinocerous",
"jaguar", "parrot", "whale", "pelican", "ostrich", "penguin",
"kangaroo", "wombat", "gecko", "hyena", "raccoon"];

console.log(words);
var wins = 0;
var guessesLeft = 10;
var correctLetters = [];
var guessedLetters = [];
var selectedWord = "";

// Randomly select word from array, store it, and remove it from the array
function selectWord() {
    number = Math.floor(Math.random() * words.length);
    selectedWord = words[number];
    words.splice(number, 1);
    console.log(selectedWord); 
}

//Add new set of underscores when new word is chosen
function resetWord() {
    correctLetters = [];
    guessedLetters = [];
    for (i = 0; i < selectedWord.length; i++) {
        correctLetters[i] = "_";
    }
    document.getElementById("correct").innerHTML = correctLetters.join(" ");
}

// Main function - Checking user guesses and displaying correct/wrong letters
document.onkeyup = function(event) {
    document.getElementById("notifications").innerHTML = "";
    // Checking if user input is a letter a - z
    if (event.keyCode > 90 || event.keyCode < 65) {
        document.getElementById("notifications").innerHTML = "Please select a letter a through z";
        return;
    }
    // Checking for correct guesses
    userGuess = event.key.toLowerCase();
    for (i = 0; i < selectedWord.length; i++) {
        if (userGuess === selectedWord[i]) {
            correctLetters[i] = userGuess;
            console.log(correctLetters);
            document.getElementById("correct").innerHTML = correctLetters.join(" ");
        } 
    }   
    // Checking for already guessed letter
    if (guessedLetters.indexOf(userGuess) > -1) {
        document.getElementById("notifications").innerHTML = "You already guessed " + userGuess;
        return
    }
    
    // Checking for incorrect guesses
    if (selectedWord.indexOf(userGuess) === -1) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        document.getElementById("already").innerHTML = guessedLetters.join(" ");
        document.getElementById("guesses").innerHTML = guessesLeft;            
    } else {
        guessedLetters.push(userGuess);
        document.getElementById("already").innerHTML = guessedLetters.join(" ");
        console.log(guessedLetters);
    }
    
    // Checking for win condition
    if (correctLetters.indexOf("_") === -1) {
        document.getElementById("notifications").innerHTML = "You win!";
        document.getElementById("animalImage").innerHTML = '<img src="assets/images/' + selectedWord + '.jpg"/>'
        wins++;
        selectWord();
        resetWord();
        guessesLeft = 10;
        document.getElementById("winCount").innerHTML = wins;
        document.getElementById("guesses").innerHTML = guessesLeft;
        document.getElementById("already").innerHTML = "";
    }
    // Checking for loss condition
    if (guessesLeft < 1) {
        document.getElementById("notifications").innerHTML = "You lose! The word was " + selectedWord;
        selectWord();
        resetWord();
        guessesLeft = 10;
        document.getElementById("guesses").innerHTML = guessesLeft;
        document.getElementById("already").innerHTML = "";
    }
}



