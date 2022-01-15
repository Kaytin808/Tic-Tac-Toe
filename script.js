const gameBoard = [];
const cell = document.querySelectorAll('.cell')
const firstPlayer = 'o'
const secondPlayer = 'x'

let currentPlayer;
let turn = true;

function handleClick(e) {
    const id = e.target.id;
    if (!gameBoard[id]) {
        gameBoard[id] = currentPlayer;
        if (turn === true) {
            currentPlayer = firstPlayer;
            e.target.innerText = currentPlayer; 
        } else if (turn === false) {
            currentPlayer = secondPlayer;
            e.target.innerText = currentPlayer; 
        }
        turn = !turn;
    }
}


    cell.forEach((box1) =>{
        box1.addEventListener('click', handleClick)
    })