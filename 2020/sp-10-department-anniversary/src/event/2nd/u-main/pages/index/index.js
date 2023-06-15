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
// import { initSliderSpecial } from 'event/2nd/u-main/components/bn-special/bn-special.js'
// import {initDailyPromo} from "event/2nd/u-main/components/promo-event/promo-event.js"
// import {initBuildByCustomTime} from "event/2nd/u-main/components/promo-event/promo-event.js"
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

new WOW().init();