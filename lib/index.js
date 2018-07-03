var Game = require('./Game.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
context.fillStyle = "rgba(0, 255, 1, 1)";
context.fillRect(30, 50, 1, 1);
var startGame = new Game();
let firstBike = startGame.player1;
let secondBike = startGame.player2;
var pressPlay = document.querySelector('.press-play');
var scoreUno = document.querySelector('.score1');
var scoreDos = document.querySelector('.score2');

pressPlay.addEventListener('click', gameLoop);
document.addEventListener('keydown', nxtLvlEvent);
document.addEventListener('keydown', keyboardEvent);

window.onload = function() {
  document.getElementById("my_audio").play();
}

function gameLoop() {
  if(!startGame.isGameOver && !startGame.stopped){
    startGame.animate(context);
    startGame.createTrail();
    startGame.trailCollision();
    startGame.wallCollision();
  requestAnimationFrame(gameLoop);
  } else { startGame.stopped = true;
    startGame.endGame();
  }
    scoreUno.innerHTML = startGame.player1Score;
    scoreDos.innerHTML = startGame.player2Score;
}

function keyboardEvent(e) {
  var aKey = !startGame.keyPressed
switch(aKey) {
  case e.keyCode === 65 && firstBike.dx !== 1 :
    firstBike.dx = -1;
    firstBike.dy = 0;
    break;
  case e.keyCode === 87 && firstBike.dy !== 1 :
    firstBike.dx = 0;
    firstBike.dy = -1;
    break;
  case e.keyCode === 68 && firstBike.dx !== -1 :
    firstBike.dx = 1;
    firstBike.dy = 0;
    break;
  case e.keyCode === 83 && firstBike.dy !== -1 :
    firstBike.dx = 0;
    firstBike.dy = 1;
    break;
  case e.keyCode === 37 && secondBike.dx !== 1 :
    secondBike.dx = -1;
    secondBike.dy = 0;
    break;
 case e.keyCode === 40 && secondBike.dy !== -1 :
    secondBike.dx = 0;
    secondBike.dy = 1;
    break;
  case e.keyCode === 39 && secondBike.dx !== -1 :
    secondBike.dx = 1;
    secondBike.dy = 0;
    break;
  case e.keyCode === 38 && secondBike.dy !== 1 :
    secondBike.dx = 0;
    secondBike.dy = -1;
    break;
  } 
}

function nxtLvlEvent (e) {
  if(e.keyCode === 32 && startGame.player1Score > 0 || e.keyCode === 32 && startGame.player2Score > 0) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    startGame.stopped = false;
    startGame.isGameOver = false;
    firstBike.x = 30;
    firstBike.y = 50;
    secondBike.x = 270;
    secondBike.y = 50;
    firstBike.dx = 1;
    secondBike.dx = -1
    startGame.keyPressed = false;
    startGame.trail1 = [];
    startGame.trail2 = [];
    startGame.dxv = 1;
    gameLoop();
  }
}