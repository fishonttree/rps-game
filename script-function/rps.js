// select the start-game button
const startButton = document.querySelector('#start-game') ;
startButton.addEventListener('click', game) ;


function game() {

    // selects the game container
    const gameBox = document.querySelector('#game-container') ;

    // creates game content inside container
    const gameContainer = document.createElement('div') ;
    gameContainer.classList.toggle('game-container') ;

    // creates game text container
    const gameTextContainer = document.createElement('p') ;
    gameContainer.appendChild(gameTextContainer) ;

    let playerScore = 0 ;
    let computerScore = 0 ;

    // creates game score container
    const scoreText = document.createElement('div') ;
    scoreText.textContent = getScoreText(playerScore, computerScore) ;
        
    // creates game state container
    const stateText = document.createElement('div');
    stateText.textContent = "Waiting on your play!"

    // creates player choice buttons
    const playerButtonContainer = createPlayerButton() ;
    gameContainer.appendChild(playerButtonContainer, stateText) ;

    // append game content into container
    gameBox.appendChild(gameContainer) ;

    let playing = "y" ;

    while (playing == "y") {

        roundCount = 1 ;
        playerScore = 0 ;
        computerScore = 0 ;

        while ((playerScore < 5) && (computerScore < 5)) {
            
            let computerChoice = "" ; 
            let playerChoice = "" ;
            let state = ""
            
            computerChoice = getComputerChoice() ;
            playerChoice = getPlayerChoice() ;

            state = getState(playerChoice, computerChoice) ;


            // create updateStateText
            stateText.textContent = updateStateText(playerChoice, computerChoice, state) ;

            if (gameState === "win") {
                playerScore += 1 ;
            }   else if (gameState === "lose") {
                computerScore += 1 ;
            }

            roundCount += 1 ;

        }

        let endText = getEndText(playerScore, computerScore) ;

        playing = prompt("Wanna keep playing? [y/n]").toLowerCase() ;
        if (["y", "n"].indexOf(playing) === -1) {
            playing = prompt("So... wanna keep playing? [y/n]").toLowerCase() ;
        }

    }

    if (playing == "n") {
        console.log("Alrighty, remember to click the button if you wanna play again!") ;
    }
}


function getScoreText(playerScore, computerScore) {
    
    const scoreText = document.createElement('div') ;
    scoreText.textContent = `The your score against the computer is
    ${playerScore} - ${computerScore}`

    return scoreText ;

}


function getState(playerChoice, computerChoice) {

    let winningState = {"rock": "scissors", "scissors": "paper", "paper": "rock"}

    let gameState = "" ;

    if (computerChoice == playerChoice) {
        gameState = "draw" ;
    } else if (winningState[playerChoice] !== computerChoice) {
        gameState = "lose" ;
    } else if (winningState[playerChoice] === computerChoice) {
        gameState = "win" ;
    }
    
    return gameState ;

}

function getStateText(playerChoice, computerChoice, gameState) {

    const stateText = document.createElement('div') ;

    if (gameState = "draw") {
        stateText.textContent = "It's a draw!" ;
    } else if (gameState = "lose") {
        stateText.textContent = `You lost! Your ${playerChoice} didn't beat the computer's ${computerChoice}...` ;
    } else if (gameState = "win") {
        stateText.textContent = `You won! Your ${playerChoice} has beaten the computer's ${computerChoice}!`
    }

    return stateText ;

}


function getEndText(playerScore, computerScore) {

    const endText = document.createElement('div') ;

    if (playerScore > computerScore) {
        endText.textContent = `You've won by ${playerScore} - ${computerScore}!` ;
    } else {
        endText.textContent = `You've lost by ${playerScore} - ${computerScore}...` ;
    }

    return endText ;

}


function getComputerChoice() {
 
    let choice = ["rock", "scissors", "paper"] ;
    let choiceIndex = Math.floor(Math.random() * 3) ;

    return choice[choiceIndex] ;
}


function getPlayerChoice() {
    
    let choice = ["rock", "scissors", "paper"] ;

    let playerChoice = ''

    return playerChoice ;

}


function createPlayerButton() {

    // create container for option buttons
    const optionContainer = document.createElement('div') ;
    optionContainer.classList.toggle("flex-test") ;

    const rockContainer = document.createElement('div') ;
    rockContainer.classList.toggle("subtext") ;
    const rockButton = document.createElement('button') ;
    rockButton.textContent = "rock" ;
    rockContainer.appendChild(rockButton) ;

    const scissorsContainer = document.createElement('div') ;
    scissorsContainer.classList.toggle("subtext") ;
    const scissorsButton = document.createElement('button') ;
    rockButton.textContent = "scissors" ;
    scissorsContainer.appendChild(scissorsButton) ;
    
    const paperContainer = document.createElement('div') ;
    paperContainer.classList.toggle("subtext") ;
    const paperButton = document.createElement('button') ;
    paperButton.textContent = "paper" ;
    paperContainer.appendChild(paperButton) ;

    optionContainer.appendChild(rockContainer) ;
    optionContainer.appendChild(scissorsButton) ;
    optionContainer.appendChild(paperButton) ;

    return optionContainer ;

}