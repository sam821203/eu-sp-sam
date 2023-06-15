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
// import { initHero } from 'event/2nd/e-main/components/hero-section/hero-section.js'
import 'utils/bg-decoration-instance/parallax/parallax.js'
import { initPromoSlider } from 'event/2nd/e-main/components/promo-event/promo-event.js'
// import { initBuildPromoByTime } from 'event/2nd/e-main/components/promo-event/promo-event-2.js'
import { initScrollDaily } from 'event/2nd/e-main/components/daily-change/decor-daily-change.js'
import { initMatch } from 'event/2nd/e-main/components/match-game/match-game.js'
// import 'event/2nd/e-main/components/match-game/match-game-core.js'
import { initDailyChange } from 'event/2nd/e-main/components/daily-change/daily-change.js'
import { initRandomW3M3 } from 'event/2nd/e-main/components/event-w3m3/event-w3m3.js'
import { initDailySlider } from 'event/2nd/e-main/components/daily-slider/daily-slider.js'
import { initBnSlider } from 'event/2nd/e-main/components/bn-slider/bn-slider.js'
import { initGameDate } from 'event/2nd/e-main/components/event-w1m1-2/event-w1m1-2.js'
// import { initBnSlider2 } from 'event/2nd/e-main/components/bn-slider-2/bn-slider-2.js'
import { initDynamicSection } from 'event/2nd/e-main/components/dynamic-section/dynamic-section.js'
import { initScrollDynamicSlider } from 'event/2nd/e-main/components/dynamic-slider/decor-dynamic-slider.js'
import { initSliderDynamic } from 'event/2nd/e-main/components/dynamic-slider/dynamic-slider.js'
import { initBnSlider3 } from 'event/2nd/e-main/components/bn-slider-3/bn-slider-3.js'
import { initDynamicHalfSlider2 } from 'event/2nd/e-main/components/dynamic-slider-half-2/dynamic-slider-half-2.js'
import { initDynamicHalfSlider } from 'event/2nd/e-main/components/dynamic-slider-half/dynamic-slider-half.js'
import { initScrollBnSpecial } from 'event/2nd/e-main/components/bn-special/decor-bn-special.js'
import { initSpecialSlider } from 'event/2nd/e-main/components/bn-special/bn-special.js'
import { initScrollDailyTime } from 'event/2nd/e-main/components/daily-time/decor-daily-time.js'
import { initDailyTime } from 'event/2nd/e-main/components/daily-time/daily-time.js'
import { initTwoDaySlider } from 'event/2nd/e-main/components/two-day-slider/two-day-slider.js'

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
