var gameBoard = [];
const cell = document.querySelectorAll('.cell')
const player_turn = document.querySelector('.player_turn')
var player_1 = new Player ('Player 1','o')
var player_2 = new Player ('Player 2','x')

function Player(user,selection) {
    this.user = user;
    this.selection = selection;
}

let currentPlayer;
let turn = true;

player_turn.innerText = "Player 1's turn"

function handleClick(e) {
    const id = e.target.id;
    if (!gameBoard[id]) {
        gameBoard[id] = player_1;
        if (turn === true) {
            currentPlayer = player_1;
            e.target.innerText = currentPlayer.selection;
            player_turn.innerText = "Player 2's turn"
            
        } else if (turn === false) {
            currentPlayer = player_2;
            gameBoard[id] = player_2;
            e.target.innerText = currentPlayer.selection;
            player_turn.innerText = "Player 1's turn"
            
        }
        turn = !turn;
        console.log(gameBoard)
        checkWinner()
        
    }
}
// restart game after win/tie 
function restart() {
    gameBoard = [];
    cell.forEach((box1) => {
     box1.innerHTML = '';
     turn = true;
     player_turn.innerText = "Player 1's turn"
 })
}

// When cells are clicked run this function //
    cell.forEach((box1) => {
        box1.addEventListener('click', handleClick)
    })


function checkWinner() {
    if (gameBoard[0] === currentPlayer &
         gameBoard[1] === currentPlayer &
         gameBoard[2] === currentPlayer) {
         alert(`${currentPlayer.user} wins!`)
         restart()
         } else if (gameBoard[0] === currentPlayer &
            gameBoard[3] === currentPlayer &
                gameBoard[6] === currentPlayer) {
                    alert(`${currentPlayer.user} wins!`)
                    restart()
                } else if (gameBoard[3] === currentPlayer &
                    gameBoard[4] === currentPlayer &
                    gameBoard[5] === currentPlayer) {
                        alert(`${currentPlayer.user} wins!`)
                        restart()
                    } else if (gameBoard[6] === currentPlayer &
                        gameBoard[7] === currentPlayer &
                        gameBoard[8] === currentPlayer) {
                            alert(`${currentPlayer.user} wins!`)
                            restart()
                        } else if (gameBoard[2] === currentPlayer &
                            gameBoard[5] === currentPlayer &
                            gameBoard[8] === currentPlayer) {
                                alert(`${currentPlayer.user} wins!`)
                                restart()
                            } else if (gameBoard[1] === currentPlayer &
                                gameBoard[4] === currentPlayer &
                                gameBoard[7] === currentPlayer) {
                                    alert(`${currentPlayer.user} wins!`)
                                    restart()
                                } else if (gameBoard[0] === currentPlayer &
                                    gameBoard[4] === currentPlayer &
                                    gameBoard[8] === currentPlayer) {
                                        alert(`${currentPlayer.user} wins!`)
                                        restart()
                                    } else if (gameBoard[2] === currentPlayer &
                                        gameBoard[4] === currentPlayer &
                                        gameBoard[6] === currentPlayer) {
                                            alert(`${currentPlayer.user} wins!`)
                                            restart()
                                        }
        }