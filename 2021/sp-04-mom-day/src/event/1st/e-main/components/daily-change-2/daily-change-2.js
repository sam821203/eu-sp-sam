import {moveActiveToItem} from 'utils/js/move-active.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'
import {createDateArray} from 'utils/js/build-time.js'
import {buildByCustomTime} from 'utils/js/build-time.js'
import {setIntervalFix} from 'utils/js/build-time.js'
import Swiper from 'swiper/swiper-bundle.min.js';

export var initDailyChange_2 = dailyChange_2__wrap ();

// 每日有新的兩品 - 需變價
// 每日帶入一品隔天預告(圖片)

function dailyChange_2__wrap() {
    if (!dailyData) return false;
    // TODO: 每日換品
    // 總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
    var dailyDateArray_2 = createDateArray("2021/4/07 10:00:00", 21) // 第一波
    // setTimeout、setInterval的作用域在window
    // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
    // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
    buildContentDailyDateArray();
    buildByCustomTime(dailyDateArray_2, [nowDateShow,addDailyImgSrc,nextDateChangeShow], 100);
    timerOpenItem();
}

//- 隨著每日指定時間亮燈
function timerOpenItem() {
    // countDownTimer();
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
    }, timeInterval);
}

// 每日換2品
function nowDateShow(i) {
    var arrayDailyTabHead = Array.apply(null, document.querySelectorAll('#everyDayItemList .today__day__item'));
    // 預設將所得..next__day__item都關掉
    arrayDailyTabHead.forEach(function (el, index) {
        el.classList.remove('active');
    });
    // 日期決定第幾個要打開
    arrayDailyTabHead[i].classList.add('active');
    // console.log(arrayDailyTabHead[i]);
}


// 建立頁籤content內的部分
function buildContentDailyDateArray() {
    //- 預設將所得..next__day__item都關掉
    var sliderContainerArray = Array.apply(null, document.querySelectorAll('#everyDayItemList .today__day__item'));
    //- var i = 0;
    //- 防呆機制
    if (sliderContainerArray.length !== dataEveryDayItem.length) {
        console.error('Div數量與 Data數量不符');
        console.log('Div數量', sliderContainerArray.length);
        console.log('Data數量', dataEveryDayItem.length);
        return false;
    }
    //- 一個迴圈跑html的div，一個迴圈跑資料，將資料塞進div裡面
    sliderContainerArray.forEach(function (item, index) {
        dataEveryDayItem[index].forEach(function (el) {
            // 關閉slider
            var sliderChild = buildDynamicAutoSync(el, {"isSlider": false});
            item.appendChild(sliderChild);
        });
    })
}


// 每日換圖
function addDailyImgSrc(i) {
    // TODO: 超過n+1天就退出(因為要倒數所以n日的日期陣列要加一天成為n+1)，依照活動時間更改
    if (!dailyData || i >= 21) return false; // 第一波
    // if (!dailyData || i >= 14) return false; // 第二波

    var dailyChangeImg = document.querySelector('#dailyChange_next img');

    // 第一波的圖片已經上傳，所以第二波時序號要依照活動開始日期更改
    // 第一波
    dailyChangeImg.src= "everyday-next-" + (i + 1) + ".png";
    // 第二波
    // dailyChangeImg.src= "https://www.etmall.com.tw/XML/content/DMSetting/Final/202011/SP_1116698/daily-item-" + (i + 12) + ".png";

    dailyChangeImg.alt = "天天開搶"
}


function nextDateChangeShow(i) {
    var arraySliderNextDailyTag = Array.apply(null, document.querySelectorAll('#sliderNextDailyTag .tabs-slide'));
    // TODO: 停止流程
    // arrayLength用於不刪減slide時
    // var arrayLength = arrayTwoDailyChangeTabHead.length;
    // if ( i >= arrayLength ) return false;

    // 當會刪除陣列長度時無法用長度判定得自行給定長度，
    // 從0開始陣列長度12時，超過11就要停，因為最後一個要保留因此用>=，可以少跑一次迴圈，用>也行
    arraySliderNextDailyTag.forEach(function (el, index) {
        el.classList.remove('active--next__date');

    });

    // console.log(i);
    if (i < 1) {
        arraySliderNextDailyTag[0].classList.add('active--next__date');

    }

    else {
        arraySliderNextDailyTag[i].classList.add('active--next__date');
    }


    // 換日完執行建立頁籤content帶動執行該日的輪播(因輪播會秀出來，因此要在這裏給入i執行)
    sliderNextDailyTagontentReady(i);

}
// function buildNextDailyTagContent(i) {
//     var tabItemsTwoChange = Array.apply(null, document.querySelectorAll('#sliderNextDailyTag .tabs-slide'));
//
//     // 初始化輪播(剛load進來預設第一個頁籤active)
//     sliderNextDailyTagontentReady();
//
//     // 初始化輪播content樣式
//     // var contentSlides = Array.apply(null, document.querySelectorAll('#sliderTwoDailyChangeContent .two-daily-content__box .product--dynamic'));
//     //
//     // contentSlides.forEach(function (el) {
//     //     el.style.filter = 'grayscale(100%)';
//     //     el.style.pointerEvents = 'none';
//     // });
//
// }
// tab head 頁籤輪播
function sliderNextDailyTagontentReady(i) {
    var index = i || 0;
    // var totalDailyTabs = totalDaily - 5;
    //- 測試也沒有填幾品
    // console.log(totalDailyTabs)
    var sliderNextDailyTagHead = new Swiper('#sliderNextDailyTag', {
        slidesPerView: 1,
        speed: 600,
        observer: true,
    });

    // TODO:移除頁籤在此，不用就要關掉
    // if (index > 0 && index <= totalDailyTabs) {
    //     sliderTwoDailyChangeTabHead.removeSlide(0);
    // }

    // console.log(sliderTwoDailyChangeTabHead)
    return sliderNextDailyTagHead;
}
