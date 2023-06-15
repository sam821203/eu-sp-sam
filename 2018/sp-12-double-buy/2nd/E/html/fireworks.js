/**
 * Created by jing on 2018/11/22.
 */

'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var RenderLoop = function () {
    function RenderLoop(cb) {
        var _this = this;

        var fps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, RenderLoop);

        this.currentFps = 0;
        this.isActive = false;
        this.msLastFrame = performance.now();
        this.cb = cb;
        this.totalTime = 0;

        if (fps && typeof fps === 'number' && !Number.isNaN(fps)) {
            this.msFpsLimit = 1000 / fps;
            this.run = function () {
                var currentTime = performance.now();
                var msDt = currentTime - _this.msLastFrame;
                _this.totalTime += msDt;
                var dt = msDt / 1000;

                if (msDt >= _this.msFpsLimit) {
                    _this.cb(dt, _this.totalTime);
                    _this.currentFps = Math.floor(1.0 / dt);
                    _this.msLastFrame = currentTime;
                }

                if (_this.isActive) window.requestAnimationFrame(_this.run);
            };
        } else {
            this.run = function () {
                var currentTime = performance.now();
                var dt = (currentTime - _this.msLastFrame) / 1000;
                _this.totalTime += currentTime - _this.msLastFrame;
                _this.cb(dt, _this.totalTime);
                _this.currentFps = Math.floor(1.0 / dt);
                _this.msLastFrame = currentTime;
                if (_this.isActive) window.requestAnimationFrame(_this.run);
            };
        }
    }

    _createClass(RenderLoop, [{
        key: 'changeCb',
        value: function changeCb(cb) {
            this.cb = cb;
        }
    }, {
        key: 'start',
        value: function start() {
            this.msLastFrame = performance.now();
            this.isActive = true;
            window.requestAnimationFrame(this.run);
            return this;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.isActive = false;
            return this;
        }
    }]);

    return RenderLoop;
}();

var particles = [];
var fireworks = [];

var Particle = function () {
    function Particle(x, y, colorObj, bornTime) {
        _classCallCheck(this, Particle);

        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        this.speed = Math.random() / 2;
        this.angle = Math.random() * 2 * Math.PI; //
        this.color = colorObj;
        this.gravity = 1 / 1000;
        this.speedX0 = this.speed * Math.cos(this.angle);
        this.speedY0 = this.speed * Math.sin(this.angle);
        this.lastX = this.x;
        this.lastY = this.y;
        this.alpha = 0.6 + 0.4 * Math.random();
        this.decay = (10 + 40 * Math.random()) / 800;
        this.bornTime = bornTime;
    }

    _createClass(Particle, [{
        key: 'update',
        value: function update(index, tNow) {
            this.lastX = this.x;
            this.lastY = this.y;
            var timeSpan = tNow - this.bornTime;
            this.x = this.startX + this.speedX0 * timeSpan;
            this.y = this.startY + this.speedY0 * timeSpan + 0.5 * this.gravity * timeSpan * timeSpan;
            this.alpha -= this.decay;
            if (this.alpha < 0.05 || outRange(this.x, this.y, cvsWidth, cvsHeight)) {
                particles.splice(index, 1);
            }
        }
    }, {
        key: 'draw',
        value: function draw() {
            ctx.beginPath();
            ctx.moveTo(this.lastX, this.lastY);
            ctx.lineTo(this.x, this.y);
            ctx.closePath();
            ctx.strokeStyle = 'rgba(' + this.color.red + ',' + this.color.green + ',' + this.color.blue + ',' + this.alpha + ')';
            ctx.stroke();
        }
    }]);

    return Particle;
}();

var Firework = function () {
    function Firework(startX, startY, colorObj, bornTime) {
        _classCallCheck(this, Firework);

        this.x = startX;
        this.y = startY;
        this.speed = -Math.random() * 0.1;
        this.endX = startX;
        this.endY = 100 + 200 * Math.random();
        this.color = colorObj;
        this.alpha = 0.6 + 0.4 * Math.random();
        this.bornTime = bornTime;
        this.coordLast = [{x: this.x, y: this.y}, {x: this.x, y: this.y}, {x: this.x, y: this.y}];
        this.tLast = bornTime;
        this.accerlation = -(0.002 + 0.003 * Math.random());
    }

    _createClass(Firework, [{
        key: 'update',
        value: function update(index, tNow) {
            this.coordLast[2].y = this.coordLast[1].y;
            this.coordLast[1].y = this.coordLast[0].y;
            this.coordLast[0].y = this.y;
            this.y += this.speed * (tNow - this.tLast);
            this.tLast = tNow;
            this.speed += this.accerlation;
            if (this.y <= this.endY) {
                fireworks.splice(index, 1);
                createParticles(this.endX, this.endY, 200 + 500 * Math.random(), tNow);
            }
        }
    }, {
        key: 'draw',
        value: function draw() {
            ctx.beginPath();
            var rand = Math.round(Math.random() * 2);
            ctx.moveTo(this.x, this.coordLast[rand].y);
            ctx.lineTo(this.x, this.y);
            ctx.closePath();
            ctx.strokeStyle = 'rgba(' + this.color.red + ',' + this.color.green + ',' + this.color.blue + ',' + this.alpha + ')';
            ctx.stroke();
        }
    }]);

    return Firework;
}();

var outRange = function outRange(x, y, w, h) {
    return x < 0 || x > w || y < 0 || y > h;
};

var createParticles = function createParticles(x, y, counts, bornTime) {
    for (var i = 0; i < counts; i++) {
        particles.push(new Particle(x, y, getRandomColor(), bornTime));
    }
};

var getRandomColor = function getRandomColor() {
    var red = Math.round(255 * Math.random());
    var green = Math.round(255 * Math.random());
    var blue = Math.round(255 * Math.random());
    return {
        red: red,
        green: green,
        blue: blue
    };
};

var updateParticles = function updateParticles(t) {
    for (var i = particles.length - 1; i >= 0; i--) {
        particles[i].update(i, t);
    }
};

var drawParticles = function drawParticles() {
    for (var i = particles.length - 1; i >= 0; i--) {
        particles[i].draw();
    }
};

var createFirework = function createFirework(bornTime) {
    // let bornTime = +new Date();
    fireworks.push(new Firework((0.1 + 0.8 * Math.random()) * cvsWidth, cvsHeight, getRandomColor(), bornTime));
};

var updateFireworks = function updateFireworks(t) {
    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update(i, t);
    }
};

var drawFireworks = function drawFireworks() {
    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].draw();
    }
};

var canvas = document.getElementById('firefork');
var ctx = canvas.getContext('2d');

var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
    cvsWidth = _canvas$getBoundingCl.width,
    cvsHeight = _canvas$getBoundingCl.height;

var tNow = 0;
var timeStart = performance.now();
var createFireworAccu = 0;
new RenderLoop(function (dt, totalTime) {
    totalTime *= 0.66;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.fillRect(0, 0, cvsWidth, cvsHeight);
    updateParticles(totalTime);
    updateFireworks(totalTime);
    ctx.globalCompositeOperation = 'lighter';
    drawParticles();
    drawFireworks();
    createFireworAccu += dt * 300;
    if (createFireworAccu >= 500) {
        createFirework(totalTime);
        createFireworAccu = 0;
    }
}).start();
