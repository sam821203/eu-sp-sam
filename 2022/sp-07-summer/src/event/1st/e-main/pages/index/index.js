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
import { initPromo } from "event/1st/e-main/components/promo-event/promo-event.js";
import { initPromoSection } from "event/1st/e-main/components/promo-section/promo-section.js";
import { initSliderDynamic } from "event/1st/e-main/components/dynamic-slider/dynamic-slider.js";
import { initTabSection } from "event/1st/e-main/components/tab-section/tab-section.js";
import { initRandomW3M3 } from "event/1st/e-main/components/event-w3m3/event-w3m3.js";
import { initBnSlider } from "event/1st/e-main/components/bn-slider/bn-slider.js";
import { initBeatGame } from "event/1st/e-main/components/beat-game/beat-game.js";
import { initPromoSliderSec } from "event/1st/e-main/components/promo-slider-sec/promo-slider-sec.js";
import { initPromoSlider2 } from "event/1st/e-main/components/promo-slider-2/promo-slider-2.js";
// import { initBnSection } from "event/1st/e-main/components/bn-section/bn-section.js";
import { initDailyTime } from "event/1st/e-main/components/daily-time/daily-time.js";

/**
 * page js
 */

var scrollBgTop = document.getElementById("decorBgTop");
var scrollBgBottom = document.getElementById("decorBgBottom");

function scrollAddFixed() {
  if (window.scrollY >= 250) {
    document.body.classList.add("bg-fixed");
  } else {
    document.body.classList.remove("bg-fixed");
  }
}
document.addEventListener("scroll", scrollAddFixed);

function scrollTopAddFixed() {
  var bgTop = document.querySelector(".bg-web--top");
  if (window.scrollY >= 250) {
    bgTop.classList.add("bg-fixed");
  } else {
    bgTop.classList.remove("bg-fixed");
  }
}
document.addEventListener("scroll", scrollTopAddFixed);
