// class Car extends GamePiece {
//   constructor(x, y, width, height, color, dx, dy) {
//     super(x, y, width, height, color);
//     this.dx = dx;
//     this.dy = dy;
//   }

//   move() {
//     this.x += this.dx * this.dxv
//   }

//   // changeDirection () {
//   //   switch (keyCode) {
//   //     case 37:
//   //       this.dx = -1;
//   //       this.dy = 0;
//   //       break;

//   //     case 38:
//   //       this.dx = 0;
//   //       this.dy = 1;
//   //       break;
  
//   //     case 39:
//   //       this.dx = 1
//   //       this.dy = 0
//   //       break;
  
//   //     case 40:
//   //       this.dx = 0
//   //       this.dy = -1
//   //       break;
    
//   //     case 68:
//   //       this.dx = 0
//   //       this.dy = 1
//   //       break;

//   //     case 83:
//   //       this.dx = 1
//   //       this.dy = 0
//   //       break;
        
//   //     case 87:
//   //       this.dx = 0
//   //       this.dy = -1
//   //       break;

//   //     case 65:
//   //       this.dx = -1;
//   //       this.dy = 0;
//   //       break;
//   //   }
//   // }

//   wallCollide(object) {
//     return !(
//       this.x + this.width < object.x ||
//       this.y + this.height < object.y ||
//       this.x > object.x + object.width || 
//       this.y > object.y + object.height
//     )
//   }
//   //after collision
//   // changeShape(){}

//   // trailCollide(object) {}

// }

// module.exports = Car;