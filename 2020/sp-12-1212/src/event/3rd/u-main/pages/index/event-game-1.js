// import {detectApp} from 'utils/js/detect.js'

export var initBuildShowFall = buildShowFall();

function buildShowFall() {
    function snowfall(flakeCount, minSpeed, maxSpeed, minSize, maxSize) {
        $('#js-snow').snowfall('clear');
        $('#js-snow').snowfall({
            image: "snow.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "snow-2.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        });
    }

    var winWt = document.body.clientWidth;
    if (winWt >= 960) {
        window.addEventListener('load', snowfall(8, 2, 4, 10, 40));
    }
    else if (winWt >= 768 && winWt < 960) {
        window.addEventListener('load', snowfall(5, 1, 2, 6, 20));
    }
    else {
        window.addEventListener('load', snowfall(3, 1, 2, 3, 10));
    }
    window.addEventListener('resize', function () {
        winWt = document.body.clientWidth;
        if (winWt >= 960) {
            snowfall(7, 1, 2, 10, 40);
        }
        else if (winWt >= 768 && winWt < 960) {
            // location.reload();
            snowfall(5, 1, 2, 6, 20);
        }
        else {
            // location.reload();
            snowfall(3, 1, 2, 3, 10);
        }
    });
}

