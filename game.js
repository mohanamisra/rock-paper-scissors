let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

let choiceDisplay = document.getElementById("choice-display");
let resultDisplay = document.getElementById("result-display");
let finalResult = document.getElementById("final-display");
let playAgain = document.getElementById("play-again");

let buttons = document.getElementsByTagName('button');
let rock = buttons[0].addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    game(playerSelection, computerSelection);
});
let paper = buttons[1].addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    game(playerSelection, computerSelection);
});
let scissors = buttons[2].addEventListener('click', () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    game(playerSelection, computerSelection);
});

let resetButton = buttons[3].addEventListener('click', reset)

function reset(winner){
    if(winner == 0)
        finalResult.innerText = "IT IS A DRAW!";
    else{
        finalResult.innerText = winner + " WON!";
    }
    playAgain.innerText = "Play Again?";
    playerScore = 0;
    computerScore = 0;
}


function getComputerChoice(){
    let max = 3;
    let min = 1;
    let c = Math.floor(Math.random() * (max - min + 1) + min);

    //clearly, we can use the constants 1 and 3 in place of min and max above, but I kept them in variables to elaborate the working of Math.random().

    let choice = "";
    switch(c){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    let P = playerSelection;
    let C = computerSelection;

    if(P === C)
        return "draw";
    else if(P == "rock" && C == "scissors" || P == "paper" && C == "rock" || P == "scissors" && C == "paper")
        return "player wins";
    else
        return "computer wins";
}

function game(playerSelection, computerSelection){
    let winner = "";

    playRound(playerSelection, computerSelection);
    choiceDisplay.innerText = "You chose: " + playerSelection + ", while computer chose: " + computerSelection;

    let result = playRound(playerSelection, computerSelection);

    if(result == "player wins")
        playerScore++;
    else if(result == "computer wins")
        computerScore++;

    resultDisplay.innerText = "Your score: " + playerScore + ", while Computer's score: " + computerScore;

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            winner = "PLAYER";
            reset(winner);
        }
        else if(playerScore < computerScore){
            winner = "COMPUTER";
            reset(winner);
        }
        else if(playerScore == computerScore){
            winner = 0;
            reset(winner);
        }
    }
    // if(playerScore > computerScore)
    //     console.log("Player wins!");
    // else if(playerScore < computerScore)
    //     console.log("Computer wins!");
    // else
    //     console.log("It's a draw!");
}

// game();