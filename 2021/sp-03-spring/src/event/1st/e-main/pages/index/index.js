// ==========================================================================
// import vendor js modules
// ==========================================================================
import WOW from 'wow.js/dist/wow.js'

// swiper 6.1.2 no IE
import 'swiper/swiper-bundle.css'
import 'vendors/js/swiper-ie-polyfill.js'

// swiper 5.4.5 support IE 11
// import 'swiper/css/swiper.min.css'

// import 'vendors/js/lazyload.js'
// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'

// ==========================================================================
// import components js modules
// ==========================================================================

import {initChangeMainTitleImage} from "event/1st/e-main/components/hero-section/hero-section.js"
import { initDailyChange } from "event/1st/e-main/components/daily-change/daily-change.js"
import { initBuildSakuraFall } from "event/1st/e-main/components/hero-section/effect__sakuraRain.js"
import { initDailyTab } from "event/1st/e-main/components/daily-tab/daily-tab.js"
import { initSliderDynamic } from "event/1st/e-main/components/one-buy-one-slider/one-buy-one-slider.js"
import { initBuildTab_1 } from "event/1st/e-main/components/tab-section-1/tab-section-1.js"
import { initDailyChange_2 } from "event/1st/e-main/components/daily-change-2/daily-change-2.js"
import { initCollectPoint } from "event/1st/e-main/components/collect__point/collect__point.js"
import { initSliderBank } from "event/1st/e-main/components/bn-bank/bn-bank.js"
import { initSliderDynamicHalf_2 } from "event/1st/e-main/components/dynamic-slider-half/dynamic-slider-half.js"
// import { initPromoSlider } from 'event/1st/e-main/components/promo-event/promo-event.js'
// import { initSliderDaily } from "event/1st/e-main/components/daily-slider/daily-slider.js"
// import { initLeftRight } from 'event/1st/e-main/components/game-section/game-section.js'
import { initSliderSpecial } from "event/1st/e-main/components/bn-special/bn-special.js"
import { initTwoDailyChange } from "event/1st/e-main/components/two-daily-change/two-daily-change.js"
import { initDoubleSlider } from "event/1st/e-main/components/slider-section-double/slider-section-double.js"
import { initScrollDoubleSlider } from "event/1st/e-main/components/deco-scroll-effect/deco-scroll-effect.js"

// ==========================================================================
// page js
// ==========================================================================
// import { getScrollTop } from 'utils/js/detect.js'
// import { isWindowWidth } from 'utils/js/detect.js'
//
// var scrollHeight = isWindowWidth( 600 ) ? 750 : 450;
// var heroCloud = document.getElementById( 'decoCloud' );
//
// window.addEventListener( 'scroll', function () {
//   if ( getScrollTop() >= scrollHeight ) {
//     if ( isWindowWidth( 960 ) ) {
//       document.body.style.backgroundPositionY = 50 + '%';
//     }
//     heroCloud.classList.add( 'move' );
//   } else {
//     if ( isWindowWidth( 960 ) ) {
//       document.body.style.backgroundPositionY = 0;
//     }
//     heroCloud.classList.remove( 'move' );
//   }
// });

function stickyButton() {
    var winHt = document.body.offsetHeight;
    var navTop = document.getElementById('animateWrapHt');
    var imgaa = navTop.querySelector('.parallax__background');


    // console.log(window.scrollY);
    // if (window.scrollY >= document.documentElement.clientHeight) {
    if (window.scrollY >= 1528 && window.scrollY <= 8200) {
        // navTop.style.height = winHt + 'px';
        // navTop.style.position =  'fixed';
        // imgaa.classList.add("top--0");
        setInterval(imgaa.classList.add("active"))
    } else {
        // navTop.style.height = 'auto';
        // navTop.style.position =  'absolute';
        setInterval(imgaa.classList.remove("active"))
    }
}
window.addEventListener('load', stickyButton);
window.addEventListener('resize', stickyButton);
window.addEventListener('scroll', stickyButton);

new WOW().init()
