/* variables */
let playerScore = 0;
let computerScore = 0;
let tiesCounter = 0;


/* prompt */


/* function for random choice made by the computer */

function getComputerChoice() {
    let array1 = ["rock", "paper", "scissors"]
    let possibleChoice = array1[Math.floor(Math.random() * array1.length)]
    return possibleChoice;
         
}

function playOneRound(playerSelection, computerSelection) {

    let tie = `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
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


function game() {
    
    for ( let i = 0; i < 5; i++) {
        const playerSelection = prompt("What's your choice rock, paper, scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        playOneRound(playerSelection, computerSelection);
    
    }
        
    if (playerScore > computerScore) {
        alert(`You won! The final score is: You: ${playerScore}. Computer: ${computerScore}. Ties: ${tiesCounter}.`);
    } else if (playerScore < computerScore) {
        alert(`You lost! The final score is: You: ${playerScore}. Computer: ${computerScore}. Ties: ${tiesCounter}.`);
    } else {
        alert(`It's a tie! Final score is: You: ${playerScore}. Computer: ${computerScore}. Ties: ${tiesCounter}.`);
    }
}


game();

