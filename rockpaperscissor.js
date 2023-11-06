const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice () {
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice () {
    var isChoiceInvalid = true;
    while (isChoiceInvalid) {
        playerSelection = prompt();
        if (choices.includes(playerSelection.toUpperCase())) {
            isChoiceInvalid = false;
            return playerSelection.toUpperCase();
        }
        else
            window.alert("Invalid choice. Enter again");       
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return "draw";
    else if (
        (playerSelection == choices[0] && computerSelection == choices[1]) ||
        (playerSelection == choices[1] && computerSelection == choices[2]) ||
        (playerSelection == choices[2] && computerSelection == choices[0]))
        return "Computer wins";
    else {
        return "Player wins";}
}

function game() {
    var numOfRounds = 5;
    var playerScore = 0;
    var computerScore  = 0;
    while (numOfRounds != 0) {
        var result = playRound(getPlayerChoice(),getComputerChoice());
        if (result == "Player wins")
            playerScore++;
        else if (result == "Computer wins")
            computerScore++;

        console.log(result);
        numOfRounds--;
    }

    console.log("Player score: " + playerScore + "\n"
                + "Computer score: " + computerScore 
    );
}

game();