'use strict';

var anchors = [].slice.call(document.querySelector(".anchors").firstElementChild.children);
var listeners = ['init', 'update', 'scroll.before', 'scroll.start', 'scroll', 'scroll.end'];
var list = document.getElementById("listeners");
var toggle = document.getElementById("settings-open");
// var settings = document.getElementById("settings");
var inputs = document.querySelectorAll("input");
var buttons = document.querySelectorAll("button");
var selects = document.querySelectorAll("select");

var pageable = new Pageable("main", {
    animation: 400,
    onFinish: update,
    events: {
        mouse: false
    },
    onScroll: duration_animation
});

function update(data) {
    var that = this;
    anchors.forEach(function (anchor, i) {
        anchor.firstElementChild.classList.toggle("active", i === that.index);
    });
}


/**
 * Created by jing on 2019/10/28.
 */

//List of variables which always looks so ugly.. unlike Pikachu, he's cute

    //List of variables which always looks so ugly.. unlike Pikachu, he's cute
var $wrapper = $('.wrapper');
// 格子會不對
var $square = $('.square');
var $body = $('body');


var $windowHeight = window.innerHeight;
var $windowWidth = window.innerWidth;

document.ontouchmove = function (event) {
    event.preventDefault();
}


/*
 // CLICK METHODS
 */
//Start the epicness of battling...... a present!
var battle = false;
var $overlay = $('.overlay');
var $pixel = $('.main-container .pixel');
var smallScreen = $windowWidth <= 768;
var medScreen = $windowWidth > 768 && $windowWidth <= 1024;
//For some reason body click wouldn't work on iPad so I had to make an overlay.. stupid freakin iPads
function duration_animation() {


    if (battle === false) {
        var battleTimeline = new TimelineMax({
            delay: 1
        });
        battleTimeline
            .set($overlay, {
                // css: {
                //     display: 'none'
                // }
            })
            .set($square, {
                css: {
                    display: 'block'
                }
            })
            .set($wrapper, {
                css: {
                    display: 'block'
                }
            })
            .to($wrapper, 0.2, {
                autoAlpha: 0.7
            }, 0)
            .to($wrapper, 0.2, {
                autoAlpha: 0.2
            })
            .to($wrapper, 0.2, {
                autoAlpha: 0.7
            })
            .to($wrapper, 0.2, {
                autoAlpha: 0.2,
                onComplete: battleBlackScreen
            })
            .to($wrapper, 1, {
                autoAlpha: 0
            })
            .set($wrapper, {
                autoAlpha: 0
            }, '+=1')
            .set($square, {
                css: {
                    // 設定結束後的顏色
                    backgroundColor: 'transparent'
                }
            })

    } else if (battle === true && !$body.hasClass('is-animating')) {
        var explodeTL = new TimelineMax();
        explodeTL.set($body, {
            className: '+=is-animating'
        });
        for (var i = 0; i < $pixel.length; i++) {
            var randomNumberX = generateNum(1, 5);
            var randomNumberY = generateNum(1, 8);
            explodeTL.to($pixel[i], 3, {
                y: randomNumberY,
                x: randomNumberX,
                ease: Power2.easeOut
            }, 0);
        }
        ;
        explodeTL
            .to($pixel, 3, {
                y: 0,
                x: 0,
                ease: Power2.easeIn,
                onComplete: unPauseTimeline
            })
            .set($body, {
                className: '-=is-animating'
            });


    }
}
$overlay.on('click', duration_animation);

var $open = $('.attack.open');

$open.on('click', function () {
    var openTL = new TimelineMax();

    openTL
        .set($square, {
            css: {
                display: 'none'
            }
        })
        .set($wrapper, {
            autoAlpha: 1
        })
        .to($wrapper, 1, {
            css: {
                backgroundColor: '#2B2E39'
            }
        })
        .to($wrapper, 1, {
            autoAlpha: 0
        })
        .set($wrapper, {
            css: {
                display: 'block'
            }
        }, '-=1')
        .fromTo($wrapper, 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        }, '-=1')
        .set($overlay, {
            css: {
                display: 'block'
            }
        });

    setTimeout(function () {
        battle = true;
    }, 3000);

});


/*
 // FUNCTIONS
 */

//Making the sequence random also makes it easier.
function battleBlackScreen() {
    var blackBattle = new TimelineMax();
    var $shuffledArray = Shuffle($square);
    for (var i = 0; i < $square.length; i++) {

        blackBattle.to($shuffledArray[i], 0.03, {
            autoAlpha: 1
        });
    }
    ;
};

//Shuffle array function/technique by Chris Coyier at: https://css-tricks.com/snippets/javascript/shuffle-array/

function Shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function randomNumber(num1, num2) {
    var time = Math.floor((Math.random() * num1) + num2);
    return time;
};
