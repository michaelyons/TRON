var GamePiece = require('./GamePiece.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 1, 1)";
context.fillRect(30, 50, 1, 1);
var firstBike = new GamePiece(30, 50, 1, 1, 'rgb(0, 222, 254)');
var secondBike = new GamePiece(270, 50, 1, 1, 'rgb(209, 3, 0)', -1);
var isGameover = false;
var trail = [firstBike, secondBike];
var trailArray = [[], []];



// var x = document.getElementById('slice-audio');
// var pressPlay = document.querySelector('press-play')
// pressPlay.addEventListener('click', playSlice)

// function playSlice(e) { 
//   e.preventDefault()
//   playAudio(x); 
// } 

window.onload = function() {
  document.getElementById("my_audio").play();
}

function animate() {
  firstBike.draw(context);
  secondBike.draw(context)
  firstBike.move();
  secondBike.move();
  trailArray[0].unshift({ x:firstBike.x , y:firstBike.y, height:firstBike.height, width:firstBike.width })
  trailArray[1].unshift({ x:secondBike.x , y:secondBike.y, height:secondBike.height, width:secondBike.width })

console.log(trailArray)

trailArray[1].forEach(trail => {
  if(firstBike.isCollidingWith(trail)) {
    trail.dx = 0;
    isGameover = true;
  }
})

trailArray[0].forEach(trail => {
  if(secondBike.isCollidingWith(trail)) {
    trail.dx = 0;
    isGameover = true;
  }
})

  trail.forEach((bike1, i) => {
    trail.forEach(function (bike2, j) {
      if (i !== j && bike1.isCollidingWith(bike2)) {
        bike1.dx = 0;
        bike2.dx = 0;
        isGameover = true;
      }  
    })
  })
}

function gameLoop() {
  if (isGameover) {
    // alert('FUCK')
  } else {
    animate();

  }
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

document.addEventListener('keydown', keyboardEvent);

function keyboardEvent(e) {
  if (e.keyCode === 65 && firstBike.dx !== 1) {
    firstBike.dx = -1;
    firstBike.dy = 0;
  } else if (e.keyCode === 87 && firstBike.dy !== 1) {
    firstBike.dx = 0;
    firstBike.dy = -1;
  }  else if (e.keyCode === 68 && firstBike.dx !== -1) {
    firstBike.dx = 1;
    firstBike.dy = 0;
  } else if (e.keyCode === 83 && firstBike.dy !== -1) {
    firstBike.dx = 0;
    firstBike.dy = 1;
  } else if (e.keyCode === 37 && secondBike.dx !== 1) {
    secondBike.dx = -1;
    secondBike.dy = 0;
  }  else if (e.keyCode === 40 && secondBike.dy !== -1) {
    secondBike.dx = 0;
    secondBike.dy = 1;
  }  else if (e.keyCode === 39 && secondBike.dx !== -1) {
    secondBike.dx = 1;
    secondBike.dy = 0;
  }  else if (e.keyCode === 38 && secondBike.dy !== 1) {
    secondBike.dx = 0;
    secondBike.dy = -1;
  } 
}

document.addEventListener('keydown', pausePlay)

function pausePlay(e) {
  if(e.keyCode === 32 && firstBike.dxv !==0) {
    console.log('ds')
    firstBike.dxv = 0;
    secondBike.dxv = 0
  } else { 
    firstBike.dxv = 1;
    secondBike.dxv = 1;
  }
}

document.addEventListener('keydown', changeSpeed)

function changeSpeed(e) {
  if(e.keyCode === 189) {
    console.log('dsad')
    firstBike.dxv += .1
    secondBike.dxv += .1
  }
}
