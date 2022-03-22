const gameMoves = ["rock", "paper", "scissors"];
//taking User input
let userInput = prompt("please enter your move: ", "Scissors");
let userSelection = userInput.toLowerCase();
//random move selection by computer
let randomNumber = Math.floor(Math.random()*3);
const computerSelection = gameMoves[randomNumber];

const gamePlay = () => {
    const indexDiff = gameMoves.indexOf(userSelection) - gameMoves.indexOf(computerSelection);
    switch (indexDiff) {
        case 0 :
            return `It's a Tie!\nboth parties choose ${computerSelection}.`;
            break;
        case 1:
        case -2:
            return `You Won!\n${userSelection} beats ${computerSelection}.`;
            break;
        case -1:
        case 2:
            return `You Lose!\n${computerSelection} beats ${userSelection}.`;
            break;
        default:
            return "uh ohh... something went wrong!";
    };
};

console.log(gamePlay());

