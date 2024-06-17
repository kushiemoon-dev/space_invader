//board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns; // 32 * 16
let boardHeight = tileSize * rows; // 32 * 16
let context;

//ship
let shipWidth = tileSize*2;
let shipHeight = tileSize;
let shipX = tileSize * columns/2 - tileSize;
let shipY = tileSize * rows - tileSize*2;

let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

let shipImg ;
let shipVelocityX = tileSize;

window.onload = function() {
    board = document.getElementById('board');
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext('2d'); // use to draw on the canvas

    // context.fillStyle = 'green';
    // context.fillRect(ship.x,ship.y, shipWidth, shipHeight);

    shipImg = new Image();
    shipImg.src = './ship.png';
    shipImg.onload = function() {
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }
    requestAnimationFrame(update);
    document.addEventListener('keydown', moveShip);
};

function update() {
    requestAnimationFrame(update);
    context.clearRect(0,0,boardWidth, boardHeight);
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
}

function moveShip(e) {
    if (e.code == 'ArrowLeft' && ship.x - shipVelocityX >= 0) {
        ship.x -= shipVelocityX;
    }
    else if (e.code == 'ArrowRight' && ship.x + shipVelocityX + ship.width <= board.width) {
        ship.x += shipVelocityX;
    }

}
