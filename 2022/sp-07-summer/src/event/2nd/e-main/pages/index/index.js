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
import "utils/bg-decoration-instance/canvas-firework/canvas-firework";

import { initPromo } from "event/2nd/e-main/components/promo-event/promo-event.js";
import { initPromoSection } from "event/2nd/e-main/components/promo-section/promo-section.js";
import { initSliderDynamic } from "event/2nd/e-main/components/dynamic-slider/dynamic-slider.js";
import { initSliderDynamic2 } from "event/2nd/e-main/components/dynamic-slider-2/dynamic-slider-2.js";
import { initTabSection } from "event/2nd/e-main/components/tab-section/tab-section.js";
import { initRandomW3M3 } from "event/2nd/e-main/components/event-w3m3/event-w3m3.js";
import { initBnSlider } from "event/2nd/e-main/components/bn-slider/bn-slider.js";
import { initBeatGame } from "event/2nd/e-main/components/beat-game/beat-game.js";
import { initPromoSliderSec } from "event/2nd/e-main/components/promo-slider-sec/promo-slider-sec.js";
import { initPromoSlider2 } from "event/2nd/e-main/components/promo-slider-2/promo-slider-2.js";
import { initDailyTime } from "event/2nd/e-main/components/daily-time/daily-time.js";

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

// 等頁面下載完時，載入Hero動畫
function loadBoatAnime() {
  document.querySelector(".bg-web--boat").classList.add("js--loadBoatAnime");
}
window.addEventListener("load", loadBoatAnime);

function loadFigureAnime() {
  document.querySelector(".decor__figure").classList.add("js--loadFigureAnime");
}
window.addEventListener("load", loadFigureAnime);

function loadHeroTitleAnime() {
  document
    .querySelector(".hero__title--main")
    .classList.add("js--loadHeroTitleAnime");
}
window.addEventListener("load", loadHeroTitleAnime);
