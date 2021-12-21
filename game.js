/*
Read README.txt for a log.
*/

// following function computerPlay() randomly returns either rock, paper or scissors.

function computerPlay() {
    let generator = Math.floor(Math.random() * (3) + 1);
    switch (generator) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
        default:
            console.log("Error in computerPlay!");
            break;
    }
    return computerSelection;
}

// following function playRound() plays one round of rock, paper, scissors by taking two paramters (player's selection and computer's randomly generated selection), compares parameters as per the rules, and returns a win/lose message (viz. NOT THE FINAL MESSAGE to be printed).

function playRound(playerSelection, computerSelection) {

    // now I'm going to write the code for all possible cases where the player loses.

    if((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        return "computerwin";
    }

    //now I'm going to write the code for all possible cases where the player wins.

    else if((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        return "playerwin";
    }

    //now I'm going to write the code for a scenario where the computer and the player enter the same choice, i.e., there is a tie.

    else if(playerSelection == computerSelection) {
        return "tie";
    }
}

let playerScore = 0;
let computerScore = 0;

// following function game() enters the input of the user, transfers control to playRound() to actually play the round, AND THEN displays the win/lose message for *each round*, and keeps the score.

function game() {
    let userSelection = window.prompt("Enter rock or paper or scissors");
    let result = playRound(userSelection.toLowerCase(), computerPlay());
    if(result == "computerwin") {
        console.log("you lost this round.");
        computerScore += 1;
    }
    else if(result == "playerwin") {
        console.log("you won this round.");
        playerScore += 1;
    }
    else if(result == "tie") {
        console.log("you tied this round.");
        playerScore += 0;
        computerScore +=0;
    }
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
}

// we'll play the game 5 times.

for (i = 1; i <= 5; i++) {
    game();
}

//now we calculate the final results and then display the final win/lose message.

if(playerScore == computerScore) {
    console.log("Hmn...looks like a tie.")
}
else if(playerScore > computerScore) {
    console.log("Ayo player...YOU WON!");
}
else if(playerScore < computerScore) {
    console.log("Uh oh...YOU LOST!");
}