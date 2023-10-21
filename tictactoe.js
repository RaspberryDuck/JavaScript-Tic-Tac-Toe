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
            console.log("Computer chose " + computerChoice + " and you chose " + playerChoiceUpperCase +
            ". You lose! " + computerChoice + " beats " + playerChoiceUpperCase);
    }
    else if (computerChoice === playerChoiceUpperCase) {
        computerRoundScore = 0;
        console.log("Computer chose " + computerChoice + " and you chose " + playerChoiceUpperCase + ". It's a tie!");
    }
    else {
        computerRoundScore = -1;
        console.log("Computer chose " + computerChoice + " and you chose " + playerChoiceUpperCase + ". You win!" + playerChoiceUpperCase + " beats " + computerChoice);
    }

    return computerRoundScore;
}


function Game(){

    let playerInput;
    let totalScore = 0;

    for (let i = 0; i < 5; i ++){
        playerInput = prompt("Enter either Rock, Paper, or Scissors");
        totalScore += OneRound(ComputerChoice(), playerInput)
    }

    if (totalScore > 0){
        console.log("The winner is the computer. Better luck next time!");
    }
    else if (totalScore < 0){
        console.log("You are the winner, congrats!");
    }
    else {
        console.log("It's a tie, wow!");
    }
}

Game();