class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;
    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }

  move() {
    this.x += this.dx * this.dxv
  }

  collideWith(object) {
        return !(
          this.x + this.width < object.x ||
          this.y + this.height < object.y ||
          this.x > object.x + object.width || 
          this.y > object.y + object.height
        )
      }
}

module.exports = GamePiece