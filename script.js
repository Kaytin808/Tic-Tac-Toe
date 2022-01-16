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
        checkWinner
        
    }
}

// When cells are clicked run this function //
    cell.forEach((box1) => {
        box1.addEventListener('click', handleClick)
    })


function checkWinner() {
    if (gameBoard[0] === currentPlayer &
         gameBoard[1] === currentPlayer &
         gameBoard[2] === currentPlayer) {
             if (currentPlayer == firstPlayer)
         alert(`${currentPlayer} wins!`)
         } else if (gameBoard[0] === currentPlayer &
            gameBoard[3] === currentPlayer &
                gameBoard[6] === currentPlayer) {
                    alert(`${currentPlayer} wins!`)
                } else if (gameBoard[3] === currentPlayer &
                    gameBoard[4] === currentPlayer &
                    gameBoard[5] === currentPlayer) {
                        alert(`${currentPlayer} wins!`)
                    } else if (gameBoard[6] === currentPlayer &
                        gameBoard[7] === currentPlayer &
                        gameBoard[8] === currentPlayer) {
                            alert(`${currentPlayer} wins!`)
                        } else if (gameBoard[2] === currentPlayer &
                            gameBoard[5] === currentPlayer &
                            gameBoard[8] === currentPlayer) {
                                alert(`${currentPlayer} wins!`)
                            } else if (gameBoard[1] === currentPlayer &
                                gameBoard[4] === currentPlayer &
                                gameBoard[7] === currentPlayer) {
                                    alert(`${currentPlayer} wins!`)
                                } else if (gameBoard[0] === currentPlayer &
                                    gameBoard[4] === currentPlayer &
                                    gameBoard[8] === currentPlayer) {
                                        alert(`${currentPlayer} wins!`)
                                    } else if (gameBoard[2] === currentPlayer &
                                        gameBoard[4] === currentPlayer &
                                        gameBoard[6] === currentPlayer) {
                                            alert(`${currentPlayer} wins!`)
                                        }
        }

        function restart() {
           var gameBoard = []
           cell.innerText = ''
        }