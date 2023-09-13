class Bubble {
    constructor(canvas) {
    }
  
    getCanvasSize() {
    }
  
    init() {
    }
  
    move() {
    }
  }
  constructor(canvas) {
    this.canvas = canvas;
  
    this.getCanvasSize();
    this.init();
  }
  getCanvasSize() {
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
  }

//   случайный цвет пузырьков
const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITY = 100;

function generateDecimalBetween(left, right) {
  return (Math.random() * (left - right) + right).toFixed(2);
}

class Bubble {
  constructor(canvas) {
    this.canvas = canvas;

    this.getCanvasSize();

    this.init();
  }

  getCanvasSize() {
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
  }

  init() {
    this.color; // = ...
    this.alpha; // = ...
    this.size; // = ...
    this.translateX; // = ...
    this.translateY; // = ...
    this.velocity = generateDecimalBetween(20, 40);
    this.movementX = generateDecimalBetween(-2, 2) / this.velocity;
    this.movementY = generateDecimalBetween(1, 20) / this.velocity;
  }

  move() {
    this.translateX; // = ...
    this.translateY; // = ...
    
    if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) {
      this.init();
      this.translateY = this.canvasHeight;
    }
  }
}

class CanvasBackground {
  constructor(id) {
    this.canvas; // = ...
    this.ctx; // = ...
    this.dpr; // = ...
  }

  start() {
    this.canvasSize();
    this.generateBubbles();
    this.animate();
  }

  canvasSize() {
    this.canvas.width; // = ...
    this.canvas.height; // = ...
    this.ctx.scale; // (...)
  }

  generateBubbles() {
    this.bubblesList; // = ...
    // ...
  }

  animate() {
    this.ctx.clearRect; // (...)

    // ...
  }
}
class CanvasBackground {
    constructor(id) {
        
    }
  
    start() {
        
    }
  }
  
  