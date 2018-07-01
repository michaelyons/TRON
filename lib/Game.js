var GamePiece = require('./GamePiece.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

module.exports = class Game {
  constructor(player1Score, player2Score) {
    this.isGameOver = false;
    this.level = 1;
    this.player1 = new GamePiece(30, 50, 1, 1, 'rgb(92,247,249)');
    this.player2 = new GamePiece(270, 50, 1, 1, 'rgb(255,33,49)', -1);
    this.player1Score = player1Score || 0;
    this.player2Score = player2Score || 0;
    this.bikes = [this.player1, this.player2]
    this.keyPressed  = false;
    this.trail1 = [];
    this.trail2 = [];
  }

  animate(context) {
    this.player1.draw(context);
    this.player2.draw(context)
    this.player1.move();
    this.player2.move();
    this.trail1.unshift({ x:this.player1.x , y:this.player1.y, height:this.player1.height, width:this.player1.width })
    this.trail2.unshift({ x:this.player2.x , y:this.player2.y, height:this.player2.height, width:this.player2.width }) 
    console.log(this.trail1)
  }

  trailCollision() {
    this.trail2.forEach(trail => {
      if(this.player1.isCollidingWith(trail)) {
        this.player1.x = this.trail1[1].x
        this.player1.y = this.trail1[1].y
        this.player1.dx = 0
        this.player1.dy = 0
        this.player2.dx = 0
        this.player2.dy = 0
        this.keyPressed = true
        this.player2Score ++
      } 
    })
  
    for(let i=1 ; i < this.trail1.length; i++) {
      if(this.trail1[0].x === this.trail1[i].x && this.trail1[0].y === this.trail1[i].y) {
        let result = this.trail1.find(object => {
          return object.x === this.trail1[0].x && object.y === this.trail1[0].y;
        })
        console.log(result);
        let indexResult = this.trail1.indexOf(result, 3);
        console.log(indexResult);
        this.trail1.splice(indexResult, 1);
        // this.player1.x = this.player1.x - 1
        // this.player1.y = this.player1.y - 1
        this.player1.dx = 0
        this.player1.dy = 0
        this.player2.dx = 0
        this.player2.dy = 0
        this.keyPressed = true
        this.player2Score ++
      }
    }
    

    this.trail1.forEach(trail => {
      if(this.player2.isCollidingWith(trail)) { 
        this.player2.x = this.trail2[1].x
        this.player2.y = this.trail2[1].y
        this.player1.dx = 0
        this.player1.dy = 0
        this.player2.dx = 0
        this.player2.dy = 0
        this.keyPressed = true
        this.player1Score ++
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
      this.player1.x = this.trail1[1].x
      this.player1.y = this.trail1[1].y
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.player2Score ++
      this.keyPressed = true

    } 
    if (this.player1.y > canvas.height || this.player1.y < 0) {
      this.player1.x = this.trail1[1].x
      this.player1.y = this.trail1[1].y
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.player2Score ++
      this.keyPressed = true

    }
    if (this.player2.x > canvas.width || this.player2.x < 0) {
      this.player2.x = this.trail2[1].x
      this.player2.y = this.trail2[1].y
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.player1Score ++
      this.keyPressed = true

    } 
    if (this.player2.y > canvas.height || this.player2.y < 0) {
      this.player2.x = this.trail2[1].x
      this.player2.y = this.trail2[1].y
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.player1Score ++
      this.keyPressed = true

    }
  }
}