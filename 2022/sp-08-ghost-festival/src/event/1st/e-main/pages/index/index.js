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
import { initPromoSection } from "event/1st/e-main/components/promo-section/promo-section.js";
import { initPromo } from "event/1st/e-main/components/promo-event/promo-event.js";
import { initDailySlider } from 'event/1st/e-main/components/daily-slider/daily-slider.js'
import { initDynamicSlider } from "event/1st/e-main/components/dynamic-slider/dynamic-slider.js";
import { initTabSection } from "event/1st/e-main/components/tab-section/tab-section.js";
import { initDynamicHalfSlider } from 'event/1st/e-main/components/dynamic-slider-half/dynamic-slider-half.js'
import { initBnSection } from 'event/1st/e-main/components/bn-section/bn-section.js'
import { initDailyTime } from "event/1st/e-main/components/daily-time/daily-time.js";

/**
 * page js
 */

var scrollBgTop = document.getElementById("scrollBgTop");

function scrollAddFixed() {
  if (window.scrollY >= 700) {
    scrollBgTop.classList.add("bg-fixed");
  } else {
    scrollBgTop.classList.remove("bg-fixed");
  }
}

scrollAddFixed();
document.addEventListener("scroll", scrollAddFixed);