var GamePiece = require('./GamePiece.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 0, 1)";
context.fillRect(50, 50, 10, 10);
var firstBike = new GamePiece(50, 50, 10, 10, 'rgb(0, 222, 254)');
var secondBike = new GamePiece(155, 50, 10, 10, 'rgb(209, 3, 0)');
var isGameover = false;
var trail = [firstBike, secondBike];

function animate() {
  trail.forEach(function (bike, i) {
    bike.draw(context);
    bike.move();
    trail.forEach(function (bike2, j) {
      if (i !== j && bike.isCollidingWith(bike2)) {
        bike.dx = 0;
        bike2.dx = 0;
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