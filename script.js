// My own way of Rock, Paper, Scissors

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const para = document.createElement("p");
const winner = document.createElement("h3");
const compScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");

let computerPoints = 0;
let playerPoints = 0;
let computerChoice;
let playerChoice;

// Getting computer random choice
function computerPlay() {
  const computerArr = ["rock", "paper", "scissors"];
  return computerArr[Math.floor(Math.random() * computerArr.length)];
}

// Game logic
function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection === "rock" && playerChoice === "scissors") ||
    (computerSelection === "paper" && playerChoice === "rock") ||
    (computerSelection === "scissors" && playerChoice === "paper")
  ) {
    para.textContent = `Computer won: ${computerSelection} beats ${playerChoice}`;
    results.append(para);

    computerPoints++;
    compScore.innerHTML = `Computer points: ${computerPoints}`;

    if (computerPoints === 5) {
      winner.innerHTML = "Computer WON";
      results.append(winner);
    }
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "rock")
  ) {
    para.textContent = `Player won: ${playerChoice} beats ${computerSelection}`;
    results.append(para);

    playerPoints++;
    playerScore.innerHTML = `Player points: ${playerPoints}`;

    if (playerPoints === 5) {
      winner.innerHTML = "You WON";
      results.append(winner);
    }
  } else {
    para.textContent = `Tie: ${playerChoice} does NOT beat ${computerSelection}`;
    results.append(para);
  }
}

// Callback function when button is clicked
function playing(e) {
  if (computerPoints === 5 || playerPoints === 5) {
    alert("Game finished, it was race to 5 😎");
    return;
  } else {
    playerChoice = e.target.className;
    computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
  }
}

// Event handler
buttons.forEach((button) => button.addEventListener("click", playing));
