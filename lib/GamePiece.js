module.exports = class GamePiece {
  constructor(x, y, width, height, color, dx, dy, direction = 'right') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.dxv = 1;
    this.direction = direction;
  }
  
  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }
  
  draw(context) {
    const { x, y, height, width, color } = this;

    context.fillStyle = color;
    context.fillRect(x, y, height, width);
  }
  
  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dxv;

    if (this.direction === 'down') {
      this.dx = 0;
      this.dy = -1;
    } else if (this.direction === 'up') {
      this.dx = 0;
      this.dy = 1;
    } else if (this.direction === 'right') {
      this.dx = 1;
      this.dy = 0;
    } else if (this.direction === 'left') {
      this.dx = -1;
      this.dy = 0;
    }
  }
};