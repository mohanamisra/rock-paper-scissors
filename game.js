let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

// let choiceDisplay = document.getElementById("choice-display");
// let resultDisplay = document.getElementById("result-display");
// let finalResult = document.getElementById("final-display");
let displayContainer = document.getElementsByClassName("displays")[0];
let computerChoiceDisplay = document.getElementsByClassName("computerChoice")[0];

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

function displayResults(winner){
    if(winner == 0)
        finalResult.innerText = "IT IS A DRAW!";
    else{
        finalResult.innerText = winner + " WON!";
    }
    let resetButton = document.createElement('button');
    resetButton.id = "play-again";
    resetButton.innerText = "Play Again?";
    displayContainer.insertBefore(resetButton, dummyDiv);

    resetButton.addEventListener('click', reset);

    function reset(){
        playerScore = 0;
        computerScore = 0;
        choiceDisplay.innerText = "Choices, choices... so many choices";
        resultDisplay.innerText = "Your score: " + playerScore + ", while Computer's score: " + computerScore;
        resetButton.style.display = "none";
    }
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
    let winner = "";

    playRound(playerSelection, computerSelection);
    // choiceDisplay.innerText = "You chose: " + playerSelection + ", while computer chose: " + computerSelection;

    let result = playRound(playerSelection, computerSelection);

    if(result == "player wins"){
        playerScore++;
        displayContainer.innerText = "You win this round!";
    }
    else if(result == "computer wins"){
        computerScore++;
        displayContainer.innerText = "Ol' Bloody wins the round!";
    }
    else if(result == "draw"){
        displayContainer.innerText = "Round ends in draw!";
    }

    resultDisplay.innerText = "Your score: " + playerScore + ", while Computer's score: " + computerScore;

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            winner = "PLAYER";
            displayResults(winner);
        }
        else if(playerScore < computerScore){
            winner = "COMPUTER";
            displayResults(winner);
        }
        else if(playerScore == computerScore){
            winner = 0;
            displayResults(winner);
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