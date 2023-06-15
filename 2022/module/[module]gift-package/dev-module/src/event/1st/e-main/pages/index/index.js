// document.body.classList.add('js-loading');

/**
 * import vendor js modules
 */
import WOW from 'wow.js/dist/wow.js';
new WOW().init();

// swiper 6.1.2 no IE, add polyfill
import 'swiper/swiper-bundle.css';
import 'vendors/js/swiper-ie-polyfill.js';

// import 'vendors/js/lazyload.js'

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from 'utils/js/ie9-alert';
import { notSupportAndroid5 } from 'utils/js/android5-alert';
// 禮包直接改用線上版的js就可以了
import { initGlobalUXItems } from 'utils/js/generate';

/**
 * import components js modules
 */
import { initPromoSlider } from 'event/1st/e-main/components/slider-w5m3/slider-w5m3.js';

/**
 * page js
 */
// function scrollAddFixed () {
//   if ( window.scrollY >= 900 ) {
//     document.body.classList.add( 'bg-fixed' );
//   } else {
//     document.body.classList.remove( 'bg-fixed' );
//   }
// }

// document.addEventListener( 'scroll', scrollAddFixed );
