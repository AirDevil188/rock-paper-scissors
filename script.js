/* variables */
let playerScore = 0;
let computerScore = 0;
let tiesCounter = 0;
const buttons = document.querySelectorAll("button");




/* function for random choice made by the computer */

function getComputerChoice() {
    let rockPaperScissors = ["rock", "paper", "scissors"]
    let possibleChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    return possibleChoice;
         
}

// function for playing one round //

function playOneRound(playerSelection, computerSelection) {

    let tie = `It's a tie! Both of you selected ${playerSelection}.`;
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

// game function //

function game () {
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
resultContainer.style.flex = "flex-direction: column; justify-content: center; align-items: center;"
container.appendChild(resultContainer);

// game-text //
const gameText = document.createElement('p');
gameText.classList.add('game-text');
gameText.setAttribute('style','font-size: 3em;');
resultContainer.appendChild(gameText);

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
gameWin.setAttribute('style', 'text-align: center; color: orange;');
resultContainer.appendChild(gameWin);

// play-again-button //
const playAgainButton = document.createElement('button');

// game-end function //

function endGame() {
    if (playerScore === 5) {
        gameWin.textContent = "YOU WON!!";
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        playAgainButton.textContent = "Play Again!";
        playAgainButton.addEventListener('click', (reloadPage) => { 
            reloadPage = playAgainButton = location.reload();
        });
        resultContainer.appendChild(playAgainButton);

        


    } else if (computerScore === 5) {
        gameWin.textContent = "YOU LOST! Computer won the game!"
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        playAgainButton.textContent = "Play Again!";
        playAgainButton.addEventListener('click', (reloadPage) => { 
            reloadPage = playAgainButton = location.reload();
        });
        resultContainer.appendChild(playAgainButton);


    }
    
    
}