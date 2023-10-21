function ComputerChoice(){
    const gameChoices = ["ROCK", "PAPER", "SCISSORS"];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = gameChoices[randomNum];
    return computerChoice;
}

function OneRound(computerChoice, playerChoice){

    let playerChoiceUpperCase = playerChoice.toUpperCase();

    let computerChoiceValue;
    let playerChoiceValue;

    if (computerChoice == "ROCK"){
        computerChoiceValue = 1;
    }
    else if (computerChoice == "PAPER"){
        computerChoiceValue = 2;
    }
    else {
        computerChoiceValue = 3;
    }

    if (playerChoiceUpperCase == "ROCK") {
        playerChoiceValue = 1;
    }
    else if (playerChoiceUpperCase == "PAPER"){
        playerChoiceValue = 2;   
    }
    else if (playerChoiceUpperCase == "SCISSORS"){
        playerChoiceValue = 3;
    }
    else {
        console.log("Sorry, invalid value");
    }
}