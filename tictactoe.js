function ComputerChoice(){
    const gameChoices = ["ROCK", "PAPER", "SCISSORS"];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = gameChoices[randomNum];
    return computerChoice;
}

function OneRound(computerChoice, playerChoice){

    let playerChoiceUpperCase = playerChoice.toUpperCase();
    let computerRoundScore;

    if ( (computerChoice == "ROCK" && playerChoiceUpperCase == "SCISSORS") ||
         (computerChoice == "PAPER" && playerChoiceUpperCase == "ROCK") ||
         (computerChoice == "SCISSORS" && playerChoiceUpperCase == "PAPER")) {
            computerRoundScore = 1;
            console.log("You lose!" + computerChoice + " beats " + playerChoiceUpperCase);
    }
    else if (computerChoice === playerChoiceUpperCase) {
        computerRoundScore = 0;
        console.log("It's a tie!");
    }
    else {
        computerRoundScore = -1;
        console.log("You win!" + playerChoiceUpperCase + " beats " + computerChoice);
    }

    return computerRoundScore;
}