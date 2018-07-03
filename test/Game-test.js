const { assert } = require('chai');
const Game = require('../lib/Game.js');

describe ('Game', function () {

  it('should have properties', function() {
    const game = new Game();

    assert.deepEqual(game, {
      isGameOver: false,
      moving: false,
      stopped: false,
      player1: {x: 30, y: 50, height: 1, width: 1, color: 'rgb(92,247,249)', dx: 1, dy: 0, dxv: 1, direction: 'right'},
      player2: {x: 270, y: 50, height: 1, width: 1, color: 'rgb(255,33,49)', dx: -1, dy: 0, dxv: 1, direction: 'left'},
      player1Score: 0,
      player2Score: 0, 
      bikes: [{x: 30, y: 50, height: 1, width: 1, color: 'rgb(92,247,249)', dx: 1, dy: 0, dxv: 1, direction: 'right'}, {x: 270, y: 50, height: 1, width: 1, color: 'rgb(255,33,49)', dx: -1, dy: 0, dxv: 1, direction: 'left'}],
      keyPressed: false,
      trail1: [],
      trail2: []
    });
  });

  it('should be able to draw two players and move', function() {
    const gameA = new Game();   
    
    assert.deepEqual(gameA.player1.height, 1);  
    assert.deepEqual(gameA.player2.width, 1);

    gameA.player1.move();
    gameA.player2.move();

    assert.equal(gameA.player1.x, 31);
    assert.equal(gameA.player2.x, 269);
  });

  it('each player should have a trail', function() {
    const gameB = new Game();  
      
    gameB.player1.move();
    gameB.player2.move();
    gameB.createTrail();

    assert.deepEqual(gameB.trail1[0], { x: 31, y: 50, height: 1, width: 1 });
    assert.deepEqual(gameB.trail2[0], { x: 269, y: 50, height: 1, width: 1 });
  
    gameB.player1.move();
    gameB.player2.move();
    gameB.createTrail();

    assert.deepEqual(gameB.trail1[0], { x: 32, y: 50, height: 1, width: 1 });
    assert.deepEqual(gameB.trail2[0], { x: 268, y: 50, height: 1, width: 1 });

    gameB.player1.move();
    gameB.player2.move();
    gameB.createTrail();

    assert.deepEqual(gameB.trail1[1], { x: 32, y: 50, height: 1, width: 1 });
    assert.deepEqual(gameB.trail2[1], { x: 268, y: 50, height: 1, width: 1 });
  });

  it('should stop the game when player1 bike collides with player2 trail', function() {
    const game = new Game();
    
    game.player1.x = 68;
    game.player1.y = 50;
    game.player2.x = 70;
    game.player2.y = 50;
    
    assert.equal(game.stopped, false);
    
    game.player2.move();
    game.createTrail();
    game.player2.move();
    game.createTrail();

    game.trailCollision();

    assert.equal(game.stopped, true);
  });

  it.skip('should increment score of winner by 1 when a player runs into the other players trail', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1);
    const gamePiece2 = new GamePiece(51, 51, 10, 5, 'rgb(250, 0, 0)', 1);

    gamePiece1.trailCollision(gamePiece2);
    
    assert.notEqual(this.player1Score, this.player2Score);
  });
  
  it.skip('should alert game over when a player score is equal to 3', function() {
    var game = new Game(); 
    
    game.player1Score++;
    game.player1Score++;
    game.player1Score++;
  
    game.endGame();
    
    assert.equal(isGameover, true);
  });
});