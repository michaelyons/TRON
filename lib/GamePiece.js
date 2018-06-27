module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx = 1) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dxv = .5;
  }
  
    collideWith(object) {
        return !(
          this.x + this.width < object.x ||
          this.y + this.height < object.y ||
          this.x > object.x + object.width || 
          this.y > object.y + object.height
        )
      }

  draw(ctx) {
    const { x, y, height, width, color } = this;
    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }

  move() {
    this.x += this.dx * this.dxv
  }
}




