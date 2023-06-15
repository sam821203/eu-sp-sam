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
import { initPromoSlider } from 'event/3rd/e-main/components/promo-event/promo-event.js'
// import { initBuildPromoByTime } from 'event/3rd/e-main/components/promo-event/promo-event-2.js'
import { initDailyChange } from 'event/3rd/e-main/components/daily-change/daily-change.js'
import { initRandomW3M3 } from 'event/3rd/e-main/components/event-w3m3/event-w3m3.js'
import { initDailySlider } from 'event/3rd/e-main/components/daily-slider/daily-slider.js'
import { initScrollBnSlider } from 'event/3rd/e-main/components/bn-slider/deco-bn-slider.js'
import { initBnSlider } from 'event/3rd/e-main/components/bn-slider/bn-slider.js'
import { initLeftRight } from 'event/3rd/e-main/components/left-right-section/left-right-section.js'
import { initBnSlider2 } from 'event/3rd/e-main/components/bn-slider-2/bn-slider-2.js'
import { initRandomChoose } from 'event/3rd/e-main/components/random-choose/random-choose.js'
import { initScrollDynamicSlider } from 'event/3rd/e-main/components/dynamic-slider/deco-dynamic-slider.js'
import { initDynamicSlider } from 'event/3rd/e-main/components/dynamic-slider/dynamic-slider.js'
import { initDoubleSlider } from 'event/3rd/e-main/components/double-slider/double-slider.js'
import { initScrollBnSpecial } from 'event/3rd/e-main/components/bn-special/deco-bn-special.js'
import { initSpecialSlider } from 'event/3rd/e-main/components/bn-special/bn-special.js'
import { initScrollDynamicSection } from 'event/3rd/e-main/components/dynamic-section/deco-dynamic-section.js'
import { initDynamicSection } from 'event/3rd/e-main/components/dynamic-section/dynamic-section.js'
import { initScrollDynamicSection2 } from 'event/3rd/e-main/components/dynamic-section-2/deco-dynamic-section-2.js'
import { initDynamicSection2 } from 'event/3rd/e-main/components/dynamic-section-2/dynamic-section-2.js'
import { initScrollDynamicSection3 } from 'event/3rd/e-main/components/dynamic-section-3/deco-dynamic-section-3.js'
import { initDynamicSection3 } from 'event/3rd/e-main/components/dynamic-section-3/dynamic-section-3.js'
import { initScrollDynamicSection4 } from 'event/3rd/e-main/components/dynamic-section-4/deco-dynamic-section-4.js'
import { initDynamicSection4 } from 'event/3rd/e-main/components/dynamic-section-4/dynamic-section-4.js'
import { initDynamicHalfSlider2 } from 'event/3rd/e-main/components/dynamic-slider-half-2/dynamic-slider-half-2.js'
import { initMidBigSlider } from "event/3rd/e-main/components/mid-big-slider/mid-big-slider.js"
import { initDynamicHalfSlider } from 'event/3rd/e-main/components/dynamic-slider-half/dynamic-slider-half.js'
import { initTwoDaySlider } from 'event/3rd/e-main/components/two-day-slider/two-day-slider.js'
import { initScrollDailyTime } from 'event/3rd/e-main/components/daily-time/deco-daily-time.js'
import { initDailyTime } from 'event/3rd/e-main/components/daily-time/daily-time.js'


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
