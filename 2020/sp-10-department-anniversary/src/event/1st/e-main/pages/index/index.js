// ==========================================================================
// import vendor js modules
// ==========================================================================
// swiper 6.1.2 no IE
import 'vendors/js/swiper-ie-polyfill.js'

// swiper 5.4.5 support IE 11
// import 'swiper/css/swiper.min.css'
import WOW from 'wow.js/dist/wow.js'

// ==========================================================================
// import normal layout js modules
// ==========================================================================
import {notSupportIE9Alert} from 'utils/js/ie9-alert'
import {notSupportAndroid5} from 'utils/js/android5-alert'
import {initGlobalUXItems} from 'utils/js/generate'

// ==========================================================================
// import components js modules
// ==========================================================================
// import { initSliderSmall } from 'event/1st/e-main/components/hero-small-slider/hero-small-slider.js'
// import { initChangePromoAnchor } from 'event/1st/e-main/components/promo-event/promo-event.js'
import {initDailyPromo} from "event/1st/e-main/components/promo-event/promo-event.js"
import {initBuildByCustomTime} from "event/1st/e-main/components/promo-event/promo-event.js"
//- import { initdailyGoods } from 'event/1st/e-main/components/daily-goods/daily-goods.js'
import {initSliderSpecial} from 'event/1st/e-main/components/bn-special/bn-special.js'
import {initSliderDynamic} from 'event/1st/e-main/components/dynamic-slider/dynamic-slider.js'
import {initSliderDynamic_2} from 'event/1st/e-main/components/dynamic-slider-2/dynamic-slider-2.js'
import {initSliderDynamic_3} from 'event/1st/e-main/components/dynamic-slider-3/dynamic-slider-3.js'
import {initSliderBnHot} from 'event/1st/e-main/components/bn-event-hot/bn-event-hot.js'
import {initSliderDynamicHalf} from "event/1st/e-main/components/dynamic-slider-half/dynamic-slider-half.js"
import {initSliderSpecialHalf} from "event/1st/e-main/components/bn-special-half/bn-special-half.js"
//- import { initEventw4m2 } from 'event/1st/e-main/components/event-w4m2/event-w4m2.js'
// ==========================================================================
// page js
// ==========================================================================
// var parallaxBg = document.getElementById('parallaxBg');
// var parallaxBgWeb = document.getElementById('parallaxBgWeb');
// var heroTitle = document.getElementById('heroTitle');
// var goodsHero = document.getElementById('goodsHero');
// var decorationHand = document.getElementById('decorationHand');
// var decorationPaper = document.getElementById('decorationPaper');
// function loadParallax() {
//     window.addEventListener('load', function () {
//         // makeParallaxDefault(parallaxBg, 0.1);
//         // makeParallaxDefault(parallaxBgWeb, 0.2);
//         // makeParallaxDefault(heroTitle, .6);
//         // makeParallaxDefault(goodsHero, 0.5);
//         // makeParallaxDefault(decorationHand, 1);
//         makeParallaxDefault(decorationPaper, .5);
//     });
// }
// loadParallax();


function stickyButton() {
    var winHt = document.body.offsetHeight;
    var navTop = document.getElementById('animateWrapHt');
    var parallaxImg = navTop.querySelector('.parallax__background');
    // if (window.scrollY >= document.documentElement.clientHeight) {
    if (window.scrollY >= 1605) {
        // navTop.style.height = winHt + 'px';
        // parallaxImg.style.opacity = '1';
        // parallaxImg.classList.add("top--0");
        setInterval(parallaxImg.classList.add("top--0"))
        // console.log(parallaxImg.style.top);
    } else {
        // navTop.style.height = 'auto';
        // navTop.style.position =  'absolute';
        // parallaxImg.style.opacity = '0';
        setInterval(parallaxImg.classList.remove("top--0"))
    }
}
/*
 ** scroll 給點間隔時間去跑
 */
$(function () {
    $.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    $.throttle = function (func, wait) {
        var context, args, timeout, throttling, more, result;
        var whenDone = $.debounce(function () {
            more = throttling = false;
        }, wait);
        return function () {
            context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (more) func.apply(context, args);
                whenDone();
            };
            if (!timeout) timeout = setTimeout(later, wait);

            if (throttling) {
                more = true;
            } else {
                result = func.apply(context, args);
            }
            ;
            whenDone();
            throttling = true;
            return result;
        };
    };
    var bind__handler = $.throttle(function (e) {
        stickyButton();
    }, 200);
    window.addEventListener('scroll', bind__handler);
});

var winWt = document.body.clientWidth;
if (winWt >= 960) {
    window.addEventListener('load', stickyButton);
    // window.addEventListener('scroll', stickyButton);
}
window.addEventListener('resize', function () {
    winWt = document.body.clientWidth;
    if (winWt >= 960) {
        stickyButton;
    }
});


new WOW().init();