let boy = document.getElementById("boy");
let robot = document.getElementById("robot");
let boyAttack = document.getElementById("boy-attack");
let robotAttack = document.getElementById("robot-attack");

let info = document.getElementById("info");
let result = document.getElementById("result");

let rock = document.getElementById("rockbutton");
let paper = document.getElementById("paperbutton");
let scissors = document.getElementById("scissorsbutton");

let rockComputer = document.getElementById("rock-computer");
let paperComputer = document.getElementById("paper-computer");
let scissorsComputer = document.getElementById("scissors-computer");

let yourScore = document.getElementById("your-score");
let roboScore = document.getElementById("computer-score");
    

rock.addEventListener("click", () => {
    gameFlow("rock"); 
    clicked(rock);
    attackPose();
});
paper.addEventListener("click", () => {
    gameFlow("paper");
    clicked(paper);
    attackPose();
});
scissors.addEventListener("click", () => {
    gameFlow("scissors");
    clicked(scissors);
    attackPose();
});

let playerScore = 0;
let computerScore = 0;

function gamePlay(playerChoice) {
    let computerChoice = computerGenerate();
    if(computerChoice == "rock") {
        rockComputer.classList.add("clicked");
        setTimeout(() => {
            rockComputer.classList.remove("clicked");
        }, 1000);
    }
    else if(computerChoice == "paper") {
        paperComputer.classList.add("clicked");
        setTimeout(() => {
            paperComputer.classList.remove("clicked");
        }, 1000);
    }
    else if(computerChoice == "scissors") {
        scissorsComputer.classList.add("clicked");
        setTimeout(() => {
                scissorsComputer.classList.remove("clicked");
            }, 1000);
    }

    if(playerChoice == computerChoice) {
        info.textContent = "Robo chose " + computerChoice + " too!";
    }
    else if((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        info.textContent = "Yay! Robo chose " + computerChoice;
        playerScore++;
        yourScore.textContent = "You : " + playerScore;
    }
    else if((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock")) {
        info.textContent = "Uh oh... Robo chose " + computerChoice;
        computerScore++;
        roboScore.textContent = "Robo : " + computerScore;
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
    gamePlay(playerChoice);
    if((playerScore == 5 && computerScore < 5) || (computerScore == 5 && playerScore < 5)) {
        if(computerScore<playerScore) {
        result.textContent = "YAY! YOU WON!";
        result.style.fontWeight = "bold";
        info.textContent = "Wanna rematch?";
        yourScore.textContent = "You : 0";
        roboScore.textContent = "Robo : 0";
        playerScore = 0;
        computerScore = 0;
        setTimeout(() => {
            result.textContent = "Rock, Paper, Scissors";
        }, 5000);
        }
        else if(playerScore<computerScore) {
        result.textContent = "OH NO! YOU LOST!";
        result.style.fontWeight = "bold";
        info.textContent = "Wanna rematch?";
        playerScore = 0;
        computerScore = 0;
        yourScore.textContent = "You : 0";
        roboScore.textContent = "Robo : 0";
        
        setTimeout(() => {
            result.textContent = "Rock, Paper, Scissors";
        }, 5000);
    }
}
}

function clicked(clickedClass) {
    clickedClass.classList.add("clicked");
    setTimeout(() => clickedClass.classList.remove("clicked"), 1000);
}

function attackPose() {
    boy.classList.add("make-invisible");
    boyAttack.classList.add("make-visible");
    robot.classList.add("make-invisible");
    robotAttack.classList.add("make-visible");
    setTimeout(() => {
        boy.classList.remove("make-invisible");
        boyAttack.classList.remove("make-visible");
        robot.classList.remove("make-invisible");
        robotAttack.classList.remove("make-visible");
    }, 2000);
}

// function gameOver() {
//     playerScore = 0;
//     computerScore = 0;
// }

console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(window.innerWidth);