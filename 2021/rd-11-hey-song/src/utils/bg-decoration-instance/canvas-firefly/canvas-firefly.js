export var initinitCanvasFirefly = window.addEventListener('load', function(){makeCanvasFirefly("canvasFirefly", "goodsFlip");});


function makeCanvasFirefly(el, parents) {
  var canvas = document.getElementById(el);
  var parents = document.getElementById(parents);
  
  var c = init(el),
    w = (canvas.width = parents.clientWidth),
    h = (canvas.height = parents.clientHeight);
  //initiation

  class firefly {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      // size
      this.s = Math.random() * 3;
      this.ang = Math.random() * 2 * Math.PI;
      this.v = this.s * this.s / 4;
    }
    move() {
      this.x += this.v * Math.cos(this.ang);
      this.y += this.v * Math.sin(this.ang);
      this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
    }
    show() {
      c.beginPath();
      c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
      c.fillStyle = "#fddba3";
      c.fill();
    }
  }

  var f = [];

  function draw() {
    // f.length數量
    if (f.length < 10) {
      for (var j = 0; j < 10; j++) {
        f.push(new firefly());
      }
    }
    //animation
    for (var i = 0; i < f.length; i++) {
      f[i].move();
      f[i].show();
      if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
        f.splice(i, 1);
      }
    }
  }

  var mouse = {};
  var last_mouse = {};

  canvas.addEventListener(
    "mousemove",
    function (e) {
      last_mouse.x = mouse.x;
      last_mouse.y = mouse.y;

      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    },
    false
  );
  function init(elemid) {
    var canvas = document.getElementById(elemid),
      c = canvas.getContext("2d"),
      w = (canvas.width = parents.clientWidth),
      h = (canvas.height = parents.clientHeight);
    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, w, h);
    return c;
  }

  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback);
      }
    );
  });

  function loop() {
    window.requestAnimFrame(loop);
    c.clearRect(0, 0, w, h);
    draw();
  }

  window.addEventListener("resize", function () {
    (w = canvas.width = parents.clientWidth),
      (h = canvas.height = parents.clientHeight);
    loop();
  });

  loop();
  setInterval(loop, 1000 / 60);
}