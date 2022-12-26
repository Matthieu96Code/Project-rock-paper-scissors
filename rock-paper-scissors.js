function getComputerChoice() {
    let computerChoice = "";
    let choiceNumber = Math.floor(Math.random() * 3)
    if (choiceNumber == 0){
        computerChoice = "Rock";
    } else if (choiceNumber == 1) {
        computerChoice = "Paper";
    } else if (choiceNumber == 2) {
        computerChoice = "Scissors"
    }

    return computerChoice;
}