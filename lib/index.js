var GamePiece = require('./GamePiece.js');
var Game = require('./Game.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
// context.fillStyle = "rgba(0, 255, 1, 1)";
// context.fillRect(30, 50, 1, 1);
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
  // context.clearRect(0, 0, canvas.width, canvas.height);  
}

function gameLoop() {
  if (startGame.player1Score === 3) {
      startGame.isGameOver === true;
      // alert('Player 1 Wins');
      context.clearRect(0, 0, canvas.width, canvas.height);
      window.cancelAnimationFrame(gameLoop)
    } else if (startGame.player2Score === 3) { 
      startGame.isGameOver === true;
      // alert('Player 2 Wins');
      context.clearRect(0, 0, canvas.width, canvas.height);
      window.cancelAnimationFrame(gameLoop)
    } else {
      startGame.animate(context);
      startGame.trailCollision();
      startGame.wallCollision();
    }
    scoreUno.innerHTML = startGame.player1Score;
    scoreDos.innerHTML = startGame.player2Score;
  requestAnimationFrame(gameLoop);
  // tells the browser to perform an animation and takes in a callback function as an argument
}

function keyboardEvent(e) {
  if (e.keyCode === 65 && firstBike.dx !== 1 && startGame.keyPressed === false) {
    firstBike.dx = -1;
    firstBike.dy = 0;
  } else if (e.keyCode === 87 && firstBike.dy !== 1 && startGame.keyPressed === false) {
    firstBike.dx = 0;
    firstBike.dy = -1;
  }  else if (e.keyCode === 68 && firstBike.dx !== -1 && startGame.keyPressed === false) {
    firstBike.dx = 1;
    firstBike.dy = 0;
  } else if (e.keyCode === 83 && firstBike.dy !== -1 && startGame.keyPressed === false) {
    firstBike.dx = 0;
    firstBike.dy = 1;
  } else if (e.keyCode === 37 && secondBike.dx !== 1 && startGame.keyPressed === false) {
    secondBike.dx = -1;
    secondBike.dy = 0;
  }  else if (e.keyCode === 40 && secondBike.dy !== -1 && startGame.keyPressed === false) {
    secondBike.dx = 0;
    secondBike.dy = 1;
  }  else if (e.keyCode === 39 && secondBike.dx !== -1 && startGame.keyPressed === false) {
    secondBike.dx = 1;
    secondBike.dy = 0;
  }  else if (e.keyCode === 38 && secondBike.dy !== 1 && startGame.keyPressed === false) {
    secondBike.dx = 0;
    secondBike.dy = -1;
  } 
}

function nxtLvlEvent (e) {
  if(e.keyCode === 32 && startGame.player1Score > 0 || startGame.player2Score > 0) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    firstBike.x = 30;
    firstBike.y = 50;
    secondBike.x = 270;
    secondBike.y = 50;
    firstBike.dx = 1;
    secondBike.dx = -1
    //clear array of bikes
    //change keypressed = false
  }
}