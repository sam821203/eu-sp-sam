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
import "event/1st/e-main/components/hero-section/hero-video/hero-video.js";

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
import { initHero } from "event/1st/e-main/components/hero-section/hero-section.js";
// import { initParallax } from 'utils/bg-decoration-instance/parallax/parallax.js';

import { initPromo } from "event/1st/e-main/components/promo-event/promo-event.js";
import { initSliderW2M2 } from "event/1st/e-main/components/slider-w2m2/slider-w2m2.js";
import { initTabSection } from "event/1st/e-main/components/tab-section/tab-section.js";
import { initRandomW4M2 } from "event/1st/e-main/components/event-w4m2/event-w4m2.js";
import { initDailySlider } from "event/1st/e-main/components/daily-slider/daily-slider.js";
import { initTabSection2 } from "event/1st/e-main/components/tab-section2/tab-section2.js";
import { initSliderW3M3 } from "event/1st/e-main/components/slider-w3m3/slider-w3m3.js";
import { initPromoSlider } from "event/1st/e-main/components/promo-slider/promo-slider.js";
import { initDailyTime } from "event/1st/e-main/components/daily-time/daily-time.js";
import { initDynamicSliderW2M2 } from "event/1st/e-main/components/dynamic-slider-w2m2/dynamic-slider-w2m2.js";
import { initBnSlider } from "event/1st/e-main/components/bn-slider/bn-slider.js";
import { initBnSection } from "event/1st/e-main/components/bn-section/bn-section.js";
import { initPromoSpecial } from "event/1st/e-main/components/promo-special/promo-special.js";
import { initBnSection2 } from "event/1st/e-main/components/bn-section-2/bn-section-2.js";

/**
 * page js
 */
// const decorCity = document.querySelector(".decor__city");
// let currentPixel = window.pageYOffset

// //looper keeps running and keeps track of where the new pixel is
// const looper = function () {
//   const newPixel = window.pageYOffset;
//   const diff = newPixel - currentPixel
//   const speed = diff * 0.8;
  
//   decorCity.style.transform = "translateX(" + speed + "%)"
  
  
//   currentPixel = newPixel;
  
//   requestAnimationFrame(looper)
// }

// looper();

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
