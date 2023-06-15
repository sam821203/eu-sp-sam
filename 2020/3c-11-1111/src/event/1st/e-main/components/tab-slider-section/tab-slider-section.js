export var initBuildTab = buildTab();

function buildTab() {
    var tabBox = document.getElementById('tabBox');
    var tabItems = tabBox.querySelectorAll('.tab__item');
    var contentBlock = document.getElementById('contentBlock');
    var contentBox = contentBlock.querySelectorAll('.content__box');
    // var dateNow = dateCheck() - 1; // change date to zero start
    var dateNow = 0; // change date to zero start
    if (tabItems.length !== contentBox.length) {
        console.error('Tab Item數量與Content Box數量不符');
        return false;
    }

    tabItems.forEach(function (el, index) {
        if (index === dateNow) {
            // addActive(tabItems, dateNow);
            addActive(contentBox, index);
        }

        function clickActive() {
            addActive(tabItems, index);
            addActive(contentBox, index);
            if (index == '1') {
                sliderTabClick_2();
            }
            else if (index == '2') {
                sliderTabClick_3();
            }
            else if (index == '3') {
                sliderTabClick_4();
            }
        }

        if (el.addEventListener) {
            el.addEventListener('click', clickActive, false);
        }
        else if (el.attachEvent) {
            el.addEventListener('onclick', clickActive);

        }
    });

}

function addActive(arrayElementIn, elementIndex) {
    arrayElementIn.forEach(function (el) {
        el.classList.remove('active');
    });
    arrayElementIn[elementIndex].classList.add('active');
}

function dateCheck() {
    var date = new Date().getDate();
    return date;
}


import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
export var initSliderTabLoad = detectApp(window.addEventListener('load', sliderTabReady), sliderTabReady);
// export var initSliderTabClick= detectApp(window.addEventListener('click', sliderTabReady), sliderTabReady);

function sliderTabReady() {
    var sliderTab = new Swiper('#sliderTab', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        spaceBetween: 5,
        // init: isNeedSlider('#contentBlock'),
        // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
        pagination: {
            el: '#sliderTabPager',
            clickable: true,
        },
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '#sliderTab_1Next',
            prevEl: '#sliderTab_1Prev',
        },
    })
}
function sliderTabClick_2() {
    var sliderTab_2 = new Swiper('#sliderTab_2', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        spaceBetween: 5,
        pagination: {
            el: '#sliderTabPager_2',
            clickable: true,
        },
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '#sliderTab_2Next',
            prevEl: '#sliderTab_2Prev',
        },
    })
}
function sliderTabClick_3() {
    var sliderTab_3 = new Swiper('#sliderTab_3', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        spaceBetween: 5,
        pagination: {
            el: '#sliderTabPager_3',
            clickable: true,
        },
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '#sliderTab_3Next',
            prevEl: '#sliderTab_3Prev',
        },
    })
}
function sliderTabClick_4() {
    var sliderTab_4 = new Swiper('#sliderTab_4', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        spaceBetween: 5,
        pagination: {
            el: '#sliderTabPager_4',
            clickable: true,
        },
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '#sliderTab_4Next',
            prevEl: '#sliderTab_4Prev',
        },
    })
}