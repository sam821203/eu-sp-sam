import {moveActiveToItem} from 'utils/js/move-active.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'
import {createDateArray} from 'utils/js/build-time.js'
import {buildByCustomTime} from 'utils/js/build-time.js'
import {setIntervalFix} from 'utils/js/build-time.js'

// TODO 填寫總共有幾天要換檔
var totallimitTimeDaily = 18;
export var initLimitTimeChange = limitTimeChange();

// 每日帶入三品
// 每日9點換三品
// 根據三個時段進行不同的亮燈

function limitTimeChange() {
    if (!dailyData) return false;
    // TODO: 每日換品
    // 總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
    var dailyDateArray = createDateArray("2021/4/23 09:00:00", totallimitTimeDaily) // 第一波
    // setTimeout、setInterval的作用域在window
    // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
    // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
    buildContent();
    buildByCustomTime(dailyDateArray, [nowDateShow], 100);
    timerOpenItem();
}

//- 隨著每日指定時間亮燈
function timerOpenItem() {
    countDownTimer();
    var isNeedCountdownNumber = false;
    var targetIndex = 0;
    var timeInterval = timeInterval || 1000;
    var timer = setIntervalFix(function () {
        if (isNeedCountdownNumber) {
            // FIXME:傳不出去變數，只能在window中設立，傳入預設訂的物件名稱，由這邊在window中建立該名稱的物件
            window[countdownNumberArray[0]] = countDownNumber(timeSource[targetIndex], isDay);
            if (typeof functionAddObject === 'function') functionAddObject();
            // console.log(window[countdownNumberArray[0]]);
        }
        // countDownTimer中有targetIndex++的判斷，所以要放在最後面，其他function放前面
        countDownTimer();
    }, timeInterval);
}
//- 判定亮燈時間
function countDownTimer() {
    var startDay = new Date();
    var nowHour = startDay.getHours();

    var isNowTimeOpen = Array.apply(null, document.querySelectorAll('#limitTimeItemList .limit__time__item.active li'));
    isNowTimeOpen.forEach(function (el, index) {
        el.classList.remove('now__time');
        if (nowHour >= 9 && nowHour < 15) {
            // console.log('第1個')
            isNowTimeOpen[0].classList.add('now__time');
        }
        else if (nowHour >= 15 && nowHour < 22) {
            // console.log('第二個')
            isNowTimeOpen[1].classList.add('now__time');

        }
        else if (nowHour >= 22 && nowHour <= 24) {
            // console.log('第3個')
            isNowTimeOpen[2].classList.add('now__time');
        }
        else if (nowHour >= 0 && nowHour < 9) {
            // console.log('第3個')
            isNowTimeOpen[2].classList.add('now__time');
        }
    })
}

// 每日換3品
function nowDateShow(i) {
    var arrayDailyTabHead = Array.apply(null, document.querySelectorAll('#limitTimeItemList .limit__time__item'));
    // 預設將所得.limit__time__item都關掉
    arrayDailyTabHead.forEach(function (el, index) {
        el.classList.remove('active');
    });
    // 日期決定第幾個要打開
    arrayDailyTabHead[i].classList.add('active');
    // console.log(arrayDailyTabHead[i]);
}


// 建立頁籤content內的部分
function buildContent() {
    //- 預設將所得.limit__time__item都關掉
    var sliderContainerArray = Array.apply(null, document.querySelectorAll('#limitTimeItemList .limit__time__item'));
    //- var i = 0;
    //- 防呆機制
    if (sliderContainerArray.length !== dataDailyLimitTimeChange.length) {
        console.error('Div數量與 Data數量不符');
        console.log('Div數量', sliderContainerArray.length);
        console.log('Data數量', dataDailyLimitTimeChange.length);
        return false;
    }
    //- 一個迴圈跑html的div，一個迴圈跑資料，將資料塞進div裡面
    sliderContainerArray.forEach(function (item, index) {
        dataDailyLimitTimeChange[index].forEach(function (el) {
            // 關閉slider
            var sliderChild = buildDynamicAutoSync(el, {"isSlider": false});
            // var sliderChild = buildDynamicAutoSync(el,{"isSlider":"false","isLazyLoad":"false","isSliderLazyLoad":"false","sliderLazyLoadIndicatorClass":"aaa","sliderImgLazyLoadClass":"bbb"});

            //- 舊寫法
            // sliderContainerArray.appendChild(sliderChild);
            // 因要三個商品放入放入一區，故餘數為0 1 都加入
            // console.log(index);
            // if (index % 3 < 2) {
            //     sliderContainerArray[i].appendChild(sliderChild);
            // }
            // // 餘數為2加入後要讓他到下一個節點
            // else if (index % 3 == 2) {
            //     sliderContainerArray[i].appendChild(sliderChild);
            //     sliderContainerArray.nextElementSibling;
            //     i++;
            // }

            item.appendChild(sliderChild);
        });
    })
}


// // 每日換圖
// function addDailyImgSrc(i) {
//     // TODO: 超過n+1天就退出(因為要倒數所以n日的日期陣列要加一天成為n+1)，依照活動時間更改
//     if (!dailyData || i >= 21) return false; // 第一波
//     // if (!dailyData || i >= 14) return false; // 第二波
//
//     var dailyChangeImg = document.querySelector('#dailyChange a img');
//
//     // 第一波的圖片已經上傳，所以第二波時序號要依照活動開始日期更改
//     // 第一波
//     dailyChangeImg.src= "daily-item-" + (i + 1) + ".png";
//     // 第二波
//     // dailyChangeImg.src= "https://www.etmall.com.tw/XML/content/DMSetting/Final/202011/SP_1116698/daily-item-" + (i + 12) + ".png";
//
//     dailyChangeImg.alt = "大牌倒數"
// }