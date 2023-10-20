const colors = ['red', 'blue', 'green'];

function addSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('color');
    document.body.appendChild(square);
}

setInterval () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const color = colors[randomNumber];
add.square(colors [randomNumber]);
}, 1000)