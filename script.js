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
//    for (i = 0; i < 5; i++) {
//         console.log(playRound());
//     };
//     if (userScore > computerScore){
//         return `You Won!\nuser score: ${userScore}\ncomputer score: ${computerScore}`;
//     } else if (userScore == computerScore){
//         return `It's an ultimate Tie!!!\nuser score: ${userScore}\ncomputer score: ${computerScore}\nThe TIE BREAKER Round: ` + tieBreaker();
//     } else {
//         return `You Lose!\nuser score: ${userScore}\ncomputer score: ${computerScore}`;
//     };
// };

//play an additional round until a winner is decided incase of no clear winner after 5 rounds...
// function tieBreaker(){
//    do {
//         playRound();
//     } while (userScore === computerScore);
//     return `\nuser score: ${userScore}\ncomputer score: ${computerScore}\nThe Ultimate Winner is... ${(userScore > computerScore) ? "The Player!" : "Computer!"}`;
// };

//output the results to console
console.log(playRound());
