import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildItemGroupElement} from 'utils/js/build-itemsGroup.js'

// 換時間
import {buildProductNumberLink} from 'utils/js/build-link.js'
import {createDateArray} from 'utils/js/build-time.js'
import {buildByCustomTime} from 'utils/js/build-time.js'

export var everyDayChangeGoods = buildSliderContent();
export var initDailyChange = dailyChange();

function buildSliderContent() {
    var sliderContainer = document.querySelector('#itemGoods');
    var buildDay1 = document.querySelector('#buildDay1');
    var buildDay2 = document.querySelector('#buildDay2');
    var buildDay3 = document.querySelector('#buildDay3');
    var buildDay4 = document.querySelector('#buildDay4');
    var buildDay5 = document.querySelector('#buildDay5');
    var buildDay6 = document.querySelector('#buildDay6');
    var buildDay7 = document.querySelector('#buildDay7');
    var buildDay8 = document.querySelector('#buildDay8');
    var buildDay9 = document.querySelector('#buildDay9');
    var buildDay10 = document.querySelector('#buildDay10');
    var buildDay11 = document.querySelector('#buildDay11');

    // 資料進來
    dataBuildItems.forEach(function (el, index) {
        // true => lazyload 打開 ; false => 關閉lazyload
        var sliderChild = buildItemGroupElement(el, false);

        var number = index % 5;
        var content;
        // console.log(number);
        if (index < 5) {
            buildDay1.appendChild(sliderChild);
        }
        else if (index >= 5 && index <= 9) {
            buildDay2.appendChild(sliderChild);
        }
        else if (index >= 10 && index <= 14) {
            buildDay3.appendChild(sliderChild);
        }
        else if (index >= 15 && index <= 19) {
            buildDay4.appendChild(sliderChild);
        }
        else if (index >= 20 && index <= 24) {
            buildDay5.appendChild(sliderChild);
        }
        else if (index >= 25 && index <= 29) {
            buildDay6.appendChild(sliderChild);
        }
        else if (index >= 30 && index <= 34) {
            buildDay7.appendChild(sliderChild);
        }
        else if (index >= 35 && index <= 39) {
            buildDay8.appendChild(sliderChild);
        }
        else if (index >= 40 && index <= 44) {
            buildDay9.appendChild(sliderChild);
        }
        else if (index >= 45 && index <= 49) {
            buildDay10.appendChild(sliderChild);
        }
        else if (index >= 50 && index <= 54) {
            buildDay11.appendChild(sliderChild);
        }
        if(el.open === 1) {
            // 再選一次querySelectorAll 裡面是一個陣列要給他一個[index]才會選到陣列中的className123
            console.log('ssss');
            document.querySelectorAll('.build__items > .build__item__5a1b4s')[index].classList.add('close__single');
        }
    });
    // detectApp(window.addEventListener('load', sliderDynamicReady), sliderDynamicReady);
}

function dailyChange(index) {
    // if(!dailyData) return false;
    // 10/26 - 11/26 每日換品
    // 總共只有31天，但倒數要抓下一個index做計算，因此要給32天，最後一天的倒數才會正常
    var dailyDateArray = createDateArray("2020/11/2 10:00:00", 12) // 11/02 - 11/12共12天
    // setTimeout、setInterval的作用域在window

    // console.log(buildByCustomTime[addDailyLink])
    buildByCustomTime(dailyDateArray, [addDailyLink], 1000);
}

// 每日換連結
function addDailyLink(i, arrayGoods) {
    // TODO: 超過14天就退出(因為要倒數所以日期陣列是32天)
    // if (!dailyData || i >= 32) return false;

    var globalOrder = 99;
    var arrayGoods = [];
    var dailyChangeAnchor = document.querySelectorAll('.build__items');
    // dailyChangeAnchor.forEach(function (el, index) {
    //     // arrayGoods.push(dailyChangeAnchor[index].id);
    //     // globalOrder --;
    //     // console.log(dailyChangeAnchor[i].id));
    // })
    // console.log(dailyChangeAnchor[(i - 1)].childNodes)
    if (i >= 1) {
        dailyChangeAnchor[(i - 1)].style.order = globalOrder;
        dailyChangeAnchor[(i - 1)].classList.add('close');
        // var childElement = dailyChangeAnchor.childNodes;
        // childElement.classList.add('close');
        var elementAll = dailyChangeAnchor[(i - 1)].querySelectorAll('.build__item__5a1b4s');
        elementAll.forEach(function (el, index) {
            // el.classList.add('close__child');
            el.classList.remove('close__single');
        });
        // dailyChangeAnchor[(i - 1)].querySelectorAll('.build__item__5a1b4s')[i].classList.add('close');
    }
}

// 每日換圖
// function addDailyImgSrc(i) {
//     // TODO: 超過14天就退出(因為要倒數所以日期陣列是32天)
//     if (!dailyData || i >= 32) return false;
//
//     var dailyChangeImg = document.querySelector('#dailyChange a img');
//
//     dailyChangeImg.src = "daily-item-" + (i + 1) + ".png";
//     dailyChangeImg.alt = "今日最大牌"
// }

// 每日換日期
function addNowDate() {
    var startDay = new Date();
    var nowMonth = startDay.getMonth() + 1;
    var nowDate = startDay.getDate();

    var dailyMonth = document.getElementById('dailyMonth');
    var dailyDate = document.getElementById('dailyDate');

    // 把日期填上標題
    dailyMonth.innerHTML = nowMonth;
    dailyDate.innerHTML = (nowDate < 10) ? ('0' + nowDate) : nowDate;
}

// 每秒填入
function addDailyTime() { // 十位數和個位數分開的話不會因為數字1寬度不足產生跳動問題
    var dailyHourTens = document.getElementById('dailyHourTens');
    var dailyHourUnits = document.getElementById('dailyHourUnits');
    var dailyMinTens = document.getElementById('dailyMinTens');
    var dailyMinUnits = document.getElementById('dailyMinUnits');
    var dailySecTens = document.getElementById('dailySecTens');
    var dailySecUnits = document.getElementById('dailySecUnits');

    dailyHourTens.innerHTML = window.countDownNumberObject.hourTens;
    dailyHourUnits.innerHTML = window.countDownNumberObject.hourUnits;
    dailyMinTens.innerHTML = window.countDownNumberObject.minTens;
    dailyMinUnits.innerHTML = window.countDownNumberObject.minUnits;
    dailySecTens.innerHTML = window.countDownNumberObject.secTens;
    dailySecUnits.innerHTML = window.countDownNumberObject.secUnits;
}