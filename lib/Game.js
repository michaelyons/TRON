var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

module.exports = class Game {
  constructor(player1, player2) {
    this.isGameover = false;
    this.level = 1;
    this.player1 = player1;
    this.player2 = player2;
    this.start = this.start.bind(this);
  }

  start() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(this.gameloop)
  }

  gameloop() {
    if (!this.isGameover) {
      // alert('GAME OVER');
      context.clearRect(10, 10, 1000, 1000);
  
    } else {
      animate();
  
    }
    requestAnimationFrame(gameLoop);
  }

  animate() {
    this.firstBike.draw(context);
    this.secondBike.draw(context)
    this.firstBike.move();
    this.secondBike.move();
    trailArray[0].unshift({ x:firstBike.x , y:firstBike.y, height:firstBike.height, width:firstBike.width })
    trailArray[1].unshift({ x:secondBike.x , y:secondBike.y, height:secondBike.height, width:secondBike.width })
  
  trailArray[1].forEach(trail => {
    if(firstBike.isCollidingWith(trail)) {
      trail.dx = 0;
      this.isGameover = true;
    }
  })
  
  trailArray[0].forEach(trail => {
    if(secondBike.isCollidingWith(trail)) {
      trail.dx = 0;
      this.isGameover = true;
    }
  })
  
    trail.forEach((bike1, i) => {
      trail.forEach(function (bike2, j) {
        if (i !== j && bike1.isCollidingWith(bike2)) {
          bike1.dx = 0;
          bike2.dx = 0;
          this.isGameover = true;
        }  
      })
    })
  }

  handleKeyPress(e) {

  }

  // pausePlay(e) {
  //   if(e.keyCode === 32 && firstBike.dxv !==0) {
  //     firstBike.dxv = 0;
  //     secondBike.dxv = 0
  //   } else { 
  //     firstBike.dxv = 1;
  //     secondBike.dxv = 1;
  //   }
  // }

}