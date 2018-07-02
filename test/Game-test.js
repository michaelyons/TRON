const { assert } = require('chai');
const Game = require('../lib/Game.js');

describe ('Game', function () {

  it('should have properties', function() {
    assert.deepEqual(, {

    })
  });

  it('should be able to draw', function() {
    assert.deepEqual(, {
      
    })
  });

  it('game should be able to move once drawn', function() {
    assert.deepEqual(, {
      
    })
  });

  it('should have a trail', function() {
    assert.deepEqual(, {
      
    })
  });

  it('should collide if player collides with other player trail', function() {
    assert.deepEqual(, {
      
    })
  });

  it('should stop moving once collision is detected', function() {
    assert.deepEqual(, {
      
    })
  });

  it('should increment score of winner by 1', function() {
    assert.deepEqual(, {
      
    })
  });

  it('', function() {
    assert.deepEqual(, {
      
    })
  });

  it('', function() {
    assert.deepEqual(, {
      
    })
  });

  it('', function() {
    assert.deepEqual(, {
      
    })
  });
})