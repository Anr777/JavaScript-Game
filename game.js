const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvasSize;
let elementSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);


function startGame() {
    console.log({canvasSize, elementSize});
    game.font = elementSize + 'px Verdana';

    // Posicionando la bombilla a la izquierda.
    game.textAlign = 'left';
    
    const map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map( row => row.trim().split(''));
    console.log(mapRowCols);
    
    mapRowCols.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const emoji = emojis[col];
            const posX = elementSize * ( colIndex);
            const posY = elementSize * ( rowIndex + 1)
            console.log({ row, col, rowIndex, colIndex})
            game.fillText(emoji, posX, posY)
        })
    });
    
    // for (let row = 1; row <= 10; row++) {
    //     for (let col = 0; col < 10; col++) { 
    //         game.fillText(emojis[mapRowCols[row -1][col]], elementSize * col , elementSize * row);    
    //     }
    // }
    // game.fillRect(0, 50, 100, 100);
    // game.clearRect(0, 50, 50, 50);
    // game.font = '25px Verdana'
    // game.fillStyle='red';
    // game.context.textAlign='start | left | center | right |end';
    
    // game.fillText('Platzi', 20, 20)
    
    
}

function setCanvasSize() {

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementSize = (canvasSize / 10) - 1;
    startGame();
}