const squares = document.querySelectorAll('.game-square'); // Select all game squares
const turnTracker = document.getElementById('turn'); // Select the element to display the current turn
const playAgainButton = document.getElementById('button-play-again'); // Select the "Play Again" button
const scoreboardX = document.getElementById('scoreboard-x'); // Select the X score element
const scoreboardO = document.getElementById('scoreboard-o'); // Select the O score element

let currentPlayer = 'X'; // Initialize the current player to X
let gameActive = true; // Flag to indicate if the game is active
let xScore = 0; // Initialize X's score
let oScore = 0; // Initialize O's score


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; // Array of winning combinations


function handleCellClick(cell) {
    // Check if the cell is empty and the game is active
    if (cell.textContent === '' && gameActive) {
        cell.textContent = currentPlayer; // Set the cell's content to the current player's symbol
        checkWin(); // Check for a win or tie
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch the current player
        turnTracker.textContent = currentPlayer; // Update the turn tracker
    }
}

function checkWin() {
    // Iterate through each winning condition
    winningConditions.forEach(condition => {
        const a = squares[condition[0]].textContent; // Get the content of the first square in the condition
        const b = squares[condition[1]].textContent; // Get the content of the second square in the condition
        const c = squares[condition[2]].textContent; // Get the content of the third square in the condition

        // Check if all three squares match and are not empty
        if (a === b && b === c && a !== '') {
            gameActive = false; // End the game
            if (a === 'X') {
                xScore++; // Increment X's score
                scoreboardX.textContent = xScore; // Update the X score display
            } else {
                oScore++; // Increment O's score
                scoreboardO.textContent = oScore; // Update the O score display
            }
            alert(`${a} wins!`); // Display a win message
        }
    });

    // Check for a tie
    if (!gameActive) {
        setTimeout(() => {
            resetBoard(); // Reset the board after a delay
        }, 1000);
    } else if (Array.from(squares).every(cell => cell.textContent !== '')) {
        gameActive = false;
        alert("It's a tie!");
        setTimeout(() => {
            resetBoard();
        }, 1000);
    }
}