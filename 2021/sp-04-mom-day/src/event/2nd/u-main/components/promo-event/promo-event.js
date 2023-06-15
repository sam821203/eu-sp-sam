import { makeLink } from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initBuildByCustomTime = [
    buildByCustomTime(linkTime, [addAnchorLink, addImgSrc]),
];
// 第二顆誘因每日換品
function addAnchorLink(i){
    if (!linkData) return false;

    // var anchorChangeLink = document.getElementById('heroPromoLink');
    var anchorChangeLink = document.getElementById('anchorChangeLink');
    var webLink = linkData[i].webLink;
    var mobileLink = linkData[i].mobileLink;
    var appLink = linkData[i].appLink;

    // anchorChangeLink.href = makeLink(960, appLink, webLink, mobileLink);
    anchorChangeLink.href = makeLink(960, appLink, webLink, mobileLink);
}

function addImgSrc(i) {
    if (!imgData) return false;

    var promoImg = document.querySelector('#anchorChangeLink img');

    promoImg.src = imgData[i];
}


//- 每日一品
import {buildProductNumberLink} from 'utils/js/build-link.js'
import {createDateArray} from 'utils/js/build-time.js'

export var initDailyPromo = dailyPromo();

function dailyPromo() {
    if (!promoData) return false;
    // 9/11 - 9/24 每日換品、第一顆誘因
    var startDay = new Date();
    var nowDate = startDay.getDate();

    if (nowDate < 11 && nowDate > 26) return false;

    var startArray = createDateArray("2020/09/25 10:00", 18) // 9/11 - 9/24共14天
    var dailyPromoAnchor = document.querySelector('#dailyPromo a');
    var dailyPromoImg = document.querySelector('#dailyPromo a img');
    var dailyPromoMonth = document.querySelector('#dailyPromo .js-month');
    var dailyPromoDate = document.querySelector('#dailyPromo .js-date');
    // var anchorChangeLink = document.querySelector('#anchorChangeLink a');
    // var anchorChangeLinkImg = document.querySelector('#anchorChangeLink a img');

    // 判斷今天日期是不是在startArray，是則填連結、圖片
    startArray.forEach(function (el, index) {
        if (startDay.getTime() >= el.getTime()) {
            dailyPromoImg.src = "everyday_pt" + (index + 1) + ".png";
            dailyPromoMonth.innerHTML = promoData[index].promoMonth;
            dailyPromoDate.innerHTML = promoData[index].promoDate;
            // console.log(promoData[index]);
            buildProductNumberLink(promoData[index], dailyPromoAnchor, [, , , , 'name']);
            // //
            // buildProductNumberLink(anchorChangeLinkData[index], anchorChangeLink, [, , , , 'linkTitle']);
            // anchorChangeLinkImg.alt = anchorChangeLinkData[index].linkTitle;
        }
    });

}