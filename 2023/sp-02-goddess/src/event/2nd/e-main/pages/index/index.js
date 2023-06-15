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

// import loading video
import "event/2nd/e-main/components/hero-section/hero-video/hero-video.js"

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
import { initPromo } from "event/2nd/e-main/components/promo-event/promo-event.js";
import { initSliderW1M1 } from "event/2nd/e-main/components/slider-w1m1/slider-w1m1.js";
import { initSliderW3M3 } from "event/2nd/e-main/components/slider-w3m3/slider-w3m3.js";
import { initRandomW4m2 } from "event/2nd/e-main/components/event-w4m2/event-w4m2.js";
import { initTabSection } from "event/2nd/e-main/components/tab-section/tab-section.js";
import { initRandomW3m3 } from "event/2nd/e-main/components/event-w3m3/event-w3m3.js";
import { initDynamicSlider } from "event/2nd/e-main/components/dynamic-slider/dynamic-slider.js";
import { initTabSection2 } from "event/2nd/e-main/components/tab-section2/tab-section2.js";
// import { initDailySlider } from "event/2nd/e-main/components/daily-slider/daily-slider.js";
// import { initPromoSlider } from 'event/2nd/e-main/components/promo-slider/promo-slider.js';
import { initDailyTime } from "event/2nd/e-main/components/daily-time/daily-time.js";
import { initDynamicSliderW2M2 } from 'event/2nd/e-main/components/dynamic-slider-w2m2/dynamic-slider-w2m2.js';
import { initBnSlider } from 'event/2nd/e-main/components/bn-slider/bn-slider.js'
import { initBnSection } from 'event/2nd/e-main/components/bn-section/bn-section.js';
// import { initDynamicHalfSlider } from 'event/2nd/e-main/components/dynamic-slider-half/dynamic-slider-half.js';
import { initPromoSpecial } from "event/2nd/e-main/components/promo-special/promo-special.js";
import { initBnSection2 } from 'event/2nd/e-main/components/bn-section-2/bn-section-2.js';


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

// 偵測是否要隱藏小網nav(大網、有電梯時、scroll一定距離內隱藏)
window.addEventListener('load', hideSpIconWebWhenNav);
window.addEventListener('resize', hideSpIconWebWhenNav);

function hideSpIconWebWhenNav() {
  var windowWidth = document.body.clientWidth;
  var spIconFixed = document.getElementById( 'spIconFixed' );
  var navGoTop = document.getElementById('navGoTop');

  if ( navGoTop && windowWidth >= 1260 ) {
    spIconFixed.style.display = 'none';
  } else {
    // 超過一定高度才要露出
    window.addEventListener('scroll', detectShowSpIconFixed);
  }
}

function detectShowSpIconFixed () {
  var spIconFixed = document.getElementById( 'spIconFixed' );
  if (window.scrollY >= 300) {
    spIconFixed.classList.add('is-visible');
  } else {
    spIconFixed.classList.remove('is-visible');
  }
}