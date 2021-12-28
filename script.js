var gameBoard = [
    {
        box1:''
    }
]


var cell = document.querySelectorAll('.cell')




player1();

function player1 () {
    cell.forEach((box1) =>{
        box1.addEventListener('click', () => {
            box1.innerHTML = 'x'

            player2();
    })
})
}

function player2() {
cell.forEach((box2) => {
    box2.addEventListener('click', () => {
        box2.innerHTML = 'o'

        player1();
    })
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