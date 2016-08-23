var letter = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];


var wins = 0;
var losses = 0;
var ties = 0;
var yourGuesses = [];
var guessesLeft = 10;
var alphaExp = /^[a-zA-Z]+$/;
var computerChoice = letter[Math.floor(Math.random() * letter.length)];
console.log(computerChoice);



document.onkeyup = function(event) {
        var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

        if (userChoice.match(alphaExp)) {
            //Your logice will be here.
        } else {
            alert("Please enter only letters");
        }
        
        yourGuesses.push(userChoice);
        document.getElementById("yourGuesses").innerHTML += " " + userChoice;

        if (userChoice === computerChoice) {
            wins++;
            alert("You win! Play again")
            var winDiv = document.getElementById("win");
            winDiv.innerHTML = "wins: " + wins;

        } else {
            losses++;
            var loseDiv = document.getElementById("losses")
            loseDiv.innerHTML = "losses: " + losses;
            --guessesLeft;
            var guessesLeftDiv = document.getElementById("guessesLeft")
            guessesLeftDiv.innerHTML = "Guesses Left: " + guessesLeft;
        }

        if (guessesLeft <= 0) {
            alert("You lose!");
        }


        //tried (a few times) to make an alert where if a user pressed a non-letter key
        //they would receive an alert


        /*var nonKey = function(event) {
            if (userChoice !== letter) {
                alert("xxx");*/
    }
    // }



function showToPage(userChoice) {
    document.querySelector(".showText").innerHTML = userChoice;
}