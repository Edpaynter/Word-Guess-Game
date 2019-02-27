

var letters = ["dog", "cat", "mouse"];
var theAnswer = letters[ Math.floor(Math.random() * letters.length) ].toLowerCase();
console.log(theAnswer)
var isArrayLong = [];
var gameWins = 0
var attempsLeft = 10
var lettersLeft = []
var lettersGuessed = []
var gameState = false
gameLosses = 0

function wordDashes(word){
    for(i=0; i < word.length; i++){
        lettersLeft.push("_")
    }
}
wordDashes(theAnswer)

$('#winletters').text((lettersLeft))
 //----------------------------

function addLetters(letter){
    var isCorrectGuess = false
    

    for(i=0; i < theAnswer.length; i++){
        if(letter === theAnswer[i]){
          lettersLeft[i] = letter
          isArrayLong.push(i)
          isCorrectGuess = true
          gameState = true
          winCheck(isArrayLong, theAnswer)
          
        }   
    }
    
    if (!isCorrectGuess){
        attempsLeft--;
        lettersGuessed.push(letter)
        lossCheck()
        
        
        
    }
    
}

function lossCheck(){
    if(attempsLeft === 0){
        console.log("You Lose")
        gameState = false
        gameLosses++
        this.location.reload()   
    }
    
}

function winCheck(guesses, word){
    if (guesses.length === word.length){
        $("#bigblock").text("You Won!")
        gameWins++;

    }
}


this.alert("Press any key to get started!")
document.onkeyup = function(event){
    // Determines which key was pressed.
    var userGuess = event.key
    userGuess = userGuess.toLowerCase()

    console.log(userGuess)   
    addLetters(userGuess)
    
    
    $('#winletters').text(lettersLeft)
    $('#attemptsleft').text("Attempts Left: " + attempsLeft)
    $('#lettersguessed').text("Letters Guessed: " + lettersGuessed)
    $("#losses").text("Losses: " + gameLosses)


};



