

var wins = 0;
var losses = 0;
var guessRemain = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);
var guessedLetters = []; //allows multiple functions to use this variable (global)



function reset(){
    userGuess = [];
    guessRemain = 9;
    guessedLetters = [];  
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("computersGuess" + computerGuess);
};
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {



var noGuess = guessedLetters.indexOf(userGuess);
var userGuess = event.key;
    console.log(userGuess);  
    console.log(guessedLetters);

            
            if (userGuess == computerGuess){
                wins++;
                reset();
            };
            
            if (userGuess !== computerGuess && noGuess == -1){
                guessRemain --;
                guessedLetters.push(userGuess);
            };
            // } else {
            //     guessRemain --;

            // }
            
            if (guessRemain === 0){
                    losses++;
                    reset();                    
            };  

           
            
            var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Remaining Guesses: " + guessRemain + "</p>"+
            "<p>User Guesses: " + guessedLetters  + "</p>";
            
  
          // Set the inner HTML contents of the #game div to our html string
          document.querySelector("#game").innerHTML = html;
        
        //document.getElementById('game').innerHTML = register();
        };