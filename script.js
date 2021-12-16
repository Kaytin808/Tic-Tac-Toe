var cell = document.querySelectorAll('.cell')

cell.forEach((button) => {
    button.addEventListener('click', () => {
        button.innerHTML = 'x'
    })
})