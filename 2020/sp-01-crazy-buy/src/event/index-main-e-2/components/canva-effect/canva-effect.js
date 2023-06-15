// import {isIE9} from 'utils/js/detect.js'
// import {detectApp} from 'utils/js/detect.js'
// import {isNeedSlider} from 'utils/js/detect.js'
//
// export var initCanvasEffect = detectApp(window.addEventListener('load', CanvasEffect), CanvasEffect);
//
// function CanvasEffect() {
    var fireworks = [];
    var particles = [];

    function setup() {
        createCanvas(window.innerWidth, window.innerHeight);
    }


    function Firework() {
        this.pos = createVector(random(width), height);
        this.vel = createVector(0, random(-15, 0));
        this.acc = createVector(0, 0.2);
        this.size = 10;
        this.col = color(random(255), random(255), random(255));
        this.exploded = false;
    }

    Firework.prototype.show = function() {
        fill(this.col);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }

    Firework.prototype.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    Firework.prototype.calculate = function() {
        if(this.vel.y > 0) {
            this.explode();
            this.exploded = true;
        }
    }

    Firework.prototype.explode = function() {
        for(var i = 0; i < 30; i++) {
            particles.push(new Particle(this.pos.x, this.pos.y, this.col));
        }
    }


    function Particle(x, y, col) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(7));
        this.acc = createVector(0, 0.05);
        this.a = 255;
        this.col = color(red(col), green(col), blue(col), this.a);
        this.done = false;
        this.size = 5;
    }

    Particle.prototype.update = function() {
        this.vel.add(this.acc);
        this.vel.mult(0.9);
        this.pos.add(this.vel);
        this.a-=5;
        if(this.a < 0) {
            this.done = true;
        }
    }

    Particle.prototype.show = function() {
        this.col = color(red(this.col), green(this.col), blue(this.col), this.a);
        fill(this.col);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }


    function draw() {
        background(0);
        //- 調整畫布出現點的速度
        if(random() < 0.05) {
            fireworks.push(new Firework());
        }
        for(var i = fireworks.length-1; i >= 0; i--) {
            fireworks[i].show();
            fireworks[i].update();
            fireworks[i].calculate();
            if(fireworks[i].exploded) {
                fireworks.splice(i, 1);
            }
        }
        for(var i = particles.length-1; i >= 0; i--) {
            particles[i].show();
            particles[i].update();
            if(particles[i].done) {
                particles.splice(i, 1);
            }
        }
    }
// }
