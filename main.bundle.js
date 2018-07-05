/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

module.exports = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.isGameOver = false;
    this.moving = false;
    this.stopped = false;
    this.player1 = new GamePiece(30, 50, 1, 1, 'rgb(92,247,249)', 1, 0, 'right');
    this.player2 = new GamePiece(270, 50, 1, 1, 'rgb(255,33,49)', -1, 0, 'left');
    this.player1Score = 0;
    this.player2Score = 0;
    this.keyPressed = false;
    this.trail1 = [];
    this.trail2 = [];
  }

  _createClass(Game, [{
    key: 'endGame',
    value: function endGame() {
      if (this.player1Score === 3 || this.player2Score === 3) {
        this.isGameOver = true;
        this.stopped = false;
      }
      this.stopped = true;
    }
  }, {
    key: 'animate',
    value: function animate(context) {
      this.player1.draw(context);
      this.player2.draw(context);
      this.player1.move();
      this.player2.move();
    }
  }, {
    key: 'createTrail',
    value: function createTrail() {
      this.trail1.unshift({
        x: this.player1.x,
        y: this.player1.y,
        height: this.player1.height,
        width: this.player1.width
      });
      this.trail2.unshift({
        x: this.player2.x,
        y: this.player2.y,
        height: this.player2.height,
        width: this.player2.width
      });
    }
  }, {
    key: 'trailCollision',
    value: function trailCollision() {
      var _this = this;

      this.trail2.forEach(function (trail) {
        if (_this.player1.isCollidingWith(trail)) {
          _this.player1.x = _this.trail1[1].x;
          _this.player1.y = _this.trail1[1].y;
          _this.disableKeyPlayer2();
        }
      });
      this.trail1.forEach(function (trail) {
        if (_this.player2.isCollidingWith(trail)) {
          _this.player2.x = _this.trail2[1].x;
          _this.player2.y = _this.trail2[1].y;
          _this.disableKeyPlayer1();
        }
      });
      for (var i = 1; i < this.trail1.length; i++) {
        if (this.trail1[0].x === this.trail1[i].x && this.trail1[0].y === this.trail1[i].y) {
          this.trail1.splice(i, 1);
          this.disableKeyPlayer2();
        }
      }
      for (var _i = 1; _i < this.trail2.length; _i++) {
        if (this.trail2[0].x === this.trail2[_i].x && this.trail2[0].y === this.trail2[_i].y) {
          this.trail2.splice(_i, 1);
          this.disableKeyPlayer1();
        }
      }
    }
  }, {
    key: 'wallCollision',
    value: function wallCollision(canvas) {
      if (this.player1.x > canvas.width || this.player1.x < 0 || this.player1.y > canvas.height || this.player1.y < 0) {
        this.player1.x = this.trail1[1].x;
        this.player1.y = this.trail1[1].y;
        this.player2Score++;
        this.stopAnimation();
      }
      if (this.player2.x > canvas.width || this.player2.x < 0 || this.player2.y > canvas.height || this.player2.y < 0) {
        this.player2.x = this.trail2[1].x;
        this.player2.y = this.trail2[1].y;
        this.player1Score++;
        this.stopAnimation();
      }
    }
  }, {
    key: 'stopAnimation',
    value: function stopAnimation() {
      this.keyPressed = true;
      this.stopped = true;
      this.endGame();
    }
  }, {
    key: 'disableKeyPlayer1',
    value: function disableKeyPlayer1() {
      this.keyPressed = true;
      this.player1Score++;
      this.endGame();
    }
  }, {
    key: 'disableKeyPlayer2',
    value: function disableKeyPlayer2() {
      this.keyPressed = true;
      this.player2Score++;
      this.endGame();
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, width, height, color, dx, dy) {
    var direction = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'right';

    _classCallCheck(this, GamePiece);

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

  _createClass(GamePiece, [{
    key: 'isCollidingWith',
    value: function isCollidingWith(object) {
      return !(this.x + this.width < object.x || this.y + this.height < object.y || this.x > object.x + object.width || this.y > object.y + object.height);
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      context.fillStyle = color;
      context.fillRect(x, y, height, width);
    }
  }, {
    key: 'move',
    value: function move() {
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
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var startGame = new Game();
var firstBike = startGame.player1;
var secondBike = startGame.player2;
var pressPlay = document.querySelector('.press-play');
var scoreUno = document.querySelector('.score1');
var scoreDos = document.querySelector('.score2');
var tFont = '17px tron';
var tAlign = 'center';
var tBase = 'middle';
var tFill = 'white';

pressPlay.addEventListener('click', gameLoop);
document.addEventListener('keydown', nxtLvlEvent);
document.addEventListener('keydown', keyboardEvent);

window.onload = function () {
  document.getElementById("my_audio").play();
};

function resetCanvas() {
  if (startGame.player1Score === 3) {
    clearGame();
    context.fillText('PLAYER 1 WINS', 150, 50);
    startGame.player1Score = 0;
    startGame.player2Score = 0;
  }
  if (startGame.player2Score === 3) {
    clearGame();
    context.fillText('PLAYER 2 WINS', 150, 50);
    startGame.player1Score = 0;
    startGame.player2Score = 0;
  }
}

function clearGame() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = tFont;
  context.textAlign = tAlign;
  context.textBaseline = tBase;
  context.fillStyle = tFill;
}

function gameLoop() {
  if (!startGame.isGameOver && !startGame.stopped) {
    startGame.animate(context);
    startGame.createTrail();
    startGame.trailCollision();
    startGame.wallCollision(canvas);
    requestAnimationFrame(gameLoop);
  } else {
    startGame.stopped = true;
    context.font = tFont;
    context.textAlign = tAlign;
    context.textBaseline = tBase;
    context.fillStyle = tFill;
    context.fillText('SPACE BAR TO CONTINUE', 150, 90);
    startGame.endGame();
    resetCanvas();
  }
  scoreUno.innerHTML = startGame.player1Score;
  scoreDos.innerHTML = startGame.player2Score;
}

function keyboardEvent(e) {
  var aKey = !startGame.keyPressed;

  switch (aKey) {
    case e.keyCode === 65 && firstBike.direction !== 'right':
      firstBike.direction = 'left';
      break;
    case e.keyCode === 87 && firstBike.direction !== 'up':
      firstBike.direction = 'down';
      break;
    case e.keyCode === 68 && firstBike.direction !== 'left':
      firstBike.direction = 'right';
      break;
    case e.keyCode === 83 && firstBike.direction !== 'down':
      firstBike.direction = 'up';
      break;
    case e.keyCode === 37 && secondBike.direction !== 'right':
      secondBike.direction = 'left';
      break;
    case e.keyCode === 40 && secondBike.direction !== 'down':
      secondBike.direction = 'up';
      break;
    case e.keyCode === 39 && secondBike.direction !== 'left':
      secondBike.direction = 'right';
      break;
    case e.keyCode === 38 && secondBike.direction !== 'up':
      secondBike.direction = 'down';
      break;
  }
}

function nxtLvlEvent(e) {
  if (e.keyCode === 32 && startGame.player1Score < 3 || e.keyCode === 32 && startGame.player2Score < 3) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    startGame.stopped = false;
    startGame.isGameOver = false;
    firstBike.x = 30;
    firstBike.y = 50;
    secondBike.x = 270;
    secondBike.y = 50;
    firstBike.direction = 'right';
    secondBike.direction = 'left';
    startGame.keyPressed = false;
    startGame.trail1 = [];
    startGame.trail2 = [];
    gameLoop();
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiR2FtZVBpZWNlIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc0dhbWVPdmVyIiwibW92aW5nIiwic3RvcHBlZCIsInBsYXllcjEiLCJwbGF5ZXIyIiwicGxheWVyMVNjb3JlIiwicGxheWVyMlNjb3JlIiwia2V5UHJlc3NlZCIsInRyYWlsMSIsInRyYWlsMiIsImNvbnRleHQiLCJkcmF3IiwibW92ZSIsInVuc2hpZnQiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiZm9yRWFjaCIsImlzQ29sbGlkaW5nV2l0aCIsInRyYWlsIiwiZGlzYWJsZUtleVBsYXllcjIiLCJkaXNhYmxlS2V5UGxheWVyMSIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJjYW52YXMiLCJzdG9wQW5pbWF0aW9uIiwiZW5kR2FtZSIsImNvbG9yIiwiZHgiLCJkeSIsImRpcmVjdGlvbiIsImR4diIsIm9iamVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiR2FtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwic3RhcnRHYW1lIiwiZmlyc3RCaWtlIiwic2Vjb25kQmlrZSIsInByZXNzUGxheSIsInF1ZXJ5U2VsZWN0b3IiLCJzY29yZVVubyIsInNjb3JlRG9zIiwidEZvbnQiLCJ0QWxpZ24iLCJ0QmFzZSIsInRGaWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWVMb29wIiwibnh0THZsRXZlbnQiLCJrZXlib2FyZEV2ZW50Iiwid2luZG93Iiwib25sb2FkIiwicGxheSIsInJlc2V0Q2FudmFzIiwiY2xlYXJHYW1lIiwiZmlsbFRleHQiLCJjbGVhclJlY3QiLCJmb250IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiYW5pbWF0ZSIsImNyZWF0ZVRyYWlsIiwidHJhaWxDb2xsaXNpb24iLCJ3YWxsQ29sbGlzaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5uZXJIVE1MIiwiZSIsImFLZXkiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLFlBQVksbUJBQUFDLENBQVEsMENBQVIsQ0FBaEI7O0FBRUFDLE9BQU9DLE9BQVA7QUFDRSxrQkFBYztBQUFBOztBQUNaLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQUlQLFNBQUosQ0FDYixFQURhLEVBQ1QsRUFEUyxFQUNMLENBREssRUFDRixDQURFLEVBQ0MsaUJBREQsRUFDb0IsQ0FEcEIsRUFDdUIsQ0FEdkIsRUFDMEIsT0FEMUIs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QVdYLFNBQVgsR0FBdUIsTUFBdkI7QUFDQVMsY0FBVWxDLFVBQVYsR0FBdUIsS0FBdkI7QUFDQWtDLGNBQVVqQyxNQUFWLEdBQW1CLEVBQW5CO0FBQ0FpQyxjQUFVaEMsTUFBVixHQUFtQixFQUFuQjtBQUNBNEM7QUFDRDtBQUNGLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsInZhciBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBHYW1lUGllY2UoXG4gICAgICAzMCwgNTAsIDEsIDEsICdyZ2IoOTIsMjQ3LDI0OSknLCAxLCAwLCAncmlnaHQnKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgR2FtZVBpZWNlKFxuICAgICAgMjcwLCA1MCwgMSwgMSwgJ3JnYigyNTUsMzMsNDkpJywgLTEsIDAsICdsZWZ0Jyk7XG4gICAgdGhpcy5wbGF5ZXIxU2NvcmUgPSAwO1xuICAgIHRoaXMucGxheWVyMlNjb3JlID0gMDtcbiAgICB0aGlzLmtleVByZXNzZWQgID0gZmFsc2U7XG4gICAgdGhpcy50cmFpbDEgPSBbXTtcbiAgICB0aGlzLnRyYWlsMiA9IFtdO1xuICB9XG5cbiAgZW5kR2FtZSgpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIxU2NvcmUgPT09IDMgfHwgdGhpcy5wbGF5ZXIyU2NvcmUgPT09IDMpIHtcbiAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTsgIFxuICB9XG5cbiAgYW5pbWF0ZShjb250ZXh0KSB7XG4gICAgdGhpcy5wbGF5ZXIxLmRyYXcoY29udGV4dCk7XG4gICAgdGhpcy5wbGF5ZXIyLmRyYXcoY29udGV4dCk7XG4gICAgdGhpcy5wbGF5ZXIxLm1vdmUoKTtcbiAgICB0aGlzLnBsYXllcjIubW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlVHJhaWwoKSB7XG4gICAgdGhpcy50cmFpbDEudW5zaGlmdCh7IFxuICAgICAgeDogdGhpcy5wbGF5ZXIxLngsIFxuICAgICAgeTogdGhpcy5wbGF5ZXIxLnksIFxuICAgICAgaGVpZ2h0OiB0aGlzLnBsYXllcjEuaGVpZ2h0LCBcbiAgICAgIHdpZHRoOiB0aGlzLnBsYXllcjEud2lkdGggXG4gICAgfSk7XG4gICAgdGhpcy50cmFpbDIudW5zaGlmdCh7IFxuICAgICAgeDogdGhpcy5wbGF5ZXIyLngsIFxuICAgICAgeTogdGhpcy5wbGF5ZXIyLnksIFxuICAgICAgaGVpZ2h0OiB0aGlzLnBsYXllcjIuaGVpZ2h0LCBcbiAgICAgIHdpZHRoOiB0aGlzLnBsYXllcjIud2lkdGggXG4gICAgfSk7IFxuICB9XG5cbiAgdHJhaWxDb2xsaXNpb24oKSB7XG4gICAgdGhpcy50cmFpbDIuZm9yRWFjaCh0cmFpbCA9PiB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXIxLmlzQ29sbGlkaW5nV2l0aCh0cmFpbCkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnggPSB0aGlzLnRyYWlsMVsxXS54O1xuICAgICAgICB0aGlzLnBsYXllcjEueSA9IHRoaXMudHJhaWwxWzFdLnk7XG4gICAgICAgIHRoaXMuZGlzYWJsZUtleVBsYXllcjIoKTtcbiAgICAgIH0gXG4gICAgfSk7XG4gICAgdGhpcy50cmFpbDEuZm9yRWFjaCh0cmFpbCA9PiB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXIyLmlzQ29sbGlkaW5nV2l0aCh0cmFpbCkpIHsgXG4gICAgICAgIHRoaXMucGxheWVyMi54ID0gdGhpcy50cmFpbDJbMV0ueDtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnkgPSB0aGlzLnRyYWlsMlsxXS55O1xuICAgICAgICB0aGlzLmRpc2FibGVLZXlQbGF5ZXIxKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnRyYWlsMS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudHJhaWwxWzBdLnggPT09IHRoaXMudHJhaWwxW2ldLnggJiYgXG4gICAgICB0aGlzLnRyYWlsMVswXS55ID09PSB0aGlzLnRyYWlsMVtpXS55KSB7XG4gICAgICAgIHRoaXMudHJhaWwxLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlS2V5UGxheWVyMigpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMudHJhaWwyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50cmFpbDJbMF0ueCA9PT0gdGhpcy50cmFpbDJbaV0ueCAmJiBcbiAgICAgIHRoaXMudHJhaWwyWzBdLnkgPT09IHRoaXMudHJhaWwyW2ldLnkpIHtcbiAgICAgICAgdGhpcy50cmFpbDIuc3BsaWNlKGksIDEpO1xuICAgICAgICB0aGlzLmRpc2FibGVLZXlQbGF5ZXIxKCk7XG4gICAgICB9XG4gICAgfVxuICB9IFxuXG4gIHdhbGxDb2xsaXNpb24oY2FudmFzKSB7XG4gICAgaWYgKHRoaXMucGxheWVyMS54ID4gY2FudmFzLndpZHRoIHx8IHRoaXMucGxheWVyMS54IDwgMCB8fCBcbiAgICB0aGlzLnBsYXllcjEueSA+IGNhbnZhcy5oZWlnaHQgfHwgdGhpcy5wbGF5ZXIxLnkgPCAwKSB7XG4gICAgICB0aGlzLnBsYXllcjEueCA9IHRoaXMudHJhaWwxWzFdLng7XG4gICAgICB0aGlzLnBsYXllcjEueSA9IHRoaXMudHJhaWwxWzFdLnk7XG4gICAgICB0aGlzLnBsYXllcjJTY29yZSArKztcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgIH0gXG4gICAgaWYgKHRoaXMucGxheWVyMi54ID4gY2FudmFzLndpZHRoIHx8IHRoaXMucGxheWVyMi54IDwgMCB8fCBcbiAgICB0aGlzLnBsYXllcjIueSA+IGNhbnZhcy5oZWlnaHQgfHwgdGhpcy5wbGF5ZXIyLnkgPCAwKSB7XG4gICAgICB0aGlzLnBsYXllcjIueCA9IHRoaXMudHJhaWwyWzFdLng7XG4gICAgICB0aGlzLnBsYXllcjIueSA9IHRoaXMudHJhaWwyWzFdLnk7XG4gICAgICB0aGlzLnBsYXllcjFTY29yZSArKztcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgIH0gXG4gIH1cblxuICBzdG9wQW5pbWF0aW9uKCkge1xuICAgIHRoaXMua2V5UHJlc3NlZCA9IHRydWU7XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICB0aGlzLmVuZEdhbWUoKTtcbiAgfVxuXG4gIGRpc2FibGVLZXlQbGF5ZXIxKCkge1xuICAgIHRoaXMua2V5UHJlc3NlZCA9IHRydWU7XG4gICAgdGhpcy5wbGF5ZXIxU2NvcmUgKys7XG4gICAgdGhpcy5lbmRHYW1lKCk7XG4gIH1cblxuICBkaXNhYmxlS2V5UGxheWVyMigpIHtcbiAgICB0aGlzLmtleVByZXNzZWQgPSB0cnVlO1xuICAgIHRoaXMucGxheWVyMlNjb3JlICsrO1xuICAgIHRoaXMuZW5kR2FtZSgpO1xuICB9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIGR4LCBkeSwgZGlyZWN0aW9uID0gJ3JpZ2h0Jykge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmR5ID0gZHk7XG4gICAgdGhpcy5keHYgPSAxO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG4gIFxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuICEoXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoIDwgb2JqZWN0LnggfHxcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgb2JqZWN0LnkgfHxcbiAgICAgIHRoaXMueCA+IG9iamVjdC54ICsgb2JqZWN0LndpZHRoIHx8IFxuICAgICAgdGhpcy55ID4gb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0XG4gICAgKTtcbiAgfVxuICBcbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCBoZWlnaHQsIHdpZHRoKTtcbiAgfVxuICBcbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgIHRoaXMueSArPSB0aGlzLmR5ICogdGhpcy5keHY7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgdGhpcy5keCA9IDA7XG4gICAgICB0aGlzLmR5ID0gLTE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgdGhpcy5keCA9IDA7XG4gICAgICB0aGlzLmR5ID0gMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmR4ID0gMTtcbiAgICAgIHRoaXMuZHkgPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5keCA9IC0xO1xuICAgICAgdGhpcy5keSA9IDA7XG4gICAgfVxuICB9XG59OyIsImxldCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbmxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5sZXQgc3RhcnRHYW1lID0gbmV3IEdhbWUoKTtcbmxldCBmaXJzdEJpa2UgPSBzdGFydEdhbWUucGxheWVyMTtcbmxldCBzZWNvbmRCaWtlID0gc3RhcnRHYW1lLnBsYXllcjI7XG5sZXQgcHJlc3NQbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzLXBsYXknKTtcbmxldCBzY29yZVVubyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZTEnKTtcbmxldCBzY29yZURvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZTInKTtcbmxldCB0Rm9udCA9ICcxN3B4IHRyb24nO1xubGV0IHRBbGlnbiA9ICdjZW50ZXInO1xubGV0IHRCYXNlID0gJ21pZGRsZSc7XG5sZXQgdEZpbGwgPSAnd2hpdGUnO1xuXG5wcmVzc1BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lTG9vcCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbnh0THZsRXZlbnQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWJvYXJkRXZlbnQpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlfYXVkaW9cIikucGxheSgpO1xufTtcblxuZnVuY3Rpb24gcmVzZXRDYW52YXMoKSB7XG4gIGlmIChzdGFydEdhbWUucGxheWVyMVNjb3JlID09PSAzKSB7XG4gICAgY2xlYXJHYW1lKCk7XG4gICAgY29udGV4dC5maWxsVGV4dCgnUExBWUVSIDEgV0lOUycsIDE1MCwgNTApOyBcbiAgICBzdGFydEdhbWUucGxheWVyMVNjb3JlID0gMDtcbiAgICBzdGFydEdhbWUucGxheWVyMlNjb3JlID0gMDtcbiAgfVxuICBpZiAoc3RhcnRHYW1lLnBsYXllcjJTY29yZSA9PT0gMykge1xuICAgIGNsZWFyR2FtZSgpO1xuICAgIGNvbnRleHQuZmlsbFRleHQoJ1BMQVlFUiAyIFdJTlMnLCAxNTAsIDUwKTsgXG4gICAgc3RhcnRHYW1lLnBsYXllcjFTY29yZSA9IDA7XG4gICAgc3RhcnRHYW1lLnBsYXllcjJTY29yZSA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJHYW1lKCkge1xuICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjb250ZXh0LmZvbnQgPSB0Rm9udDtcbiAgY29udGV4dC50ZXh0QWxpZ24gPSB0QWxpZ247XG4gIGNvbnRleHQudGV4dEJhc2VsaW5lID0gdEJhc2U7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gdEZpbGw7IFxufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgaWYgKCFzdGFydEdhbWUuaXNHYW1lT3ZlciAmJiAhc3RhcnRHYW1lLnN0b3BwZWQpIHtcbiAgICBzdGFydEdhbWUuYW5pbWF0ZShjb250ZXh0KTtcbiAgICBzdGFydEdhbWUuY3JlYXRlVHJhaWwoKTtcbiAgICBzdGFydEdhbWUudHJhaWxDb2xsaXNpb24oKTtcbiAgICBzdGFydEdhbWUud2FsbENvbGxpc2lvbihjYW52YXMpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH0gZWxzZSB7IFxuICAgIHN0YXJ0R2FtZS5zdG9wcGVkID0gdHJ1ZTtcbiAgICBjb250ZXh0LmZvbnQgPSB0Rm9udDtcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9IHRBbGlnbjtcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IHRCYXNlO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdEZpbGw7IFxuICAgIGNvbnRleHQuZmlsbFRleHQoJ1NQQUNFIEJBUiBUTyBDT05USU5VRScsIDE1MCwgOTApOyBcbiAgICBzdGFydEdhbWUuZW5kR2FtZSgpO1xuICAgIHJlc2V0Q2FudmFzKCk7XG4gIH1cbiAgc2NvcmVVbm8uaW5uZXJIVE1MID0gc3RhcnRHYW1lLnBsYXllcjFTY29yZTtcbiAgc2NvcmVEb3MuaW5uZXJIVE1MID0gc3RhcnRHYW1lLnBsYXllcjJTY29yZTtcbn1cblxuZnVuY3Rpb24ga2V5Ym9hcmRFdmVudChlKSB7XG4gIGxldCBhS2V5ID0gIXN0YXJ0R2FtZS5rZXlQcmVzc2VkO1xuXG4gIHN3aXRjaCAoYUtleSkge1xuICBjYXNlIGUua2V5Q29kZSA9PT0gNjUgJiYgZmlyc3RCaWtlLmRpcmVjdGlvbiAhPT0gJ3JpZ2h0JyA6XG4gICAgZmlyc3RCaWtlLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICBicmVhaztcbiAgY2FzZSBlLmtleUNvZGUgPT09IDg3ICYmIGZpcnN0QmlrZS5kaXJlY3Rpb24gIT09ICd1cCcgOlxuICAgIGZpcnN0QmlrZS5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgYnJlYWs7XG4gIGNhc2UgZS5rZXlDb2RlID09PSA2OCAmJiBmaXJzdEJpa2UuZGlyZWN0aW9uICE9PSAnbGVmdCcgOlxuICAgIGZpcnN0QmlrZS5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgIGJyZWFrO1xuICBjYXNlIGUua2V5Q29kZSA9PT0gODMgJiYgZmlyc3RCaWtlLmRpcmVjdGlvbiAhPT0gJ2Rvd24nIDpcbiAgICBmaXJzdEJpa2UuZGlyZWN0aW9uID0gJ3VwJztcbiAgICBicmVhaztcbiAgY2FzZSBlLmtleUNvZGUgPT09IDM3ICYmIHNlY29uZEJpa2UuZGlyZWN0aW9uICE9PSAncmlnaHQnIDpcbiAgICBzZWNvbmRCaWtlLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICBicmVhaztcbiAgY2FzZSBlLmtleUNvZGUgPT09IDQwICYmIHNlY29uZEJpa2UuZGlyZWN0aW9uICE9PSAnZG93bicgOlxuICAgIHNlY29uZEJpa2UuZGlyZWN0aW9uID0gJ3VwJztcbiAgICBicmVhaztcbiAgY2FzZSBlLmtleUNvZGUgPT09IDM5ICYmIHNlY29uZEJpa2UuZGlyZWN0aW9uICE9PSAnbGVmdCcgOlxuICAgIHNlY29uZEJpa2UuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICBicmVhaztcbiAgY2FzZSBlLmtleUNvZGUgPT09IDM4ICYmIHNlY29uZEJpa2UuZGlyZWN0aW9uICE9PSAndXAnIDpcbiAgICBzZWNvbmRCaWtlLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICBicmVhaztcbiAgfSBcbn1cblxuZnVuY3Rpb24gbnh0THZsRXZlbnQgKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMzIgJiYgc3RhcnRHYW1lLnBsYXllcjFTY29yZSA8IDMgfHwgXG4gIGUua2V5Q29kZSA9PT0gMzIgJiYgc3RhcnRHYW1lLnBsYXllcjJTY29yZSA8IDMpIHtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIHN0YXJ0R2FtZS5zdG9wcGVkID0gZmFsc2U7XG4gICAgc3RhcnRHYW1lLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICBmaXJzdEJpa2UueCA9IDMwO1xuICAgIGZpcnN0QmlrZS55ID0gNTA7XG4gICAgc2Vjb25kQmlrZS54ID0gMjcwO1xuICAgIHNlY29uZEJpa2UueSA9IDUwO1xuICAgIGZpcnN0QmlrZS5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgIHNlY29uZEJpa2UuZGlyZWN0aW9uID0gJ2xlZnQnO1xuICAgIHN0YXJ0R2FtZS5rZXlQcmVzc2VkID0gZmFsc2U7XG4gICAgc3RhcnRHYW1lLnRyYWlsMSA9IFtdO1xuICAgIHN0YXJ0R2FtZS50cmFpbDIgPSBbXTtcbiAgICBnYW1lTG9vcCgpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==