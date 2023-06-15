/**
 * Created by jing on 2019/5/3.
 */

// canvas love image
var s = c.width = c.height = 650,
    ctx = c.getContext('2d'),
    opts = {
        balloons: 800,
        baseSize: 10,
        addedSize: 10,
        speedX: 3,
        sizeAccelerationYMultiplier: -.02,
        baseStringLengthMultiplier: 4,
        addedStringLengthMultiplier: 2,
        balloonBaseSettlingTime: 30,
        balloonAddedSettlingTime: 60,
        balloonBaseLeavingTime: 160,
        balloonAddedLeavingTime: 30,
        globalBalloonResettingTime: 250,

        //  圖片大小
        heartSide: 180,
        squareProbability: 1 / ( 1 + Math.PI / 4 ),
        halfCircleProbability: ( 1 - 1 / ( 1 + Math.PI / 4 ) ) / 2,
        heartRotCos: Math.cos(Math.PI + Math.PI / 4),
        heartRotSin: Math.sin(Math.PI + Math.PI / 4),
        heartBaseX: s / 2,
        heartBaseY: s / 2 + 90,

        getRandomPoint: function () {
            // this is probably the hardest part: trying to make a function that
            // returns an x,y with even distribution inside of a heart

            // so, it's basically a tilted square with 2 half circles on the sides, right?
            // if the total area of the square is l^2, then the area of one of the half circles is pi*((l/2)^2)/2
            // so the total area of the heart is l^2 + pi * (l/2)^2 = l^2 + l^2 * pi / 4 = (l^2)( 1 + pi/4 )
            // the chance that the random point is in the square is then (l^2) divided by that, so it's simply 1/(1+pi/4)
            // therefore the probability that it goes into one of the half circles is ( 1 - ( squareProbability ) ) /2
            // and that is what I've done in the 2 previews `opts` properties

            var probability = Math.random(), // can't think for a better name of this variable
                x, y;

            // I'm going to make the system perpendicular to the x,y for the sake of simplicity, then rotate by -pi/2+pi/4 (135deg) at the end

            if (probability < opts.squareProbability) {

                // now the point is anywhere in the square
                x = Math.random() * opts.heartSide;
                y = Math.random() * opts.heartSide;
            } else if (probability < opts.squareProbability + opts.halfCircleProbability) {

                // now it's in the top half-circle
                // could use some fancy formulas, but just to make sure I'll use the common way of putting a point in a circle
                var rad = Math.random() * Math.PI,
                    len = opts.heartSide / 2 * Math.sqrt(Math.random()); // the last bit is to spread evenly

                // don't forget to center the circle
                x = opts.heartSide / 2 + len * Math.cos(rad);
                y = opts.heartSide + len * Math.sin(rad);

            } else {

                // this is the other half-circle now
                var rad = -Math.PI / 2 + Math.random() * Math.PI,
                    len = opts.heartSide / 2 * Math.sqrt(Math.random()); // the last bit is to spread evenly

                // don't forget to center the circle
                x = opts.heartSide + len * Math.cos(rad);
                y = opts.heartSide / 2 + len * Math.sin(rad);
            }

            // now rotate the heart
            var x1 = x;
            x = x * opts.heartRotCos - y * opts.heartRotSin;
            y = y * opts.heartRotCos + x1 * opts.heartRotSin;

            // return the translated result
            return {
                x: x + opts.heartBaseX,
                y: s - ( y + opts.heartBaseY )
            };

            // hardest bit is done!
            // at least, mathy bit
            // there will be a very basic amount of wave knowledge for the balloon's smooth movement
        }
    },

    balloons = [],
    tick = 0;

// device is small 375px
var winWt = $(window).width();
if(winWt <= 375) {
    opts.heartSide = 160;
}

function Balloon() {
    this.reset();
}
Balloon.prototype.reset = function () {

    this.size = opts.baseSize + opts.addedSize * Math.random();
    this.stringLength = this.size * ( opts.baseStringLengthMultiplier + opts.addedStringLengthMultiplier * Math.random() );
    this.settlingTime = opts.balloonBaseSettlingTime + opts.balloonAddedSettlingTime * Math.random();
    this.leavingTime = opts.balloonBaseLeavingTime + opts.balloonAddedLeavingTime * Math.random();

    this.target = opts.getRandomPoint();

    this.x = this.target.x;
    this.y = s;

    this.vy = 0;
    this.vx = opts.speedX * 2 * ( Math.random() - .5 );
    this.ay = this.size * opts.sizeAccelerationYMultiplier;

    this.points = [
        [0, 0], // balloon bottom
        [-this.size / 2, -this.size / 2], // bezier 1 left
        [-this.size / 4, -this.size], // bezier 2 left
        [0, -this.size], // balloon top
        [this.size / 2, -this.size / 2], // bezier 1 right
        [this.size / 4, -this.size], // bezier 2 right
    ];

    for (var i = 0; i < this.points.length; ++i)
        this.points[i] = {
            x: this.points[i][0],
            y: this.points[i][1]
        };
}
Balloon.prototype.step = function () {

    if (tick <= this.settlingTime) {

        // still going to the target
        var prop = tick / this.settlingTime * Math.PI;

        // so, when prop is 0 we want max velocity, and y=0
        // and when it reaches it's maximum at 1 we want it to stop at this.target.y
        // I think this works
        this.y = s - this.target.y * Math.sin(prop / 2)

    } else if (tick >= this.leavingTime) {

        //it's leaving the heart
        this.x += this.vx;
        this.y += this.vy += this.ay;

    } else {

        // it's in the heart
        this.x = this.target.x;
        this.y = s - this.target.y;
    }

    // ok, need to draw now :D
    ctx.translate(this.x, this.y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, this.stringLength);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y); // balloon bottom
    ctx.bezierCurveTo(
        this.points[1].x, this.points[1].y, // balloon bezier left 1
        this.points[2].x, this.points[2].y, // balloon bezier left 2
        this.points[3].x, this.points[3].y  // balloon top
    );
    ctx.bezierCurveTo(
        this.points[5].x, this.points[5].y, // balloon bezier right 2
        this.points[4].x, this.points[4].y, // balloon bezier right 1
        this.points[0].x, this.points[0].y  // balloon bottom
    );
    ctx.fill();

    ctx.translate(-this.x, -this.y);
}

function anim() {

    window.requestAnimationFrame(anim);

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'transparent';
    ctx.fillStyle = '#FADBE6';
    ctx.fillRect(0, 0, s, s);

    ++tick;

//        ctx.globalCompositeOperation = 'lighter';
//        ctx.fillStyle = 'rgba(200,0,0,1)';
//        氣球顏色 f7c1cf
    ctx.fillStyle = 'rgba(247,80,83,.5)';
//        ctx.fillStyle = 'rgba(200,0,0,.3)';
    ctx.strokeStyle = 'rgba(200,200,200,0)';
    ctx.lineWidth = .3;

    if (tick >= opts.globalBalloonResettingTime) {

        balloons.map(function (balloon) {
            balloon.reset();
        });
        tick = 0;
    }

    balloons.map(function (balloon) {
        balloon.step();
    });
}

for (var i = 0; i < opts.balloons; ++i)
    balloons.push(new Balloon);

anim();