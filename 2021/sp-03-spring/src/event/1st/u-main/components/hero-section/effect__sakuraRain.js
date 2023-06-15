// import {detectApp} from 'utils/js/detect.js'

export var initBuildSakuraFall = sakuraFall();

function sakuraFall() {
    function sakura(flakeCount, minSpeed, maxSpeed, minSize, maxSize) {
        $('#sakuraRain').snowfall('clear');
        $('#sakuraRain').snowfall({
            image: "flower-01.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "flower-02.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "flower-03.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        });
    }

    var winWt = document.body.clientWidth;
    if (winWt >= 960) {
        window.addEventListener('load', sakura(7, 1, 2, 10, 40));
    }
    else if (winWt >= 768 && winWt < 960) {
        window.addEventListener('load', sakura(5, 1, 2, 6, 20));
    }
    else {
        window.addEventListener('load', sakura(3, 1, 2, 3, 10));
    }
    window.addEventListener('resize', function () {
        winWt = document.body.clientWidth;
        if (winWt >= 960) {
            sakura(7, 1, 2, 10, 40);
        }
        else if (winWt >= 768 && winWt < 960) {
            // location.reload();
            sakura(5, 1, 2, 6, 20);
        }
        else {
            // location.reload();
            sakura(3, 1, 2, 3, 10);
        }
    });
}