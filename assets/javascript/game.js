var theAnswer;
var attempsLeft;
var isArrayLong
var lettersGuessed

var letters = ["DOG", "CAT", "MOUSE", "WOLF", "BEAR", "TURTLE"];
var gameWins = 0
var gameLosses = 0

function play(){
   
    theAnswer = letters[Math.floor(Math.random() * letters.length)].toLowerCase();
    attempsLeft = 10
    isArrayLong = []
    lettersGuessed = []
    lettersLeft = []

    
    $('#winletters').text(lettersLeft)

    function wordDashes(word) {
        for (i = 0; i < word.length; i++) {
            lettersLeft.push("_")
            
        }
    }
    wordDashes(theAnswer)
}


function addLetters(letter) {
    var isCorrectGuess = false
    for (i = 0; i < theAnswer.length; i++) {
        if (letter === theAnswer[i]) {
            lettersLeft[i] = letter
            isArrayLong.push(i)
            isCorrectGuess = true
            winCheck(isArrayLong, theAnswer)
        }
    }

    if (!isCorrectGuess) {
        attempsLeft--;
        lettersGuessed.push(letter)
        lossCheck()
    }

}

function lossCheck() {
    if (attempsLeft === 0) {
        gameLosses++;
        $("#bigblock").text("You Lost, Try Again!")
        play()
    }
}

function winCheck(guesses, word) {
    if (guesses.length === word.length) {
        $("#bigblock").text("You Win, Play Again!")
        gameWins++;
        play()
    }
}

play()

document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key
    userGuess = userGuess.toLowerCase()

    console.log(userGuess)
    addLetters(userGuess)


    $('#winletters').text(lettersLeft)
    $('#attemptsleft').text("Attempts Left: " + attempsLeft)
    $('#lettersguessed').text("Letters Guessed: " + lettersGuessed)
    $("#losses").text("Losses: " + gameLosses)
    $("#wins").text("Wins: " + gameWins)


};



