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


function playRound(playerSelection, computerSelection) {
    playselection = playerSelection.toLowerCase()
    if (computerSelection=="Rock"){
        switch(playerSelection) {
            case "rock":
                return "The game is tied";
                break;
            case "paper":
                return "You win! Paper beats Rock";
                break;
            case "scissors":
                return "You lose! Rock beats Scissors";
                break;
        }
    }

    if (computerSelection=="Paper"){
        switch(playerSelection) {
            case "rock":
                return "You lose! Paper beats Rock";
                break;
            case "paper":
                return "The game is tied";
                break;
            case "scissors":
                return "You win! Scissors beats Paper";
                break;
        }
    }

    if (computerSelection=="Scissors"){
        switch(playerSelection) {
            case "rock":
                return "You win! Rock beats Scissors";
                break;
            case "paper":
                return "You lose! Scissors beats Paper";
                break;
            case "scissors":
                return "The game is tied";
                break;
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));