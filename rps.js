function getComputerChoice() {
 
    let choice = ["rock", "scissors", "paper"] ;
    let choiceIndex = Math.floor(Math.random() * 3) ;

    return choice[choiceIndex] ;
}

function getPlayerChoice() {
    
    let choice = ["rock", "scissors", "paper"] ;
    
    let playerChoice = prompt("Will it be rock, scissors, or paper?") ;
    playerChoice = playerChoice.toLowerCase().trim() ;


    while (choice.indexOf(playerChoice) == -1) {
        playerChoice = prompt("Maybe you typed it wrong? Rock, scissors, or paper - it's case-insensitive!")
        playerChoice = playerChoice.toLowerCase() ;
    }

    return playerChoice ;

}

function playRound() {
    
    let computerChoice = getComputerChoice() ;
    let playerChoice = getPlayerChoice() ;

    let winningState = {"rock": "scissors", "scissors": "paper", "paper": "rock"}

    let resultConsole = "" ;

    let gameState = "" ;

    if (computerChoice == playerChoice) {
        resultConsole = "It's a draw!" ;
        gameState = "draw" ;
    } else if (winningState[playerChoice] !== computerChoice) {
        resultConsole = `You lost! Your ${playerChoice} didn't beat the ${computerChoice}...` ;
        gameState = "lose" ;
    } else if (winningState[playerChoice] === computerChoice) {
        resultConsole = `You won! Your ${playerChoice} has beaten the ${computerChoice}!` ;
        gameState = "win" ;
    }

    console.log(resultConsole) ;

    return gameState ;

}

function game() {    
    let playerScore = 0 ;
    let computerScore = 0 ;

    let playing = "y" ;

    while (playing == "y") {
        
        console.log(`The current score is ${playerScore} - ${computerScore}!`)

        roundCount = 0 ;
        playerScore = 0 ;
        computerScore = 0 ;

        while (roundCount < 5) {
            let gameState = playRound() ;
            if (gameState === "win") {
                playerScore += 1 ;
            }
            else if (gameState === "lose") {
                computerScore += 1 ;
            }
            console.log(`Your score against the computer is ${playerScore} - ${computerScore}`)
            roundCount += 1 ;
        }

        if (playerScore == computerScore) {
            alert(`It's a draw! Your score to the computer's is ${playerScore} - ${computerScore}!`) ;
        } else if (playerScore > computerScore) {
            alert(`You've won by ${playerScore} - ${computerScore}!`) ;
        } else if (computerScore > playerScore) {
            alert(`You've lost by ${playerScore} - ${computerScore}!`) ; 
        }

        playing = prompt("Wanna keep playing? [y/n]").toLowerCase() ;
        if (["y", "n"].indexOf(playing) === -1) {
            playing = prompt("So... wanna keep playing? [y/n]").toLowerCase() ;
        }
    }

    if (playing == "n") {
        console.log("Alrighty, remember to click the button if you wanna play again!") ;
    }
}

const button = document.querySelector("button") ;

function startGame() {
    const startTrigger = document.querySelector("#start-game") ;
    alert("Hey hey!")
    game() ;
}

button.addEventListener("click", startGame) ;