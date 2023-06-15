document.body.classList.add("js-loading");

/**
 * import vendor js modules
 */
import WOW from "wow.js/dist/wow.js";
new WOW().init();

// swiper 6.1.2 no IE, add polyfill
import "swiper/swiper-bundle.css";
import "vendors/js/swiper-ie-polyfill.js";

// import 'vendors/js/lazyload.js'

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from "utils/js/ie9-alert";
import { notSupportAndroid5 } from "utils/js/android5-alert";
import { initGlobalUXItems } from "utils/js/generate";
import { getScrollPercentage } from "utils/js/scroll.js";
// import { makeParallaxDefault } from 'utils/js/parallax-scroll.js';

/**
 * import components js modules
 */
// import { initHero } from "event/2nd/e-main/components/hero-section/hero-section.js";
// import { initParallax } from 'utils/bg-decoration-instance/parallax/parallax.js';
import { initPromoSlider } from "event/2nd/e-main/components/promo-slider/promo-slider.js";
import { initPromo } from "event/2nd/e-main/components/promo-event/promo-event.js";
import { initDailySlider } from "event/2nd/e-main/components/daily-slider/daily-slider.js";
import { initTabSection } from "event/2nd/e-main/components/tab-section/tab-section.js";
import { initDynamicSlider } from "event/2nd/e-main/components/dynamic-slider/dynamic-slider.js";
import { initBnSection } from 'event/2nd/e-main/components/bn-section/bn-section.js';
import { initRandomW3m3 } from "event/2nd/e-main/components/event-w3m3/event-w3m3.js";
import { initDynamicHalfSlider } from 'event/2nd/e-main/components/dynamic-slider-half/dynamic-slider-half.js';
import { initBnSection2 } from 'event/2nd/e-main/components/bn-section-2/bn-section-2.js';
import { initDailyTime } from "event/2nd/e-main/components/daily-time/daily-time.js";
import { initBnSlider } from 'event/2nd/e-main/components/bn-slider/bn-slider.js'
import { initSpecialSlider } from 'event/2nd/e-main/components/bn-special/bn-special.js'

/**
 * page js
 */

// var scrollBgTop = document.getElementById("scrollBgTop");

// function scrollAddFixed() {
//   if (window.scrollY >= 700) {
//     scrollBgTop.classList.add("bg-fixed");
//   } else {
//     scrollBgTop.classList.remove("bg-fixed");
//   }
// }

// scrollAddFixed();
// document.addEventListener("scroll", scrollAddFixed);

// remove door shaking animation
// setTimeout(function(){
//   var doorShaking = document.querySelector('.door-shaking-animate');
//   doorShaking.classList.remove('door-shaking-animate');
// }, 1600);