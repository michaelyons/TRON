const GamePiece = require('./GamePiece.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

context.fillStyle = "rgba(0, 255, 1, 1)";
context.fillRect(30, 50, 1, 1);
const firstBike = new GamePiece(30, 50, 1, 1, 'rgb(0, 222, 254)');
const secondBike = new GamePiece(270, 50, 1, 1, 'rgb(209, 3, 0)', -1);
const isGameover = false;
const trail = [firstBike, secondBike];
const trailArray = [[], []];


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
  console.log(firstBike);
  trailArray[0].push({x:firstBike.x , y:firstBike.y})
  trailArray[1].push({x:secondBike.x , y:secondBike.y})
  // console.log(trailArray[0])


const leadBike = (({ x, y }) => ({ x, y }))(firstBike);
console.log(leadBike);

  trail.forEach((bike1, i) => {
    trail.forEach(function (bike2, j) {
      if (i !== j && bike1.isCollidingWith(bike2)) {
        bike1.dx = 0;
        bike2.dx = 0;
        isGameover = true;
      }  
    })
  })
  const collide1 = trailArray[0].find(trailx => {return trailx.x === secondBike.x && trailx.y === secondBike.y})
  if(typeof collide1 === firstBike){
    firstBike.dx = 0
    secondBike.dx = 0
    isGameover = true;
    }
}

  
function gameLoop () {
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
    firstBike.dxv = .4;
    secondBike.dxv = .4;
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
