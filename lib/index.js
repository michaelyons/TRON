var GamePiece = require('./GamePiece.js');
var Game = require('./Game.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
context.fillStyle = "rgba(0, 255, 1, 1)";
context.fillRect(30, 50, 1, 1);
var startGame = new Game();
let firstBike = startGame.player1
let secondBike = startGame.player2
var pressPlay = document.querySelector('.press-play')
pressPlay.addEventListener('click', gameLoop);


// var x = document.getElementById('slice-audio');

// pressPlay.addEventListener('click', playSlice)

// function playSlice(e) { 
//   e.preventDefault()
//   playAudio(x); 
// } 

window.onload = function() {
  document.getElementById("my_audio").play();
  context.clearRect(0, 0, canvas.width, canvas.height);  
}

// function animate() {
//   firstBike.draw(context);
//   secondBike.draw(context)
//   firstBike.move();
//   secondBike.move();
  // trailArray[0].unshift({ x:firstBike.x , y:firstBike.y, height:firstBike.height, width:firstBike.width })
  // trailArray[1].unshift({ x:secondBike.x , y:secondBike.y, height:secondBike.height, width:secondBike.width })

// trailArray[1].forEach(trail => {
//   if(firstBike.isCollidingWith(trail)) {
//     trail.dx = 0;
//     isGameOver = true;
//   }
// })

// trailArray[0].forEach(trail => {
//   if(secondBike.isCollidingWith(trail)) {
//     trail.dx = 0;
//     isGameOver = true;
//   }
// })

//   leadBike.forEach((bike1, i) => {
//     leadBike.forEach(function (bike2, j) {
//       if (i !== j && bike1.isCollidingWith(bike2)) {
//         bike1.dx = 0;
//         bike2.dx = 0;
//         isGameOver = true;
//       }  
//     })
//   })

  // function wallCollision() {
  //   if (firstBike.x > canvas.width || firstBike.x < 0) {
  //     firstBike.dx = 0;
  //     isGameOver = true;
  //   } 
  //   if (firstBike.y > canvas.height || firstBike.y < 0) {
  //     firstBike.dy = 0;
  //     isGameOver = true;
  //   }
  //   if (secondBike.x > canvas.width || secondBike.x < 0) {
  //     secondBike.dx = 0;
  //     isGameover = true;
  //   } 
  //   if (secondBike.y > canvas.height || secondBike.y < 0) {
  //     secondBike.dy = 0;
  //     isGameover = true;
  //   }
  // }
  // wallCollision();

function gameLoop() {
  if (startGame.player1Score === 3) {
      startGame.isGameOver === true;
      alert('Player 1 Wins');
      context.clearRect(0, 0, canvas.width, canvas.height);
      window.cancelAnimationFrame(gameLoop)
    } else if (startGame.player2Score === 3) { 
      startGame.isGameOver === true;
      alert('Player 2 Wins');
      context.clearRect(0, 0, canvas.width, canvas.height);
      window.cancelAnimationFrame(gameLoop)
    } else {
      startGame.animate(context);
      startGame.trailCollision();
      startGame.wallCollision();
    }
  requestAnimationFrame(gameLoop);
}

// if (startGame.player1Score === 3) {
//   startGame.isGameOver === true
//   // alert('Player 1 Wins');
//   context.clearRect(0, 0, canvas.width, canvas.height);
// } else if (startGame.player2Score === 3) {
//   startGame.isGameOver === true
//   // alert('Player 2 Wins');
//   context.clearRect(0, 0, canvas.width, canvas.height);
// } else {
//   startGame.animate(context);
//   startGame.trailCollision();
//   startGame.wallCollision();
// }




document.addEventListener('keydown', keyboardEvent, nxtLvlEvent);

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

function NxtLvlEvent () {

if(e.keyCode === 32) {
  if(player1Score > 0 || player2Score > 0)

  var nextLvl = new Game (firstBike, secondBike, player1Score, player );
    var nxtLvlplayer1 = nxtLvl.player1
    var nxtLvlplayer2 = nxtLvl.player2
  
  requestAnimationFrame(gameLoop);
  console.log(gameLoop) 
 }  
}


