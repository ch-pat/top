function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"]
    let choice = choices[randomIntegerNumber(3)]
    return choice
}

function randomIntegerNumber(n) {
    // Returns a random integer between 0 and n (n not inclusive)
    let randomNumber = Math.floor(Math.random() * n)
    if (randomNumber == n) {
        randomNumber -= 1
    }
    return randomNumber
}

function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    let choices = ["rock", "paper", "scissors"]
    let playerIndex = choices.indexOf(playerSelection)
    let computerIndex = choices.indexOf(computerSelection)
    if ((playerIndex + 3 - 1) % 3 == computerIndex) {
        return `You Win! ${choices[playerIndex]} beats ${choices[computerIndex]}.`
    }
    else if ((computerIndex + 3 - 1) % 3 == playerIndex) {
        return `You Lose! ${choices[computerIndex]} beats ${choices[playerIndex]}.`
    }
    else {
        return `Draw! You chose ${playerSelection}, computer chose ${computerSelection}.`
    }
}

function game() {
    let choices = ["rock", "paper", "scissors"]
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make your choice! (Accepted inputs are: rock | paper | scissors)")
        if (playerSelection == null) {
            console.log("No selection! Bye bye.")
            break
        }
        if (!choices.includes(playerSelection.toLowerCase())) {
            console.log("Bad input, try again!")
            i--
            continue
        }
        let computerSelection = computerPlay()
        console.log(determineWinner(playerSelection, computerSelection))
    }
}

game()