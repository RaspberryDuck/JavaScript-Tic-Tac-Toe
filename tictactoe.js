function ComputerChoice(){
    const gameChoices = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = gameChoices[randomNum];
    return computerChoice;
}