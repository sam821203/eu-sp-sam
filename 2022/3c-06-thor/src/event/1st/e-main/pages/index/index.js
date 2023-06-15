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

// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from "utils/js/ie9-alert";
import { notSupportAndroid5 } from "utils/js/android5-alert";
import { initGobalUXItems } from "utils/js/generate";

// ==========================================================================
// import components js modules
// ==========================================================================

import { initGame } from "event/1st/e-main/components/puzzle/puzzle.js";
import { initRandomCard } from "event/1st/e-main/components/random-card/random-card.js";
import { initInfoCover } from "event/1st/e-main/components/info-cover/info-cover.js";
import {
  initDailyTab,
  dragOverflow,
} from "event/1st/e-main/components/daily-tab/daily-tab.js";

// import { dragOverflow } from "event/1st/e-main/components/daily-tab/daily-tab.js";

// ==========================================================================
// page js
// ==========================================================================
new WOW().init();
