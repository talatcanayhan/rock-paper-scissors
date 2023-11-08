const choices = ["ROCK", "PAPER", "SCISSORS"];

//Getting buttons from DOM//
const rockbtn = document.getElementById("rockButton");
const paperbtn = document.getElementById('paperButton');
const scissorsbtn = document.getElementById('scissorsButton');

var computerScore = 0;
var playerScore = 0;

function getComputerChoice () {
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function buttonClick(playerChoice) {
    playRound(playerChoice, getComputerChoice());
}
rockbtn.onclick = () => {buttonClick(choices[0]);};
paperbtn.onclick = () => {buttonClick(choices[1]);};
scissorsbtn.onclick = () => {buttonClick(choices[2]);};


function writeResult (playerSelection, computerSelection, roundWinner, endResult) {
    endResult = getResult();
    let result = document.createElement("p");

    if (endResult == "none") {
        result.innerHTML = "Player: " + playerSelection + "Computer: " + computerSelection + " " + roundWinner;
        document.getElementById("results").appendChild(result);
    }
    else {
        result.innerHTML = endResult;
        document.getElementById("results").appendChild(result);
    }
}

function getResult() {
    if (playerScore == 5)
        return "player wins the game";
    else if (computerScore == 5)
        return "computer wins the game";
    else
        return "none";
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        writeResult(playerSelection, computerSelection, "draw");
    }
    else if (
        (playerSelection == choices[0] && computerSelection == choices[1]) ||
        (playerSelection == choices[1] && computerSelection == choices[2]) ||
        (playerSelection == choices[2] && computerSelection == choices[0])) {
            computerScore++;
            writeResult(playerSelection, computerSelection, "Computer wins this round");
        }
    else {
        playerScore++;
        writeResult(playerSelection, computerSelection, "Player wins this round");
    }
}
