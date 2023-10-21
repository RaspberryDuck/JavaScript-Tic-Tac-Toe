
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

// plays 5 rounds of rock paper scissors and declares winner
function playGame(){

    let playerInput;
    let totalScore = 0;

    for (let i = 0; i < 5; i ++){
        playerInput = prompt("Enter either Rock, Paper, or Scissors");
        // calculates total score based off each round result
        totalScore += playOneRound(getComputerChoice(), playerInput)
    }

    // positive total score means computer wins
    if (totalScore > 0){
        console.log("The winner is the computer. Better luck next time!");
    }
    // negative total score means player wins
    else if (totalScore < 0){
        console.log("You are the winner, congrats!");
    }
    // 0 total score means complete tie
    else {
        console.log("It's a tie, wow!");
    }
}

playGame();