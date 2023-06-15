// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {moveActiveToItem} from 'utils/js/move-active.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'
import {createDateArray} from 'utils/js/build-time.js'
import {buildByCustomTime} from 'utils/js/build-time.js'

// TODO 填寫總共有幾天要換檔
var totalDaily = 9;
export var initTwoDailyChange = dailyTabTwoDailyChange();


function dailyTabTwoDailyChange() {
    // TODO: 兩日換品
    // 總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
    var totalDailyChange = totalDaily + 1;
    var arrayTwoDailyTabDate = createDateArray("2021/4/23 10:00", totalDailyChange, 2);

    // console.log(arrayTwoDailyTabDate)
    // setTimeout、setInterval的作用域在window
    // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
    // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
    buildByCustomTime(arrayTwoDailyTabDate, [nowDateTwoChangeShow], 100);
    // sliderTwoDailyChangeTabHeadReady();
    buildDailyTabTwoChangeContent();

}

// 每日換品
function nowDateTwoChangeShow(i) {
    var arrayTwoDailyChangeTabHead = Array.apply(null, document.querySelectorAll('#sliderTwoDailyChangeTabHead .tabs-slide'));
    // TODO: 停止流程
    // arrayLength用於不刪減slide時
    // var arrayLength = arrayTwoDailyChangeTabHead.length;
    // if ( i >= arrayLength ) return false;

    // 當會刪除陣列長度時無法用長度判定得自行給定長度，
    // 從0開始陣列長度12時，超過11就要停，因為最後一個要保留因此用>=，可以少跑一次迴圈，用>也行
    if (i >= totalDaily) return false;
    var contentBoxesTwoChange = Array.apply(null, document.querySelectorAll('#sliderTwoDailyChangeContent .two-daily-content__box'));

    arrayTwoDailyChangeTabHead.forEach(function (el, index) {
        el.classList.remove('active--two__daily');
        el.classList.remove('active');
        // console.log(index);
        // TODO:超過時間的頁籤在此，可以改顏色或做啥的，如果要移除slide必須用swiper自己的method
        // 所以移除slide放在下面init的部分，此處純做外觀調整用
        // if ( index < i ) {
        //   el.style.display = 'none';
        //   el.classList.add( 'used' );
        // }

    });

    contentBoxesTwoChange.forEach(function (el) {
        el.classList.remove('active');
    });
    // FIXME:swiper在i >= 1時最後會停留在[1]而不是[0]，原因待查

    // console.log(i);
    if (i < 1) {
        arrayTwoDailyChangeTabHead[0].classList.add('active--two__daily');
        contentBoxesTwoChange[0].classList.add('active');

    }
    // 視覺要留5個，故在低於5時候就不會刪除slide，所以不會小於5
    // else if (arrayTwoDailyChangeTabHead.length == 5) {
    //
    //     var slideCount = i - (contentBoxesTwoChange.length - 5);
    //     var prevDateClose = i - 1;
    //
    //     arrayTwoDailyChangeTabHead[slideCount].classList.add('active--two__daily');
    //     // 不是當天的品關掉
    //     contentBoxesTwoChange[prevDateClose].classList.add('activity__time__out');
    //     contentBoxesTwoChange[i].classList.add('active');
    // }

    else {
        arrayTwoDailyChangeTabHead[i].classList.add('active--two__daily');
        contentBoxesTwoChange[i].classList.add('active');
    }


    // 換日完執行建立頁籤content帶動執行該日的輪播(因輪播會秀出來，因此要在這裏給入i執行)
    sliderTwoDailyChangeTabHeadReady(i);
    sliderTwoDailyChangeContentReady(i);


    // 要build後才有promoBanner
    // var contentNowBanners = Array.apply(null, contentBoxesTwoChange[i].querySelectorAll('.banner__wrap'));
    //
    // contentNowBanners.forEach(function (el) {
    //     el.classList.add('active');
    //
    // });

    // 要build後才有product--dynamic
    // var contentNowSlides = Array.apply(null, contentBoxesTwoChange[i].querySelectorAll('.product--dynamic'));
    //
    // contentNowSlides.forEach(function (el) {
    //     el.style.filter = 'grayscale(0)';
    //     el.style.pointerEvents = 'auto';
    // });
}

// 建立頁籤content的部分
function buildDailyTabTwoChangeContent(i) {
    var tabItemsTwoChange = Array.apply(null, document.querySelectorAll('#sliderTwoDailyChangeTabHead .tabs-slide'));
    var contentBoxesTwoChange = Array.apply(null, document.querySelectorAll('#sliderTwoDailyChangeContent .two-daily-content__box'));

    // var dateNow = dateCheck() - 1; // change date to zero start
    if (tabItemsTwoChange.length !== contentBoxesTwoChange.length) {
        // console.log(tabItemsTwoChange.length)
        // console.log(contentBoxesTwoChange.length)
        console.error('Tab Item數量與Content Box數量不符');
        return false;
    }

    buildSliderHalfTwoChangeContent();

    // tabItemsTwoChange.forEach(function (el, index) {
    //     el.addEventListener('click', function () {
    //         moveActiveToItem(tabItemsTwoChange, index);
    //         moveActiveToItem(contentBoxesTwoChange, index)
    //         sliderTwoDailyChangeContentReady(index);
    //
    //     });
    // });

    // 初始化輪播(剛load進來預設第一個頁籤active)
    sliderTwoDailyChangeContentReady();

    // 初始化輪播content樣式
    // var contentSlides = Array.apply(null, document.querySelectorAll('#sliderTwoDailyChangeContent .two-daily-content__box .product--dynamic'));
    //
    // contentSlides.forEach(function (el) {
    //     el.style.filter = 'grayscale(100%)';
    //     el.style.pointerEvents = 'none';
    // });

}

// 建立頁籤content內的輪播部分
function buildSliderHalfTwoChangeContent() {
    if (!dataTwoDailyChange) return false;

    var sliderContainerArray = Array.apply(null, document.querySelectorAll('#sliderTwoDailyChangeContent .swiper-wrapper'));

    sliderContainerArray.forEach(function (item, index) {
        // console.log(dataTwoDailyChange[index].tweenLength)
        dataTwoDailyChange[index].forEach(function (el) {
            // core 建立結構
            var sliderTwoChangeChild = buildDynamicAutoSync(el);

            // // 追加utils制式build格式以外的外觀(敬請期待、現正熱賣的部分)
            // var promoBannerWrap = document.createElement('div');
            // var promoBannerNow = document.createElement('div');
            // var promoBannerWait = document.createElement('div');
            //
            // promoBannerNow.innerHTML = '現正熱賣';
            // promoBannerNow.classList.add('promo__banner');
            // promoBannerNow.classList.add('promo__banner--now');
            //
            // promoBannerWait.innerHTML = '敬請期待';
            // promoBannerWait.classList.add('promo__banner');
            // promoBannerWait.classList.add('promo__banner--wait');
            //
            // promoBannerWrap.appendChild(promoBannerNow);
            // promoBannerWrap.appendChild(promoBannerWait);
            // promoBannerWrap.classList.add('banner__wrap');

            // sliderTwoChangeChild.appendChild(promoBannerWrap);
            item.appendChild(sliderTwoChangeChild);

        });
    });
}

// tab head 頁籤輪播
function sliderTwoDailyChangeTabHeadReady(i) {
    var index = i || 0;
    var totalDailyTabs = totalDaily - 5;
    //- 測試也沒有填幾品
    // console.log(totalDailyTabs)
    var sliderTwoDailyChangeTabHead = new Swiper('#sliderTwoDailyChangeTabHead', {
        slidesPerView: 1,
        speed: 600,
        observer: true,
    });

    // TODO:移除頁籤在此，不用就要關掉
    if (index > 0 && index <= totalDailyTabs) {
        sliderTwoDailyChangeTabHead.removeSlide(0);
    }

    // console.log(sliderTwoDailyChangeTabHead)
    return sliderTwoDailyChangeTabHead;
}

// tab content 內容輪播
function sliderTwoDailyChangeContentReady(index) {
    var index = index || 0;

    // console.log(index);

    var arrayTabTwoDailyContents = Array.apply(null, document.querySelectorAll('.tab__slider--two-daily-change'));

    var sliderTabTwoDailyContents = new Swiper(arrayTabTwoDailyContents[index], {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        lazy: {
            loadPrevNext: true,
        },
        // navigation: isWindowWidth(960) ? {
        //   nextEl: '#sliderTabNext',
        //   prevEl: '#sliderTabPrev',
        // } : false,
        pagination: {
          el: '.js__twoDailyChange__pager',
          type: 'bullets',
          clickable: true,
        },
        slidesPerView: 2,
        spaceBetween: '1%',
        speed: 600,
    })
}