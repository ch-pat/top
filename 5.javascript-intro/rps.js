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

function determineWinner(event) {
    let log = document.querySelector("#log");
    let playerSelection = event.target.textContent.toLowerCase();
    let computerSelection = computerPlay().toLowerCase();
    let choices = ["rock", "paper", "scissors"];
    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);
    let playerScore = document.querySelector("#you");
    let computerScore = document.querySelector("#computer");
    let currentPlayerScore = parseFloat(playerScore.textContent);
    let currentComputerScore = parseFloat(computerScore.textContent);
    if ((playerIndex + 3 - 1) % 3 == computerIndex) {
        log.textContent = `You Win! ${choices[playerIndex]} beats ${choices[computerIndex]}.`
        playerScore.textContent = currentPlayerScore + 1;
        concludeGame();
    }
    else if ((computerIndex + 3 - 1) % 3 == playerIndex) {
        log.textContent = `You Lose! ${choices[computerIndex]} beats ${choices[playerIndex]}.`
        computerScore.textContent = currentComputerScore + 1;
        concludeGame();
    }
    else {
        log.textContent = `Draw! You chose ${playerSelection}, computer chose ${computerSelection}.`
    }
}

function concludeGame() {
    let playerScore = document.querySelector("#you");
    let computerScore = document.querySelector("#computer");
    let currentPlayerScore = parseFloat(playerScore.textContent);
    let currentComputerScore = parseFloat(computerScore.textContent);
    let game = document.querySelector(".game");
    let buttons = document.querySelector(".buttons");
    let rockBtn = document.querySelector("#rock");
    let paperBtn = document.querySelector("#paper");
    let scissorsBtn = document.querySelector("#scissors");
    let log = document.querySelector("#log");
    let welcome = document.querySelector("#welcome");
    let tryAgain = document.createElement("button");
    tryAgain.setAttribute("id", "try-again");
    tryAgain.textContent = "Play again.";
    tryAgain.addEventListener('click', setupGame);

    if (currentPlayerScore == 5) {
        buttons.removeChild(rockBtn);
        buttons.removeChild(paperBtn);
        buttons.removeChild(scissorsBtn);
        game.removeChild(log);
        welcome.textContent = "YOU WIN BIG TIME!";
        game.appendChild(tryAgain);
    }
    else if (currentComputerScore == 5) {
        buttons.removeChild(rockBtn);
        buttons.removeChild(paperBtn);
        buttons.removeChild(scissorsBtn);
        game.removeChild(log);
        welcome.textContent = "You lost... You bring shame to your family.";
        game.appendChild(tryAgain);

    }
}

function setupGame() {
    let welcome = document.querySelector("#welcome");
    welcome.textContent = "Welcome to Rock, Paper, Scissors! Make your choice.";
    let game = document.querySelector(".game");
    let tryAgain = document.querySelector("#try-again");
    if (tryAgain) {
        game.removeChild(tryAgain);
    }

    let buttonsDiv = document.querySelector(".buttons");
    let rockBtn = document.createElement("button");
    rockBtn.setAttribute("id", "rock");
    rockBtn.textContent = "Rock";
    let paperBtn = document.createElement("button");
    paperBtn.setAttribute("id", "paper");
    paperBtn.textContent = "Paper";
    let scissorsBtn = document.createElement("button");
    scissorsBtn.setAttribute("id", "scissors");
    scissorsBtn.textContent = "Scissors";

    buttonsDiv.appendChild(rockBtn);
    buttonsDiv.appendChild(paperBtn);
    buttonsDiv.appendChild(scissorsBtn);

    let buttons = document.querySelectorAll("button");
    let log = document.querySelector("#log");
    let tally = document.querySelector("#tally");
    if (!log) {
        console.log("ciaone")
        log = document.createElement("p");
        log.setAttribute("id", "log");
        game.insertBefore(log, tally);
    }
    log = document.querySelector("#log");
    let you = document.querySelector("#you");
    you.textContent = 0;
    let computer = document.querySelector("#computer");
    computer.textContent = 0;
    log.textContent = "Waiting for input...";
    for (let b of buttons) {
        b.addEventListener('click', determineWinner);
    }
}

setupGame()

// function game() {
//     let choices = ["rock", "paper", "scissors"]
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Make your choice! (Accepted inputs are: rock | paper | scissors)")
//         if (playerSelection == null) {
//             console.log("No selection! Bye bye.")
//             break
//         }
//         if (!choices.includes(playerSelection.toLowerCase())) {
//             console.log("Bad input, try again!")
//             i--
//             continue
//         }
//         let computerSelection = computerPlay()
//         console.log(determineWinner(playerSelection, computerSelection))
//     }
// }

