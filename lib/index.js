var GamePiece = require('./GamePiece.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 2, 1)";
context.fillRect(50, 50, 2, 1);
var firstBike = new GamePiece(50, 50, 2, 1, 'rgb(0, 222, 254)');
var secondBike = new GamePiece(250, 50, 2, 1, 'rgb(209, 3, 0)', -1);
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
  if (isGameover) {
    // alert('FUCK YOU')
  } else {
    animate();
  }
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

document.addEventListener('keydown', keyboardEvent);

function keyboardEvent(e) {
  if (e.keyCode === 37) {
      firstBike.dx = -1;
      firstBike.dy = 0;
} else if (e.keyCode === 38) {
    firstBike.dx = 0;
    firstBike.dy = -1;
}  else if (e.keyCode === 39) {
  firstBike.dx = 1;
  firstBike.dy = 0;
} else if (e.keyCode === 40) {
  firstBike.dx = 0;
  firstBike.dy = 1;
} else if (e.keyCode === 65) {
  secondBike.dx = -1;
  secondBike.dy = 0;
}  else if (e.keyCode === 83) {
  secondBike.dx = 0;
  secondBike.dy = 1;
}  else if (e.keyCode === 68) {
  secondBike.dx = 1;
  secondBike.dy = 0;
}  else if (e.keyCode === 87) {
  secondBike.dx = 0;
  secondBike.dy = -1;
} 
}