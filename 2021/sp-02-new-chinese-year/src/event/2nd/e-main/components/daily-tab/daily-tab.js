// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {moveActiveToItem} from 'utils/js/move-active.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'
import {createDateArray} from 'utils/js/build-time.js'
import {buildByCustomTime} from 'utils/js/build-time.js'

// TODO 填寫總共有幾天要換檔
var totalDaily = 8;
export var initDailyTab = dailyTabChange();


function dailyTabChange() {
    // TODO: 每日換品
    // 總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
    var totalDailyChange = totalDaily + 1;
    var arrayDailyTabDate = createDateArray("2021/2/2 10:00", totalDailyChange);

    // setTimeout、setInterval的作用域在window
    // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
    // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
    buildByCustomTime(arrayDailyTabDate, [nowDateShow], 100);
    // dailyTabHeadReady();
    buildDailyTabContent();

}

// 每日換品
function nowDateShow(i) {
    var arrayDailyTabHead = Array.apply(null, document.querySelectorAll('#dailyTabHead .swiper-slide'));
    // TODO: 停止流程
    // arrayLength用於不刪減slide時
    // var arrayLength = arrayDailyTabHead.length;
    // if ( i >= arrayLength ) return false;

    // 當會刪除陣列長度時無法用長度判定得自行給定長度，
    // 從0開始陣列長度12時，超過11就要停，因為最後一個要保留因此用>=，可以少跑一次迴圈，用>也行
    if (i >= totalDaily) return false;
    var contentBoxes = Array.apply(null, document.querySelectorAll('#dailyTabContent .content__box'));

    arrayDailyTabHead.forEach(function (el, index) {
        el.classList.remove('daily-active');
        el.classList.remove('active');
        // console.log(index);
        // TODO:超過時間的頁籤在此，可以改顏色或做啥的，如果要移除slide必須用swiper自己的method
        // 所以移除slide放在下面init的部分，此處純做外觀調整用
        // if ( index < i ) {
        //   el.style.display = 'none';
        //   el.classList.add( 'used' );
        // }

    });

    contentBoxes.forEach(function (el) {
        el.classList.remove('active');

    });
    // FIXME:swiper在i >= 1時最後會停留在[1]而不是[0]，原因待查

    if (i < 1) {
        arrayDailyTabHead[0].classList.add('daily-active');
        contentBoxes[0].classList.add('active');

    }
    // 視覺要留5個，故在低於5時候就不會刪除slide，所以不會小於5
    else if (arrayDailyTabHead.length == 5) {

        var slideCount = i - (contentBoxes.length - 5);
        var prevDateClose = i - 1;

        arrayDailyTabHead[slideCount].classList.add('daily-active');
        // 不是當天的品關掉
        contentBoxes[prevDateClose].classList.add('activity__time__out');
        contentBoxes[i].classList.add('active');
    }
    else {
        arrayDailyTabHead[1].classList.add('daily-active');
        contentBoxes[i].classList.add('active');
    }


    // 換日完執行建立頁籤content帶動執行該日的輪播(因輪播會秀出來，因此要在這裏給入i執行)
    dailyTabHeadReady(i);
    dailyTabContentReady(i);


    // 要build後才有promoBanner
    var contentNowBanners = Array.apply(null, contentBoxes[i].querySelectorAll('.banner__wrap'));

    contentNowBanners.forEach(function (el) {
        el.classList.add('active');

    });

    // 要build後才有product--dynamic
    var contentNowSlides = Array.apply(null, contentBoxes[i].querySelectorAll('.product--dynamic'));

    contentNowSlides.forEach(function (el) {
        el.style.filter = 'grayscale(0)';
        el.style.pointerEvents = 'auto';
    });
}

// 建立頁籤content的部分
function buildDailyTabContent(i) {
    var tabItems = Array.apply(null, document.querySelectorAll('#dailyTabHead .swiper-slide'));
    var contentBoxes = Array.apply(null, document.querySelectorAll('#dailyTabContent .content__box'));

    // var dateNow = dateCheck() - 1; // change date to zero start
    if (tabItems.length !== contentBoxes.length) {
        console.error('Tab Item數量與Content Box數量不符');
        return false;
    }

    buildSliderContent();

    tabItems.forEach(function (el, index) {
        el.addEventListener('click', function () {
            moveActiveToItem(tabItems, index);
            moveActiveToItem(contentBoxes, index)
            dailyTabContentReady(index);

        });
    });

    // 初始化輪播(剛load進來預設第一個頁籤active)
    dailyTabContentReady();

    // 初始化輪播content樣式
    var contentSlides = Array.apply(null, document.querySelectorAll('#dailyTabContent .content__box .product--dynamic'));

    contentSlides.forEach(function (el) {
        el.style.filter = 'grayscale(100%)';
        el.style.pointerEvents = 'none';
    });

}

// 建立頁籤content內的輪播部分
function buildSliderContent() {
    if (!dataDailyTab) return false;

    var sliderContainerArray = Array.apply(null, document.querySelectorAll('#dailyTabContent .swiper-wrapper'));

    sliderContainerArray.forEach(function (item, index) {
        dataDailyTab[index].forEach(function (el) {
            // core 建立結構
            var sliderChild = buildDynamicAutoSync(el);

            // 追加utils制式build格式以外的外觀(敬請期待、現正熱賣的部分)
            var promoBannerWrap = document.createElement('div');
            var promoBannerNow = document.createElement('div');
            var promoBannerWait = document.createElement('div');

            promoBannerNow.innerHTML = '現正熱賣';
            promoBannerNow.classList.add('promo__banner');
            promoBannerNow.classList.add('promo__banner--now');

            promoBannerWait.innerHTML = '敬請期待';
            promoBannerWait.classList.add('promo__banner');
            promoBannerWait.classList.add('promo__banner--wait');

            promoBannerWrap.appendChild(promoBannerNow);
            promoBannerWrap.appendChild(promoBannerWait);
            promoBannerWrap.classList.add('banner__wrap');

            sliderChild.appendChild(promoBannerWrap);
            item.appendChild(sliderChild);

        });
    });
}

// tab head 頁籤輪播
function dailyTabHeadReady(i) {
    var index = i || 0;
    var totalDailyTabs = totalDaily - 5;
    //- 測試也沒有填幾品
    // console.log(totalDailyTabs)
    var dailyTabHead = new Swiper('#dailyTabHead', {
        slidesPerView: 5,
        speed: 600,
        observer: true,
    });

    // TODO:移除頁籤在此，不用就要關掉
    if (index > 0 && index <= totalDailyTabs) {
        dailyTabHead.removeSlide(0);
    }

    return dailyTabHead;
}

// tab content 內容輪播
function dailyTabContentReady(index) {
    var index = index || 0;

    var arrayTabContents = Array.apply(null, document.querySelectorAll('.tab__slider--daily'));

    var sliderTabContents = new Swiper(arrayTabContents[index], {
        breakpoints: {
            960: {
                slidesPerView: 2.1,
            },
        },
        lazy: {
            loadPrevNext: true,
        },
        // navigation: isWindowWidth(960) ? {
        //   nextEl: '#sliderTabNext',
        //   prevEl: '#sliderTabPrev',
        // } : false,
        // pagination: {
        //   el: '#sliderTabPager',
        //   type: 'bullets',
        //   clickable: true,
        // },
        slidesPerView: 1.2,
        spaceBetween: '1%',
        speed: 600,
    })
}