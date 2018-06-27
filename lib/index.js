var GamePiece = require('./GamePiece.js');
var Car = require('./Car.js');
// var Trail = require('./Trail.js');

var canvas = document.getElementById('game');
var c = canvas.getContext('2d');
var x = 50;
var y = 50;

var played = document.querySelector('.play')

played.addEventListener('click', disableEnable)

played.addEventListener('click', toggleClass)

function disableEnable() {
  // $(this).prop('disabled', true)
}

function toggleClass() {
  console.log('wuutt');
  canvas.toggleClass('before')
}

var player1Car = new Car(x, y, 10, 10, 'rgb(200, 0, 0)', 1);
var player2Car = new Car(300, 50, 10, 10, 'rgb(0, 200, 0)', -1);

player1Car.x += player1car.dx
player2Car.y += player2car.dy


// context);
var cars = [player1Car, player2car]

var isGameOver = false

function animate () {
  cars.forEach(function(car, i) {
    car.draw(c)
    car.move()
    cars.forEach(function (car2, j) {
      if (i !== j && block.isCollidingWith(block2)) {
        block.dx = 0
        block2.dx = 0
        isGameOver = true
      }
    })
  })
}

function gameLoop () {

  if (isGameOver) {
    
  } else {
    animate();
  }
  requestAnimationFrame(gameLoop)

  // if ( < canvas.height - 10) {
  //   // c.fillRect(canvas.width, canvas.height)
  //   y = y + 1;
  // }

}
requestAnimationFrame(gameLoop);

canvas.addEventListener('click', function (event) {
  var block3 = new GamePiece(event.layerX, event.layerY, 10, 10, 'rgb(200, 0, 0)', 1);
  blocks.push(block3);
});



  