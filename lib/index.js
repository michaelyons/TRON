var GamePiece = require('./GamePiece.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 0, 1)";
context.fillRect(50, 50, 10, 10);  // x, y, width, height
var firstBlock = new GamePiece(50, 50, 10, 10, 'rgb(200, 0, 0)');
var secondBlock = new GamePiece(155, 50, 10, 10, 'rgb(0, 200, 0)');
var isGameover = false;
var blocks = [firstBlock, secondBlock];

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