import {buildProductNumberLink} from 'utils/js/build-link.js'
import {createDateArray} from 'utils/js/build-time.js'
import {buildByCustomTime} from 'utils/js/build-time.js'

export var initDailyChange_2 = newYearChange();

function newYearChange() {
    if (!dailyData) return false;
    // TODO: 每日換品
    // 總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
    var dailyDateArray = createDateArray("2021/2/9 10:00:00", 16) // 第一波
    // setTimeout、setInterval的作用域在window
    // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
    // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
    buildByCustomTime(dailyDateArray, [addDailyLink, addDailyImgSrc], 100, ['countDownNumberObject', true]);
    // 小年夜換背景
    var timeNow = new Date().getTime();
    // TODO 修改開啟日期
    var isNewYearComing = new Date("2021/2/9 10:00:00").getTime();
    var countDownTime = isNewYearComing - timeNow;
    if (countDownTime <= 0) {
        var dateChangeBg = document.getElementById('dateChangeBg');
        var newYearWrap = document.getElementById('newYearWrap');
        dateChangeBg.classList.add('date__change');
        newYearWrap.classList.add('open__wrap');
    }
    // TODO 修改關閉日期
    var isNewYearToday = new Date("2021/2/10 10:00:00").getTime();
    var closeBigBrand = isNewYearToday - timeNow;
    if (closeBigBrand <= 0) {
        var isNewYearTodayClose = document.getElementById('isNewYearTodayClose');
        isNewYearTodayClose.classList.add('close__wrap');
    }
}


// 每日換連結
function addDailyLink(i) {
    // TODO: 超過n+1天就退出(因為要倒數所以n日的日期陣列要加一天成為n+1)，依照活動時間更改
    if (!newYearData || i >= 16) return false; // 第一波
    if (!newYearData_2 || i >= 16) return false; // 第一波
    // if (!dailyData || i >= 14) return false; // 第二波

    var hrefNewYearChangeItem_1 = document.querySelector('#newYearChangeItem_1');
    var hrefNewYearChangeItem_2 = document.querySelector('#newYearChangeItem_2');

    buildProductNumberLink(newYearData[i], hrefNewYearChangeItem_1);
    buildProductNumberLink(newYearData_2[i], hrefNewYearChangeItem_2);
}

// 每日換圖
function addDailyImgSrc(i) {
    // TODO: 超過n+1天就退出(因為要倒數所以n日的日期陣列要加一天成為n+1)，依照活動時間更改
    if (!dailyData || i >= 16) return false; // 第一波
    // if (!dailyData || i >= 14) return false; // 第二波

    var newYearChangeBg = document.querySelector('#newYearChangeBg');
    var newYearChangeItem_1 = document.querySelector('#newYearChangeItem_1 img');
    var newYearChangeItem_2 = document.querySelector('#newYearChangeItem_2 img');

    // 第一波的圖片已經上傳，所以第二波時序號要依照活動開始日期更改
    // 第一波
    var now = new Date();
    var days = now.getDate();
    var min = now.getMinutes();
    newYearChangeBg.src = "new-year-wrap-" + (i + 1) + ".png?" + days + min;
    newYearChangeItem_1.src = "new-year-item-" + (i + 1) + "-1.png?" + days + min;
    newYearChangeItem_2.src = "new-year-item-" + (i + 1) + "-2.png?" + days + min;

    // 第二波
    // newYearChangeImg.src= "https://www.etmall.com.tw/XML/content/DMSetting/Final/202011/SP_1116698/daily-item-" + (i + 12) + ".png";

    // newYearChangeImg.alt = "最牛品牌"
}

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
