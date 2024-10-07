// Define variables to store scores
let userScore = 0;
let computerScore = 0;

// Get references to HTML elements
const userChoiceImg = document.getElementById('user-choice-img');
const computerChoiceImg = document.getElementById('computer-choice-img');
const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

// Function to get a random computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        userScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

// Function to update images based on choices
function updateImages(userChoice, computerChoice) {
    // Set the image sources based on user and computer choices
    if (userChoice === 'rock') {
        userChoiceImg.src = 'rock.png';
    } else if (userChoice === 'paper') {
        userChoiceImg.src = 'ppr.png';
    } else if (userChoice === 'scissors') {
        userChoiceImg.src = 'scr.png';
    }

    if (computerChoice === 'rock') {
        computerChoiceImg.src = 'rock.png';
    } else if (computerChoice === 'paper') {
        computerChoiceImg.src = 'ppr.png';
    } else if (computerChoice === 'scissors') {
        computerChoiceImg.src = 'scr.png';
    }
}

// Function to update the game state
function playGame(userChoice) {
    const computerChoice = getComputerChoice();

    // Update the displayed images
    updateImages(userChoice, computerChoice);

    // Determine and display the result
    const result = determineWinner(userChoice, computerChoice);
    resultDisplay.textContent = result;

    // Update the scores
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

// Add event listeners to the buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

// Reset button to reset the game
document.getElementById('reset').addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userChoiceImg.src = '';
    computerChoiceImg.src = '';
    resultDisplay.textContent = 'Make a choice to start the game!';
    userScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
});
