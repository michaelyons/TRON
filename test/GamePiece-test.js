const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe ('GamePiece', function () {

  it('should have properties', function() {
    const gamePiece = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1);

    assert.deepEqual(gamePiece, {
      x: 50,
      y: 50,
      height: 5, 
      width: 10,
      color: 'rgb(0, 222, 254)',
      dx: 1,
      dy: 0,
      dxv: 1
    });
  })

  it('should be able to collide with other objects', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1);
    const gamePiece2 = new GamePiece(51, 51, 10, 5, 'rgb(250, 0, 0)', 1);

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);
    
    assert.equal(isColliding, true);
  })

  it('should not collide with objects when they dont overlap', function() {
    const gamePiece1 = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1);
    const gamePiece2 = new GamePiece(65, 65, 10, 5, 'rgb(250, 0, 0)', 1);

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);
    
    assert.equal(isColliding, false);
  })

  it('should be able to move', function() {
    const gamePiece = new GamePiece(50, 50, 10, 5, 'rgb(0, 222, 254)', 1);
    gamePiece.move();
    assert.equal(gamePiece.x, 51);
    assert.equal(gamePiece.y, 50);
  })
})