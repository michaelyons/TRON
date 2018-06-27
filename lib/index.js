var GamePiece = require('./GamePiece.js');

var Car = require('./Car.js');
// var Trail = require('./Trail.js');

var player1Car = new Car(x, y, 10, 10, 'rgb(200, 0, 0)', 1);
var player2Car = new Car(300, 50, 10, 10, 'rgb(0, 200, 0)', -1);

player1Car.x += player1car.dx
player2Car.y += player2car.dy


// context);
var cars = [player1Car, player2car]
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 0, 1)";
context.fillRect(50, 50, 10, 10);  // x, y, width, height

var firstBlock = new GamePiece(50, 50, 10, 10, 'rgb(200, 0, 0)');
var secondBlock = new GamePiece(155, 50, 10, 10, 'rgb(0, 200, 0)');
var isGameover = false;
var blocks = [firstBlock, secondBlock];

canvas.addEventListener('click', function (event) {
  var block3 = new GamePiece(event.layerX, event.layerY, 10, 10, 'rgb(200, 0, 0)', 1);
  blocks.push(block3);
});

function animate() {
  blocks.forEach(function (block, i) {
    block.draw(context);
    block.move();

    blocks.forEach(function (block2, j) {
      if (i !== j && block.isCollidingWith(block2)) {
        block.dx = 0;
        block2.dx = 0;
        isGameover = true;
      }   
    })
  });
}

function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (isGameover) {
    alert('FUCK YOU')
  } else {
    animate();
  }
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

canvas.addEventListener('click', function (event) {
  var thirdBlock = new GamePiece(event.layerX, event.layerY, 10, 10, 'rgb(50, 100, 0)', -1);
  blocks.push(thirdBlock);
});