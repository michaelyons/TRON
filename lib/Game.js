var GamePiece = require('./GamePiece.js');

module.exports = class Game {
  constructor() {
    this.isGameOver = false;
    this.paused = false;
    this.player1 = new GamePiece(
      30, 50, 1, 1, 'rgb(92,247,249)', 1, 0, 'right');
    this.player2 = new GamePiece(
      270, 50, 1, 1, 'rgb(255,33,49)', -1, 0, 'left');
    this.player1Score = 0;
    this.player2Score = 0;
    this.keyPressed  = false;
    this.trail1 = [];
    this.trail2 = [];
  }

  endGame() {
    if (this.player1Score === 3 || this.player2Score === 3) {
      this.isGameOver = true;
      this.paused = false;
    }
    this.paused = true;  
  }

  animate(context) {
    this.player1.draw(context);
    this.player2.draw(context);
    this.player1.move();
    this.player2.move();
  }

  createTrail() {
    this.trail1.unshift({ 
      x: this.player1.x, 
      y: this.player1.y, 
      height: this.player1.height, 
      width: this.player1.width 
    });
    this.trail2.unshift({ 
      x: this.player2.x, 
      y: this.player2.y, 
      height: this.player2.height, 
      width: this.player2.width 
    }); 
  }

  detectTrailCollision() {
    this.trail2.forEach(trail => {
      if (this.player1.isCollidingWith(trail)) {
        this.player1.x = this.trail1[1].x;
        this.player1.y = this.trail1[1].y;
        this.disableKeyPlayer2();
      } 
    });
    this.trail1.forEach(trail => {
      if (this.player2.isCollidingWith(trail)) { 
        this.player2.x = this.trail2[1].x;
        this.player2.y = this.trail2[1].y;
        this.disableKeyPlayer1();
      }
    });
    for (let i = 1; i < this.trail1.length; i++) {
      if (this.trail1[0].x === this.trail1[i].x && 
      this.trail1[0].y === this.trail1[i].y) {
        this.trail1.splice(i, 1);
        this.disableKeyPlayer2();
      }
    }
    for (let i = 1; i < this.trail2.length; i++) {
      if (this.trail2[0].x === this.trail2[i].x && 
      this.trail2[0].y === this.trail2[i].y) {
        this.trail2.splice(i, 1);
        this.disableKeyPlayer1();
      }
    }
  } 

  detectWallCollision(canvas) {
    if (this.player1.x > canvas.width || this.player1.x < 0 || 
    this.player1.y > canvas.height || this.player1.y < 0) {
      this.player1.x = this.trail1[1].x;
      this.player1.y = this.trail1[1].y;
      this.player2Score++;
      this.stopAnimation();
    } 
    if (this.player2.x > canvas.width || this.player2.x < 0 || 
    this.player2.y > canvas.height || this.player2.y < 0) {
      this.player2.x = this.trail2[1].x;
      this.player2.y = this.trail2[1].y;
      this.player1Score++;
      this.stopAnimation();
    } 
  }

  stopAnimation() {
    this.keyPressed = true;
    this.paused = true;
    this.endGame();
  }

  disableKeyPlayer1() {
    this.keyPressed = true;
    this.player1Score++;
    this.endGame();
  }

  disableKeyPlayer2() {
    this.keyPressed = true;
    this.player2Score++;
    this.endGame();
  }
};