game() ;

// selects the restart button
const restartButton = document.querySelector('#restart') ;

// restart game upon clicking restart button
restartButton.addEventListener('click', () => {

    game() ;

}) ;


function game() {

    // selects the game container
    const gameBox = document.querySelector('#game-container') ;


    // selects the game text container
    const gameTextContainer = document.querySelector('.game-text-container') ;
    
    // creates text for round number
    let roundCount = 1 ;

    const roundNumber = document.querySelector('#round-number') ;
    roundNumber.textContent = `Round ${roundCount}` ;
    

    // creates score text
    let playerScore = 0 ;
    let computerScore = 0 ;
        
    const scoreText = document.querySelector('#score-text') ;
    scoreText.textContent = getScoreText(playerScore, computerScore) ;


    // add state text and its initial text
    const stateText = document.querySelector('#state-text') ;
    stateText.textContent = "Waiting on your play!"

    let gameState = "" ;
    let computerChoice = "" ;
    let playerChoice = "" ;

    // selects rock, scissors, paper
    const optionGroup = document.querySelectorAll(
        "button#rock, button#scissors, button#paper"
    ) ;
            
    // add event listeners for rock, scissors, paper => get player's choice
    optionGroup.forEach((button) => {
        button.addEventListener('click', function (clickEvent) {
            // pass player's choice
            playerChoice = clickEvent.target.id ;
            
            // get computer's choice
            computerChoice = getComputerChoice() ;

            // evaluate game's state (based on player and computer's choice)
            gameState = getState(playerChoice, computerChoice) ;

            // update new text of game's state
            stateText.textContent = getStateText(playerChoice, computerChoice, gameState) ;

            // update match score 
            if (gameState === "win") {
                playerScore += 1 ;
            }   else if (gameState === "lose") {
                computerScore += 1 ;
            }

            // update score on display
            scoreText.textContent = getScoreText(playerScore, computerScore, optionGroup) ;

            // update round number
            roundCount += 1 ;
            roundNumber.textContent = `Round ${roundCount}`

        })
    }) ;
    
}


function getScoreText(playerScore, computerScore, optionGroup) {
    
    let scoreText = "" ;

    scoreText = `Your score against the computer is ${playerScore} - ${computerScore}`

    if ((playerScore == 5) || (computerScore == 5)) {
       
        getEndText(playerScore, computerScore) ;

    }

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

    let stateText = "" ;

    if (gameState === "draw") {
        stateText = "It's a draw!" ;
    } else if (gameState === "lose") {
        stateText = `You lost! Your ${playerChoice} didn't beat the computer's ${computerChoice}...` ;
    } else if (gameState === "win") {
        stateText = `You won! Your ${playerChoice} has beaten the computer's ${computerChoice}!`
    }

    return stateText ;

}


function getEndText(playerScore, computerScore) {

    const endText = document.querySelector('#final-score') ;

    if (playerScore > computerScore) {
        endText.textContent = `You've won by ${playerScore} - ${computerScore}! The restart button's down there!` ;
    } else {
        endText.textContent = `You've lost by ${playerScore} - ${computerScore}... The restart button's down there, by the way.` ;
    }

}


function getComputerChoice() {
 
    let choice = ["rock", "scissors", "paper"] ;
    let choiceIndex = Math.floor(Math.random() * 3) ;

    return choice[choiceIndex] ;

}