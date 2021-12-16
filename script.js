
var cell = document.querySelectorAll('.cell')

// Input player 1 'x' //
cell.forEach((button) => {
    button.addEventListener('click', () => {
        button.innerHTML = 'x'
    })
})

const playerOne = (myName, age) => {
    const sayHello = () => alert('Hello ' + myName + '!');
    return { myName, age, sayHello };
}

const justin = playerOne('Justin', 26);
