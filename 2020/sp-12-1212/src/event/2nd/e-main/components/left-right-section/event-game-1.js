// import {detectApp} from 'utils/js/detect.js'

export var initBuildShowFall = buildShowFall();

function buildShowFall() {
    function snowfall(flakeCount, minSpeed, maxSpeed, minSize, maxSize) {
        $('#js-ball__wrap').snowfall('clear');
        $('#js-ball__wrap').snowfall({
            image: "https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/ball-1.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/ball-2.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/ball-3.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        });
    }
    function redEnvelopefall(flakeCount, minSpeed, maxSpeed, minSize, maxSize) {
        $('#js-red__envelope__wrap').snowfall('clear');
        $('#js-red__envelope__wrap').snowfall({
            image: "https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/game-1-red-1.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/game-1-money.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/game-1-red-2.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        });
    }

    var winWt = document.body.clientWidth;
    if (winWt >= 960) {
        window.addEventListener('load', snowfall(7, 1, 2, 10, 40));
        window.addEventListener('load', redEnvelopefall(7, 1, 2, 10, 40));
    }
    else if (winWt >= 768 && winWt < 960) {
        window.addEventListener('load', snowfall(5, 1, 2, 6, 20));
        window.addEventListener('load', redEnvelopefall(5, 1, 2, 6, 20));
    }
    else {
        window.addEventListener('load', snowfall(3, 1, 2, 3, 10));
        window.addEventListener('load', redEnvelopefall(3, 1, 2, 3, 10));
    }
    window.addEventListener('resize', function () {
        winWt = document.body.clientWidth;
        if (winWt >= 960) {
            snowfall(7, 1, 2, 10, 40);
            redEnvelopefall(7, 1, 2, 10, 40);
        }
        else if (winWt >= 768 && winWt < 960) {
            // location.reload();
            snowfall(5, 1, 2, 6, 20);
            redEnvelopefall(5, 1, 2, 6, 20);
        }
        else {
            // location.reload();
            snowfall(3, 1, 2, 3, 10);
            redEnvelopefall(3, 1, 2, 3, 10);
        }
    });
}

