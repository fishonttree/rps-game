// select the start-game button
const startButton = document.querySelector('#start-game') ;
startButton.addEventListener('click', game) ;


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












function createWelcomeText() {    

    // 1) selects game-container div
    const gameContainer = document.querySelector('.game-container') ;
    
    
    // 2) creates text container for the welcoming text
    const welcomeContainer = document.createElement('p') ;
    welcomeContainer.classList.toggle('text-container') ;

    // a) creates text inside container
    const welcomeText1 = document.createElement('div') ;
    welcomeText1.textContent = "Welcome, welcome! The UI may suck, but it keeps the score!"
    welcomeContainer.appendChild(welcomeText1) ;

    // b) now, what's a webpage without its creator lmao
    const welcomeText2 = document.createElement('div') ;
    welcomeText2.textContent = "A silly page created by yours truly, fishonttree"
    welcomeContainer.appendChild(welcomeText2) ;

    // c) append welcome text into game-container
    gameContainer.appendChild(welcomeContainer) ;
}


function createGameText() {

    // 1) create text container for the game's text
    const gameTextContainer = document.createElement('p') ;
    gameTextContainer.classList.toggle('game-text-container') ;

    // retrieve score and game state text
    getScoreText() ;
    getStateText() ;

}


function getScoreText(playerScore, computerScore) {
    
    const scoreText = document.createElement('div') ;
    welcomeText1.textContent = `The your score against the computer is
    ${playerScore} - ${computerScore}`
    .appendChild(welcomeText1) ;

}


function getStateText() {

}


function game() {

    createGameText() ;

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