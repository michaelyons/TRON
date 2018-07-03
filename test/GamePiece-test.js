const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe ('GamePiece', function () {

  
  it('should have properties', function() {
    const gamePiece = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1, 0, 'right');
    
    assert.deepEqual(gamePiece, {
      x: 50,
      y: 50,
      height: 5, 
      width: 10,
      color: 'rgb(0, 222, 254)',
      dx: 1,
      dy: 0,
      dxv: 1,
      direction: 'right'
    });
  })
  
  it('should be able to collide with other objects', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1);
    const gamePiece2 = new GamePiece(51, 51, 10, 5, 'rgb(250, 0, 0)', 1);
    
    const isColliding = gamePiece1.isCollidingWith(gamePiece2);
    
    assert.equal(isColliding, true);
  })
  
  it('should collide when object overlaps with wall', function() {
    const gamePiece1 = new GamePiece(0, 0, 1, 1, 'rgb(0, 222, 254)', 1);
    const canvasObj = new GamePiece(0, 0, 100, 100, 'rgb(92,247,249)', 0, 0, 'right');
    
    const isColliding = gamePiece1.isCollidingWith(canvasObj);
    
    assert.equal(isColliding, true);
  })

  it('should be able to move', function() {
    const gamePiece = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1, 0, 'right');
    gamePiece.move();
    assert.equal(gamePiece.x, 51);
    assert.equal(gamePiece.y, 50);
  })

  it.skip('should increment score of winner by 1 when a player runs into the other players trail', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1);
    const gamePiece2 = new GamePiece(51, 51, 10, 5, 'rgb(250, 0, 0)', 1);

    gamePiece1.trailCollision(gamePiece2);
    
    assert.notEqual(this.player1Score, this.player2Score);
      
    })

  it.skip('should alert game over when a player score is equal to 3', function() {
    var game = new Game();
    game.player1.x = 
    
    game.player1Score++;
    game.player1Score++;
    game.player1Score++;
    game.endGame();
    
    assert.equal(isGameover, true)

  })
})