const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', function() {
    
    it('should have properties', function(){
        const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
        const object = {
        x: 50,
        y: 50,
        height: 10,
        width: 10,
        color: 'rgb(250, 0, 0)',
        }

        assert.deepEqual(gamePiece, object);
    })

    it('should be able to collide with other objects', function(){
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0), 1');
    const gamePiece2 = new GamePiece(58, 58, 10, 10, 'rgb(250, 0, 0), 1');

    const isColliding = gamePiece1.collideWith(gamePiece2);

    assert.isTrue(isColliding);
    })

    it('should not collide with other objects', function(){
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0), 1');
    const gamePiece2 = new GamePiece(65, 65, 10, 10, 'rgb(250, 0, 0), 1');

    const isColliding = gamePiece1.collideWith(gamePiece2);

    assert.isFalse(isColliding);
    })

    it('should move'), function() {
        const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0), 1');

        gamePiece1.move()

        assert.equal(gamePiece1.x, 50.5)
    }

    if('Trail of A should')
})