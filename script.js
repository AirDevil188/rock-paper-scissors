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
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = getComputerChoice();
            gameText.textContent = playOneRound(playerSelection, computerSelection);
            playerRoundWinText.textContent = "Player total score: " + playerScore;
            computerRoundWinText.textContent = "Computer total score: " + computerScore;
            endGame();
        })
        
    });
}

game();


/* DOM */

// result-container //
const resultContainer = document.createElement('div');
resultContainer.classList.add('result-div');
resultContainer.setAttribute('style', 'display: flex; flexDirection: column;')
container.appendChild(resultContainer);

// game-text //
const gameText = document.createElement('p');
gameText.classList.add('game-text');
gameText.style.color = "black";
resultContainer.appendChild(gameText)

// player-win-score //

const playerRoundWinText = document.createElement('p');
playerRoundWinText.classList.add("player-win-text")
playerRoundWinText.style.color = "green";
resultContainer.appendChild(playerRoundWinText);

// computer-win-score //

const computerRoundWinText = document.createElement('p');
computerRoundWinText.classList.add("computer-win-text");
computerRoundWinText.style.color = "red";
resultContainer.appendChild(computerRoundWinText);

// game-win //

const gameWin = document.createElement('p');
gameWin.style.color = "orange";
resultContainer.appendChild(gameWin);


function endGame() {
    if (playerScore === 5) {
        gameWinner = gameWin
        gameWin.textContent = "YOU WON!!"
    } else if (computerScore === 5) {
        gameWinner = gameWin;
        gameWin.textContent = "You lost, computer won the game!"

    }
}

