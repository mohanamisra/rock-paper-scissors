// variables required for game-play
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

// variables required for UI functioning
let playerScoreDisplay = document.getElementById("your-score");
let roundResultDisplay = document.getElementById("round-result");
let computerScoreDisplay = document.getElementById("computer-score");

let playerButtons = document.getElementById("player-choices");
let computerChoiceDisplay = document.getElementsByClassName("computerChoice")[0];

//Game starts with click of a button
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

function reset(){
    playerButtons.innerHTML = "<a href = 'game.html' class = 'reset-link'>Again, arr?</a>"
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

    displayComputerChoice(choice);
    return choice;
}

function displayComputerChoice(choice){
    if(choice === "rock"){
        computerChoiceDisplay.innerHTML = '<img src="images/rockButton.png" width = 150rem" />';
    }
    else if(choice === "paper"){
        computerChoiceDisplay.innerHTML = '<img src="images/paperButton.png" width = 150rem" />';
    }
    else if(choice === "scissors"){
        computerChoiceDisplay.innerHTML = '<img src="images/scissorsButton.png" width = 150rem" />';
    }
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

    playRound(playerSelection, computerSelection);

    let result = playRound(playerSelection, computerSelection);

    if(result == "player wins"){
        playerScore++;
        roundResultDisplay.innerText = "You win this round!";
        playerScoreDisplay.innerText = "You: " + playerScore;
    }
    else if(result == "computer wins"){
        computerScore++;
        roundResultDisplay.innerText = "Ol' Bloody wins the round!";
        computerScoreDisplay.innerText = "Bloodfingers: " + computerScore;
    }
    else if(result == "draw"){
        roundResultDisplay.innerText = "Round ends in draw!";
    }

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            roundResultDisplay.innerText = "Ye win, ye brave hound!"
            reset();
        }
        else if(playerScore < computerScore){
            roundResultDisplay.innerText = "You lose. Now scurry."
            reset();
        }
        else if(playerScore == computerScore){
            roundResultDisplay.innerText = "Shiver me timbers! A draw?"
            reset();
        }
    }
}