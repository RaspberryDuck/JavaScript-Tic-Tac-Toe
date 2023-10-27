
// computer randomly chooses between rock, paper, or scissors
function getComputerChoice(){
    const gameChoices = ["ROCK", "PAPER", "SCISSORS"];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = gameChoices[randomNum];
    return computerChoice;
}


function playOneRound(computerChoice, playerChoice){

    // standardizes player choice input
    let playerChoiceUpperCase = playerChoice.toUpperCase();

    let roundScore;

    // if computer choice beats player choice, give point to computer
    if ( (computerChoice == "ROCK" && playerChoiceUpperCase == "SCISSORS") ||
         (computerChoice == "PAPER" && playerChoiceUpperCase == "ROCK") ||
         (computerChoice == "SCISSORS" && playerChoiceUpperCase == "PAPER")) {
            roundScore = 1;
            console.log("Computer chose " + computerChoice + " and you chose " + playerChoiceUpperCase +
            ". You lose! " + computerChoice + " beats " + playerChoiceUpperCase);
    }
    // else if computer choice and player choice tie, do nothing
    else if (computerChoice === playerChoiceUpperCase) {
        roundScore = 0;
        console.log("Computer chose " + computerChoice + " and you chose " + playerChoiceUpperCase + ". It's a tie!");
    }
    // else computer choice loses to player choice, take point away from computer
    else {
        roundScore = -1;
        console.log("Computer chose " + computerChoice + " and you chose " + playerChoiceUpperCase + ". You win!" + playerChoiceUpperCase + " beats " + computerChoice);
    }

    return roundScore;
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", console.log(""));

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", console.log(""));

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", console.log(""));