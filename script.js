/* variables */
let playerScore = 0;
let computerScore = 0;
let tiesCounter = 0;
let gameWinner = "";


/* prompt */


/* function for random choice made by the computer */

function getComputerChoice() {
    let array1 = ["rock", "paper", "scissors"]
    let possibleChoice = array1[Math.floor(Math.random() * array1.length)]
    return possibleChoice;
         
}

function playOneRound(playerSelection, computerSelection) {

    let tie = `It's a tie! You have chosen ${playerSelection} and the computer have chosen ${computerSelection}.`;
    let playerWin = `You win! Your ${playerSelection} beats the computer's ${computerSelection}.`;
    let computerWin = `You lose! The computer's ${computerSelection} beats your ${playerSelection}.`;

    if (playerSelection === computerSelection) {
        console.log(tie)
        tiesCounter++
        return tie;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(playerWin)
        playerScore++
        return playerWin;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(computerWin)
        computerScore++
         return computerWin;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(playerWin)
        playerScore++
        return playerWin;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(computerWin)
        computerScore++
        return computerWin
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(playerWin)
        playerScore++
        return playerWin;  
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(computerWin)
        computerScore++
        return computerWin;
    }


}


function game () {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = getComputerChoice();

        })
        
    });
}

game();


/* DOM */
const container = document.querySelector('#container');
const resultDiv = document.createElement('div');
resultDiv.classList.add('result-div');
resultDiv.style.color = "black";
container.appendChild(resultDiv);



