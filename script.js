const gameMoves = ["rock", "paper", "scissors"];
const gameMoveBtns = document.querySelectorAll(".gameMove");

//user clicked a button
gameMoveBtns.forEach((btn) => {
  btn.addEventListener("click", userClick);
});

let userInput = "";
let computerScore = 0;
let userScore = 0;

// Handling User input & playing a single round
function userClick() {
  userInput = this.dataset.move;
  console.log(playRound());
}

// Random move generation for computer
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  return gameMoves[randomNumber];
}

// Play one round of rock paper scissors game
function playRound(
  userSelection = userInput,
  computerSelection = computerPlay()
) {
  // determine results based on selected move's position (index value) within "gameMoves" array
  const indexDiff =
    gameMoves.indexOf(userSelection) - gameMoves.indexOf(computerSelection);
  switch (indexDiff) {
    case 0:
      return `It's a Tie!\nboth parties choose ${computerSelection}.`;
      break;
    case 1:
    case -2:
      userScore++;
      return `You Won!\n${userSelection} beats ${computerSelection}.`;
      break;
    case -1:
    case 2:
      computerScore++;
      return `You Lose!\n${computerSelection} beats ${userSelection}.`;
      break;
    default:
      return "uh ohh... something went wrong!";
  }
}

// function game(){
// 5 rounds
// };
