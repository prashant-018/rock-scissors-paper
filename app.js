let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Generate a random choice for the computer
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Handle a draw game
const drawGame = () => {
    console.log("The game is a draw.");
    msg.innerText = "It's a draw!";
};

// Show the winner
const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = "You win!";
        userScore++;
    } else {
        console.log("You lose.");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
        compScore++;
    }
};

// Play the game logic
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    // Generate computer's choice
    const compChoice = genComputerChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        // It's a draw
        drawGame();
    } else {
        // Determine winner
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // Rock beats scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats rock
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper"; // Scissors beat paper
        }

        showWinner(userWin, compChoice, userChoice);
    }

    // Update scores in the console (you can also update them in the DOM if needed)
    console.log(`Scores -> User: ${userScore}, Computer: ${compScore}`);
};

// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

