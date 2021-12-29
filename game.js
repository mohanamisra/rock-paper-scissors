let boy = document.getElementById("boy");
let robot = document.getElementById("robot");
let images = document.body.getElementsByTagName("img");
let boyImage = images[3];
let robotImage = images[4];

let rock = document.getElementById("rockbutton");
let paper = document.getElementById("paperbutton");
let scissors = document.getElementById("scissorsbutton");

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

function clicked(clickedClass) {
    clickedClass.classList.add("clicked");
    setTimeout(() => clickedClass.classList.remove("clicked"), 5000);
}

function attackPose() {
  let boyAttack = document.createElement('img');
  boyAttack.src = './images/boyattack.png';
  let robotAttack = document.createElement('img');
  robotAttack.src = './images/robotattack.png';
  boy.replaceChild(boyAttack, boyImage);
  robot.replaceChild(robotAttack, robotImage);

  setTimeout(() => {
      boy.replaceChild(boyImage, boyAttack);
      robot.replaceChild(robotImage, robotAttack);
  }, 5000);
}