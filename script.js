const gameMoves = ["rock", "paper", "scissors"];
const gameMoveBtns = document.querySelectorAll(".gameMove");

//user clicked a button
gameMoveBtns.forEach((btn) => {
  btn.addEventListener("click", userClick);
});

let userInput = "";
let computerScore = 0;
let userScore = 0;
let mostWins = 0;

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
  let logText = "";
  switch (indexDiff) {
    case 0:
      logText = `It's a Tie!\nboth parties choose ${computerSelection}.`;
      break;
    case 1:
    case -2:
      userScore++;
      winCount(userScore, computerScore);
      logText = `You Won!\n${userSelection} beats ${computerSelection}.`;
      break;
    case -1:
    case 2:
      computerScore++;
      winCount(userScore, computerScore);
      logText = `You Lose!\n${computerSelection} beats ${userSelection}.`;
      break;
    default:
      logText = "uh ohh... something went wrong!";
  }
  winAnnounce(userSelection, computerSelection);
  return logText;
}

function winCount(userScore, computerScore) {
  if (computerScore >= mostWins) mostWins = computerScore;
  if (userScore >= mostWins) mostWins = userScore;
}

// function game(){
// 5 rounds
// };

//Winner Accouncement
function winnerIs(move) {
  const winnerMove = document.querySelector(".winnerMove");
  winnerMove.classList.remove("rock", "paper", "scissors"); //reset
  winnerMove.classList.add(move);
}

function loserIs(move) {
  const loserMove = document.querySelector(".loserMove");
  loserMove.classList.remove("rock", "paper", "scissors"); //reset
  loserMove.classList.add(move);
}

function isTie(winnerMove, loserMove) {
  const centerText = document.querySelector(".announcement>.container>span");
  centerText.innerText = "beats"; //reset
  if (winnerMove == loserMove) centerText.innerText = "Tie";
}

function winAnnounce(winnerMove, loserMove) {
  winnerIs(winnerMove);
  loserIs(loserMove);
  isTie(winnerMove, loserMove);
}
