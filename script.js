const gameMoves = ["rock", "paper", "scissors"];
const gameMoveBtns = document.querySelectorAll(".gameMove");
const announceText = document.querySelector("#winnerAnnouncement");

//user clicked a button
gameMoveBtns.forEach((btn) => {
  btn.addEventListener("click", userClick);
});

//global scoped initial values
let userInput = "";
let computerScore = 0;
let userScore = 0;
let tieCount = 0;
let mostWins = 0;
let logText = "";
let roundCount = 0;

// Handling User input & playing a single round
function userClick() {
  userInput = this.dataset.move;
  roundCount++;
  game();
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
      tieCount++;
      winAnnounce(computerSelection, userSelection);
      announcementText = "It's a Tie!";
      logText = `both parties choose ${computerSelection}.`;
      break;
    case 1:
    case -2:
      userScore++;
      winAnnounce(userSelection, computerSelection);
      announcementText = "You Win!";
      logText = `${userSelection} beats ${computerSelection}.`;
      break;
    case -1:
    case 2:
      computerScore++;
      winAnnounce(computerSelection, userSelection);
      announcementText = "You Lose!";
      logText = `${computerSelection} beats ${userSelection}.`;
      break;
    default:
      logText = "uh ohh... something went wrong!";
  }
  winCount(userScore, computerScore);
  announceText.innerText = `Round ${roundCount}: ${announcementText}`;
  return `Round ${roundCount}: ${logText}\nScores: ${userScore} | ${tieCount} | ${computerScore}`;
}

function winCount(userScore, computerScore) {
  if (computerScore >= mostWins) mostWins = computerScore;
  if (userScore >= mostWins) mostWins = userScore;
}

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

//play 5 rounds!
function game() {
  if (mostWins == 5) {
    gameOver();
    return; //stop if already reached at count 5 in previous round
  }
  const scoreboard = document.querySelector(".scoreBoard>div");
  if (mostWins < 5) {
    const log = document.createElement("p");
    log.innerText = playRound();
    scoreboard.appendChild(log);
  }
}

//game over announcement
function gameOver() {
  const announcement = document.querySelector(".announcement>div");
  announceText.innerText = `user: ${userScore}\ncomputer: ${computerScore}`;
  announcement.classList.add("gameOver");
  announcement.innerText = "You Won!"; //default
  if (userScore < computerScore) {
    //Computer Won
    announcement.innerText = "You Lost!";
    announcement.classList.add("computerWon");
  }
}

//reload button
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => window.location.reload());
