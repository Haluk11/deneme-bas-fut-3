var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//food
var foodX;
var foodY;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows*blockSize;
    board.width = cols*blockSize;
    context = board.getContext("2d");

    foodRandom();
    document.addEventListener("keyup", changeDirection);
    update();
}
function update(){
    //grid
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    //snake 
    context.fillStyle="lime";
    context.fillRect (snakeX,snakeY,blockSize,blockSize);

    //food
    context.fillStyle="red";
    context.fillRect(foodX,foodY,blockSize,blockSize);
}
/// randomize food spawn location
function foodRandom(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * cols) * blockSize;
}
function changeDirection(){
    
}