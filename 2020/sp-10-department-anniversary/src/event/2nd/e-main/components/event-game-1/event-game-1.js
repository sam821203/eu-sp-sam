// import {detectApp} from 'utils/js/detect.js'

export var initBuildShowFall = buildShowFall();

function buildShowFall() {
    function snowfall(flakeCount, minSpeed, maxSpeed, minSize, maxSize) {
        $('#js-red__envelope__wrap').snowfall('clear');
        $('#js-red__envelope__wrap').snowfall({
            image: "game-1-red-1.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "game-1-red-2.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        }).snowfall({
            image: "game-1-money.png",
            flakeCount: flakeCount,
            minSpeed: minSpeed,
            maxSpeed: maxSpeed,
            minSize: minSize,
            maxSize: maxSize,
        });
    }

    var winWt = document.body.clientWidth;
    if (winWt >= 960) {
        window.addEventListener('load', snowfall(7, 1, 2, 25, 65));
    }
    else if (winWt >= 768 && winWt < 960) {
        window.addEventListener('load', snowfall(5, 1, 2, 20, 50));
    }
    else {
        window.addEventListener('load', snowfall(3, 1, 2, 10, 30));
    }
    window.addEventListener('resize', function () {
        winWt = document.body.clientWidth;
        if (winWt >= 960) {
            snowfall(7, 4, 10, 25, 65);
        }
        else if (winWt >= 768 && winWt < 960) {
            // location.reload();
            snowfall(5, 1, 2, 20, 50);
        }
        else {
            // location.reload();
            snowfall(3, 1, 2, 10, 30);
        }
    });
}

import {makeLink} from 'utils/js/detect.js'
import {buildByCustomTime} from 'utils/js/build-time.js'

export var initBuildByCustomTime = [
    buildByCustomTime(linkTime, [addAnchorLink]),
    buildByCustomTime(linkTime2, [addAnchorLink_2]),
];
// 第二顆誘因每日換品
function addAnchorLink(i) {
    if (!linkData) return false;

    // var anchorChangeLink = document.getElementById('heroPromoLink');
    var anchorChangeLink = document.getElementById('anchorChangeLink');
    var webLink = linkData[i].webLink;
    var mobileLink = linkData[i].mobileLink;
    var appLink = linkData[i].appLink;

    // anchorChangeLink.href = makeLink(960, appLink, webLink, mobileLink);
    anchorChangeLink.href = makeLink(960, appLink, webLink, mobileLink);

}

function addAnchorLink_2(i) {
    // 幸運瘋轉樂
    var game2ChangeHref = document.getElementById('game2ChangeHref');
    console.log(game2LinkData[i].mobileLink);
    var game2_webLink = game2LinkData[i].webLink;
    var game2_mobileLink = game2LinkData[i].mobileLink;
    var game2_appLink = game2LinkData[i].appLink;

    game2ChangeHref.href = makeLink(960, game2_appLink, game2_webLink, game2_mobileLink);
}

function addImgSrc(i) {
    if (!imgData) return false;

    var promoImg = document.querySelector('#anchorChangeLink img');

    promoImg.src = imgData[i];
}
