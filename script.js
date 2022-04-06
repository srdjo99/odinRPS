// My own way of Rock, Paper, Scissors

function computerPlay() {
  const computerArr = ["rock", "paper", "scissors"];
  return computerArr[Math.floor(Math.random() * computerArr.length)];
}

function playRound(playerSelection, computerSelection) {
  // your code here!

  const playerChoice = playerSelection.toLowerCase();
  // console.log(playerChoice);
  if (
    (computerSelection === "rock" && playerChoice === "scissors") ||
    (computerSelection === "paper" && playerChoice === "rock") ||
    (computerSelection === "scissors" && playerChoice === "paper")
  ) {
    console.log(`Computer won: ${computerSelection} beats ${playerChoice}`);
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "rock")
  ) {
    console.log(`Player won: ${playerChoice} beats ${computerSelection}`);
  } else {
    console.log(`Tie: ${playerChoice} does NOT beat ${computerSelection}`);
  }
}

for (let i = 0; i < 5; i++) {
  // your code here!
  const playerSelection = prompt(
    "Enter: rock, paper or scissors!"
  ).toLowerCase();

  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}
