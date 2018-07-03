var GamePiece = require('./GamePiece.js');
// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');


module.exports = class Game {
  constructor() {
    this.isGameOver = false;
    this.moving = false;
    this.stopped = false;
    this.player1 = new GamePiece(30, 50, 1, 1, 'rgb(92,247,249)', 1, 0, 'right');
    this.player2 = new GamePiece(270, 50, 1, 1, 'rgb(255,33,49)', -1, 0, 'left');
    this.player1Score = 0;
    this.player2Score = 0;
    this.bikes = [this.player1, this.player2];
    this.keyPressed  = false;
    this.trail1 = [];
    this.trail2 = [];
  }

  endGame(context) {  
    let tFont = '18px tron'
    let tAlign = 'center'
    let tBase = 'middle'
    let tFill = ['blue', 'red']
    let arr = [1, 2]
    switch(this.keyPressed) {
      case this.player1Score === 3 :
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.isGameOver = true; 
        context.font = tFont;
        context.textAlign = tAlign;
        context.textBaseline = tBase;
        context.fillStyle = tFill[0]; 
        context.fillText('GAME OVER! PLAYER 1 WINS', 150, 50); 
      case this.player2Score === 3 :
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.isGameOver = true; 
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = tFont;
        context.textAlign = tAlign;
        context.textBaseline = tBase;
        context.fillStyle = tFill[1]; 
        context.fillText('GAME OVER! PLAYER 2 WINS', 150, 50); 
    }
    this.stopped = true;  
  }
  

  animate(context) {
    this.player1.draw(context);
    this.player2.draw(context)
    this.player1.move();
    this.player2.move();
  }

  createTrail() {
    this.trail1.unshift({ x:this.player1.x , y:this.player1.y, height:this.player1.height, width:this.player1.width });
    this.trail2.unshift({ x:this.player2.x , y:this.player2.y, height:this.player2.height, width:this.player2.width }); 
  }

  trailCollision() {
    this.trail2.forEach(trail => {
      if(this.player1.isCollidingWith(trail)) {
        this.player1.x = this.trail1[1].x;
        this.player1.y = this.trail1[1].y;
        this.player1.dx = 0;
        this.player1.dy = 0;
        this.player2.dx = 0;
        this.player2.dy = 0;
        this.keyPressed = true;
        this.player2Score ++;
        this.endGame();
      } 
    })
  
    for(let i=1 ; i < this.trail1.length; i++) {
      if(this.trail1[0].x === this.trail1[i].x && this.trail1[0].y === this.trail1[i].y) {
        this.trail1.splice(i, 1);
        this.player1.dx = 0;
        this.player1.dy = 0;
        this.player2.dx = 0;
        this.player2.dy = 0;
        this.keyPressed = true;
        this.player2Score ++;
        this.endGame();
      }
    }
    
    for(let i=1 ; i < this.trail2.length; i++) {
      if(this.trail2[0].x === this.trail2[i].x && this.trail2[0].y === this.trail2[i].y) {
        this.trail2.splice(i, 1);
        this.player1.dx = 0;
        this.player1.dy = 0;
        this.player2.dx = 0;
        this.player2.dy = 0;
        this.keyPressed = true;
        this.player1Score ++;
        this.endGame();
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
        this.endGame()
      }
    })
  } 

  wallCollision(canvas) {
    if (this.player1.x > canvas.width || this.player1.x < 0) {
      this.player1.x = this.trail1[1].x
      this.player1.y = this.trail1[1].y
      this.player1.dx = 0
      this.player1.dy = 0
      this.player2.dx = 0
      this.player2.dy = 0
      this.player2Score ++
      this.keyPressed = true;
      this.stopped = true;
      this.endGame();
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
      this.stopped = true;
      console.log(canvas.height);
      this.endGame()
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
      this.stopped = true;
      this.endGame()
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
      this.stopped = true;
      this.endGame()
    }
  }
}