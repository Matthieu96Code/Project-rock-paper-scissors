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

function game() {

    let score = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Play").toLowerCase()
        const computerSelection = getComputerChoice()
        const play = playRound(playerSelection, computerSelection)
        alert(play)
        if (play.slice(0, 8) == "You win!") {
            score++;
        } else if (play.slice(0, 8) == "You lose") {
            score--
        }
    }

    if (score > 0) {
        return "winner"
    } else if (score < 0) {
        return "loser"
    } else {
        return "The total game is tied"
    }
}

/*const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/
/*console.log*/
alert(game())
