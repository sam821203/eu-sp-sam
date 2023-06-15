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
// import { initHero } from "event/1st/e-main/components/hero-section/hero-section.js";
// import { initParallax } from 'utils/bg-decoration-instance/parallax/parallax.js';
import { initPromo } from "event/1st/e-main/components/promo-event/promo-event.js";
import { initDynamicSliderW3M3 } from 'event/1st/e-main/components/dynamic-slider-w3m3/dynamic-slider-w3m3.js';
import { initDynamicSliderW2M2 } from 'event/1st/e-main/components/dynamic-slider-w2m2/dynamic-slider-w2m2.js';
import { initRandomW3m3 } from "event/1st/e-main/components/event-w3m3/event-w3m3.js";
import { initDynamicSliderW2M22 } from 'event/1st/e-main/components/dynamic-slider-w2m2-2/dynamic-slider-w2m2-2.js';
import { initRandomW3m32 } from "event/1st/e-main/components/event-w3m3-2/event-w3m3-2.js";

import { initBnSection } from 'event/1st/e-main/components/bn-section/bn-section.js';
import { initTabSection } from "event/1st/e-main/components/tab-section/tab-section.js";
import { initBnSection2 } from 'event/1st/e-main/components/bn-section-2/bn-section-2.js';
import { initDailyTime } from "event/1st/e-main/components/daily-time/daily-time.js";
import { initBnSlider } from 'event/1st/e-main/components/bn-slider/bn-slider.js'
import { initPromoSpecial } from "event/1st/e-main/components/promo-special/promo-special.js";
import { initBnSection3 } from 'event/1st/e-main/components/bn-section-3/bn-section-3.js';
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