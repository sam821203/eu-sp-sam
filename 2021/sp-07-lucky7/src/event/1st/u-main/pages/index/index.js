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

/**
 * page js
 */
// import { getScrollTop } from 'utils/js/detect.js'
// import { isWindowWidth } from 'utils/js/detect.js'

import { initBuildPromoByTime } from 'event/1st/u-main/components/promo-event/promo-event-2.js'
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
