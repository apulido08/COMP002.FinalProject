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

