const gameBoard = [];
const cell = document.querySelectorAll('.cell')
const firstPlayer = 'o'
const secondPlayer = 'x'

let currentPlayer;
let turn = true;

function handleClick(e) {
    const id = e.target.id;
    if (!gameBoard[id]) {
        gameBoard[id] = firstPlayer;
        if (turn === true) {
            currentPlayer = firstPlayer;
            e.target.innerText = currentPlayer;
            
        } else if (turn === false) {
            currentPlayer = secondPlayer;
            gameBoard[id] = secondPlayer
            e.target.innerText = currentPlayer; 
            
        }
        turn = !turn;
        console.log(gameBoard)
    }
}

// When cells are clicked run this function //
    cell.forEach((box1) => {
        box1.addEventListener('click', handleClick)
    })

function checkWinner() {
    if (gameBoard[2] === firstPlayer) {
        alert('its same')
    }
}