var cell1 = document.querySelector('.cell1')
var cell2 = document.querySelector('.cell2')
var cell3 = document.querySelector('.cell3')
var cell4 = document.querySelector('.cell4')
var cell5 = document.querySelector('.cell5')
var cell6 = document.querySelector('.cell6')
var cell7 = document.querySelector('.cell7')
var cell8 = document.querySelector('.cell8')
var cell9 = document.querySelector('.cell9')



var gameBoard = [];




function playGame() {
cell1.addEventListener('click', () => {
    cell1.innerHTML = 'x';
    gameBoard.push('x')
    checkWin()
})
cell2.addEventListener('click', () => {
    cell2.innerHTML = 'x';
    gameBoard.push('x')
    checkWin()
})
cell3.addEventListener('click', () => {
    cell3.innerHTML = 'x';
    gameBoard.push('x')
    checkWin()
})
cell4.addEventListener('click', () => {
    cell4.innerHTML = 'x';
    gameBoard.push('x')
})
}

function checkWin() {
    if (cell1.innerHTML == 'x' && cell2.innerHTML == 'x' && cell3.innerHTML == 'x') {
        alert('you win!')
        cell1.innerHTML = ''
        cell2.innerHTML = ''
        cell3.innerHTML = ''
    }
}
playGame();
// const playerOne = (myName, age) => {
//     const sayHello = () => alert('Hello ' + myName + '!');
//     return { myName, age, sayHello };
// }

// const justin = playerOne('Justin', 26);
