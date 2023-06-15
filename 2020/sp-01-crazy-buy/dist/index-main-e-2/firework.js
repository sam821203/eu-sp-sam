/*********************

 Made by Atomk
 https://codepen.io/Atomk
 https://www.freecodecamp.com/atomk


 FEATURES:
 - Automatically generates fireworks in random positions
 - You can click anywhere on the page to generate a firework
 - Canvas and text fully responsive!

 TODO:
 - See how the page looks without JS
 - See how the page looks if loaded with a browser which does not support canvas
 - Check performance on slow PC
 - Randomize some firework parameters
 - Different kinds of fireworks!
 - Multicolor fireworks!
 - Draw the launching phase of the fireworks (the actual "rocket" going up before exploding)
 - Play or generate a sound for the explosions


 **********************/

var canvas;
var gctx;   // Graphic context
var fireworks = [];   // Each firework will be an element of this array

window.addEventListener("load", function() {
    canvas = document.querySelector("canvas");

    // If canvas is supported
    if(canvas.getContext) {
        canvas.width = document.body.clientWidth;
        canvas.height = document.querySelector(".hero__wrap").clientHeight;

        gctx = canvas.getContext("2d");

        window.addEventListener("resize", handlePageResize);
        document.body.addEventListener("click", handleCanvasClick);
        window.requestAnimationFrame(animationLoop);
    }
});

function animationLoop() {
    gctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log()
    // Randomly generate a firework
    if(Math.random() < 0.1 && canvas.width >= '768')
        fireworks.push(new Firework(Math.floor(Math.random()*canvas.width), Math.floor(Math.random()*canvas.height)));
    else if(Math.random() < 0.03 && canvas.width < '768')
        fireworks.push(new Firework(Math.floor(Math.random()*canvas.width), Math.floor(Math.random()*canvas.height)));
    // Draw each firework in the array (so you can have multiple fireworks at the same time)
    fireworks.forEach(function(f) {
        // Draw a firework only if it still has visible particles
        if(!f.isFinished())
            f.draw(gctx);
    });

    window.requestAnimationFrame(animationLoop);
}

/** Resizes the canvas to make it look responsive. */
function handlePageResize() {
    canvas.width = document.querySelector("body").clientWidth;

    canvas.height = document.querySelector(".hero__wrap").clientHeight;
}

function handleCanvasClick(e) {
    //gctx.fillStyle = "#a55";
    //gctx.fillRect(e.clientX, e.clientY, 2, 2);
    fireworks.push(new Firework(e.clientX, e.clientY));
}

var Firework = function(_x, _y) {
    var targetX = _x;
    var targetY = _y;
    var power = 2;  // Affects the movement speed of the particles
    var particles = [];
    var hue = Math.floor(Math.random()*360);

    var deadCount = 0;
    // 噴出多少點
    var numParticles = 100;

    var gravity = 0.1;
    var airResistence = 1.02;  // It must be greater than 1 to avoid weird results.

    this.draw = function(context) {
        // TODO - Animation should stop when all particles are invisible
        particles.forEach(function(p) {
            p.update(gravity, airResistence);
            p.draw(context);
        });
    };

    this.particleDead = function() {
        deadCount++;
    };

    this.isFinished = function() {
        return deadCount == numParticles;
    };

    for(var i=0; i<numParticles; i++) {
        var randomAngle = Math.random()*Math.PI*2;
        var dx = Math.cos(randomAngle)*(power*Math.random());
        var dy = Math.sin(randomAngle)*(power*Math.random());
        particles.push(new Particle(targetX, targetY, 4, dx, dy, hue, this.particleDead));
    }
};

var Particle = function(_x, _y, _radius, _dx, _dy, _hue, onDeath) {
    var x = _x;
    var y = _y;
    var radius = _radius;
    var dx = _dx;
    var dy = _dy;
    var hue = _hue;
    var timeOfLife = 0;
    var opacity = 1;
    var dead = false;

    // Gravity and air resistance affect how X and Y change
    this.update = function(gravity, airResistance) {
        timeOfLife++;

        if(timeOfLife > 35 && !dead) {
            // Opacity decreases only after a certain time (35 frames)
            opacity -= 0.03;
            if(opacity < 0) {
                opacity = 0;
                dead = true;
                onDeath();  // Tells the firework object this particle should not be drawn again (increase a counter, if the counter = numParticles stop drawing the firework)
            }
        }

        //dy += gravity;
        //dx /= airResistance;
        x += dx;
        y += dy;
    };

    this.draw = function(context) {
        // NOTE: lightness 100% will make every color white.
        context.fillStyle = "hsla(" + hue + ", 100%, 70%, " + opacity + ")";
        context.fillRect(x, y, radius, radius);
    };
};