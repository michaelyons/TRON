var GamePiece = require('./GamePiece.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

module.exports = class Game {
  constructor(player1, player2) {
    this.isGameOver = false;
    this.level = 1;
    this.player1 = new GamePiece(30, 50, 1, 1, 'rgb(92,247,249)');
    this.player2 = new GamePiece(270, 50, 1, 1, 'rgb(255,33,49)', -1);
    this.player1Score = 0;
    this.player2Score = 0;
    this.bikes = [this.player1, this.player2]
    this.keyPress = false;
    this.trail = [[], []];
    // this.start = this.start.bind(this);
  }

  // start() {
  //   this.Game = false;
  // }

  animate(context) {
    this.player1.draw(context);
    this.player2.draw(context)
    this.player1.move();
    this.player2.move();
    this.trail[0].unshift({ x:this.player1.x , y:this.player1.y, height:this.player1.height, width:this.player1.width })
    this.trail[1].unshift({ x:this.player2.x , y:this.player2.y, height:this.player2.height, width:this.player2.width })
  }

  trailCollision() {
    this.trail[1].forEach(trail => {
      if(this.player1.isCollidingWith(trail)) {
        this.player1.x = this.player1.x - 1
        this.player1.dx = 0
        this.player1.dy = 0
        this.player2.x = this.player2.x - 1
        this.player2.dx = 0
        this.player2.dy = 0
        this.keyPress = true;
        this.player2Score ++
        context.clearRect(0, 0, canvas.width, canvas.height);
      } 
    })
    this.trail[0].forEach(trail => {
      if(this.player2.isCollidingWith(trail)) {
        this.player2.x = this.player1.x + 1
        this.player1.dx = 0
        this.player1.dy = 0
        this.player2.x = this.player2.x + 1
        this.player2.dx = 0
        this.player2.dy = 0
        this.keyPress = true;
        this.player1Score ++
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    })
    this.bikes.forEach((bike1, i) => {
      this.bikes.forEach(function (bike2, j) {
        if (i !== j && bike1.isCollidingWith(bike2)) {
          bike1.dx = 0;
          bike2.dx = 0;
        }  
      })
    })
  } 

  wallCollision() {
    if (this.player1.x > canvas.width || this.player1.x < 0) {
      this.player1.x = this.player1.x + 1
      this.player1.x = this.player2.x + 1
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.
      this.player2Score ++
      context.clearRect(0, 0, canvas.width, canvas.height);
    } 
    if (this.player1.y > canvas.height || this.player1.y < 0) {
      this.player1.y = this.player1.y + 1
      this.player1.y = this.player2.y + 1
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.player2Score ++
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (this.player2.x > canvas.width || this.player2.x < 0) {
      this.player2.x = this.player1.x + 1
      this.player2.x = this.player2.x + 1
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.player1Score ++
      context.clearRect(0, 0, canvas.width, canvas.height);
    } 
    if (this.player2.y > canvas.height || this.player2.y < 0) {
      this.player2.y = this.player1.y + 1
      this.player2.y = this.player2.y + 1
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.player1Score ++
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}