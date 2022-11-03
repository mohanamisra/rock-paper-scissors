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
    let P = playerSelection.toLowerCase();
    let C = computerSelection;

    if(P === C)
        console.log("It's a draw!");
    else if(P == "rock" && C == "scissors" || P == "paper" && C == "rock" || P == "scissors" && C == "paper")
        console.log("Player wins!");
    else
        console.log("Computer wins!");
}

let playerSelection = prompt("What do you choose?");
let computerSelection = getComputerChoice();
console.log("You chose: " + playerSelection);
console.log("Computer chose: " + computerSelection);
playRound(playerSelection, computerSelection);