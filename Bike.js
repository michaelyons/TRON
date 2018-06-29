var GamePiece = require('./GamePiece.js');

module.exports = class Bike extends GamePiece {
    constructor(x, y, height, width, color, dx = 1, dy = 0)
    super(x, y, height, width, color, dx = 1, dy = 0) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.dx = dx;
        this.dy = dy
        this.dxv = 1;
      }
}