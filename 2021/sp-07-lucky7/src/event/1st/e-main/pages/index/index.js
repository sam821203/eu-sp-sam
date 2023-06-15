/**
 * global const variables
 */
var globalSpStartTime = '2021/6/30';
var globalSpDurationDays = 23;

document.body.classList.add('js-loading');

/**
 * import vendor js modules
 */
import WOW from 'wow.js/dist/wow.js'
new WOW().init();

// swiper 6.1.2 no IE, add polyfill
import 'swiper/swiper-bundle.css'
import 'vendors/js/swiper-ie-polyfill.js'

// import 'vendors/js/lazyload.js'

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'

/**
 * import components js modules
 */
// // import 'event/1st/e-main/components/hero-section/hero-section.js'
import { initScrollHeroSection } from 'event/1st/e-main/components/hero-section/deco-hero-section.js'
import { initPromoSlider } from 'event/1st/e-main/components/promo-event/promo-event.js'
// import { initBuildPromoByTime } from 'event/1st/e-main/components/promo-event/promo-event-2.js'
import { initDailyChange } from 'event/1st/e-main/components/daily-change/daily-change.js'
import { initRandomW3M3 } from 'event/1st/e-main/components/event-w3m3/event-w3m3.js'
import { initDailySlider } from 'event/1st/e-main/components/daily-slider/daily-slider.js'
// import { initScrollBnSlider } from 'event/1st/e-main/components/bn-slider/deco-bn-slider.js'
import { initBnSlider } from 'event/1st/e-main/components/bn-slider/bn-slider.js'
import { initScrollLeftRightSection } from 'event/1st/e-main/components/left-right-section/deco-leftRight-section.js'
import { initLeftRight } from 'event/1st/e-main/components/left-right-section/left-right-section.js'
import { initDoubleSlider } from 'event/1st/e-main/components/double-slider/double-slider.js'
import { initScrollBnSpecial } from 'event/1st/e-main/components/bn-special/deco-bn-special.js'
import { initSpecialSlider } from 'event/1st/e-main/components/bn-special/bn-special.js'
import { initBnSlider2 } from 'event/1st/e-main/components/bn-slider-2/bn-slider-2.js'
import { initScrollDynamicSection } from 'event/1st/e-main/components/dynamic-section/deco-dynamic-section.js'
import { initDynamicSection } from 'event/1st/e-main/components/dynamic-section/dynamic-section.js'
import { initScrollDynamicSection2 } from 'event/1st/e-main/components/dynamic-section-2/deco-dynamic-section-2.js'
import { initDynamicSection2 } from 'event/1st/e-main/components/dynamic-section-2/dynamic-section-2.js'
import { initScrollDynamicSliderHref_2 } from 'event/1st/e-main/components/dynamic-slider-half-2/deco-dynamic-slider-half-2.js'
import { initDynamicHalfSlider2 } from 'event/1st/e-main/components/dynamic-slider-half-2/dynamic-slider-half-2.js'
import { initDynamicHalfSlider } from 'event/1st/e-main/components/dynamic-slider-half/dynamic-slider-half.js'
import { initTwoDaySlider } from 'event/1st/e-main/components/two-day-slider/two-day-slider.js'
//- 無滾動
// import { initScrollDailyTime } from 'event/1st/e-main/components/daily-time/deco-daily-time.js'
import { initDailyTime } from 'event/1st/e-main/components/daily-time/daily-time.js'

import { initInfoCover } from "event/1st/e-main/components/info-cover/info-cover.js"
import { initGame } from "event/1st/e-main/components/puzzle/puzzle.js"
import { initRandomCard } from "event/1st/e-main/components/random-card/random-card.js"

/**
 * page js
 */
// import { getScrollTop } from 'utils/js/detect.js'
// import { isWindowWidth } from 'utils/js/detect.js'

// if ( isWindowWidth( 960 ) ) {
//   window.addEventListener( 'scroll', function () {
//     var scrollHeight = 1000;
//     if ( getScrollTop() >= scrollHeight ) {
//       document.body.style.backgroundPositionY = 100 + '%';
//     } else {
//       document.body.style.backgroundPositionY = 0;
//     }
//   });
// }
