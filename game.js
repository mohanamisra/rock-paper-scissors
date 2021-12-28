let rock = document.getElementById("rockbutton");
let paper = document.getElementById("paperbutton");
let scissors = document.getElementById("scissorsbutton");

rock.addEventListener("click", () => gameFlow("rock"));
paper.addEventListener("click", () => gameFlow("paper"));
scissors.addEventListener("click", () => gameFlow("scissors"));

let playerScore = 0;
let computerScore = 0;

function gamePlay(playerChoice) {
    let computerChoice = computerGenerate();
    
    if(playerChoice == computerChoice) {
        console.log("Computer chose = " + computerChoice);
        console.log("it's a tie");
    }
    else if((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        console.log("Computer chose = " + computerChoice);
        console.log("Player wins");
        playerScore++;
    }
    else if((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock")) {
        console.log("Computer chose = " + computerChoice);
        console.log("Player loses");
        computerScore++;
    }
}

function computerGenerate() {
    let rank = Math.floor(Math.random() * 3 + 1);
    let choice;
    switch(rank) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
        default:
            console.log("ERROR IN computerGenerate()");
    }
    return choice;
}

function gameFlow(playerChoice) {
    if(playerScore < 5 && computerScore < 5) {
        gamePlay(playerChoice);
    }
    else{
        if(computerScore<playerScore)
        alert("PLAYER WON");
        else if(playerScore<computerScore)
        alert("COMPUTER WON");
        else if(playerScore == computerScore)
        alert("IT'S A TIE");
    }
}