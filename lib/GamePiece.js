module.exports = class GamePiece {
  constructor(x, y, width, height, color, dx = 1, dy = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.dxv = 1;
  }
  
  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }
  
  draw(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }
  
  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dxv;
  }
}