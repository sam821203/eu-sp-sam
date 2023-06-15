// ==========================================================================
// import vendor js modules
// ==========================================================================
import WOW from 'wow.js/dist/wow.js'

// swiper 6.1.2 no IE
import 'swiper/swiper-bundle.css'
import 'vendors/js/swiper-ie-polyfill.js'

// swiper 5.4.5 support IE 11
// import 'swiper/css/swiper.min.css'

// import 'vendors/js/lazyload.js'
// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'

// ==========================================================================
// import components js modules
// ==========================================================================
// import "event/2nd/u-main/components/hero-section/hero-section.js"
// import { initDailyChange } from "event/2nd/u-main/components/daily-change/daily-change.js"

import { initSliderSpecial } from "event/2nd/u-main/components/bn-special/bn-special.js"

// ==========================================================================
// page js
// ==========================================================================
// import { getScrollTop } from 'utils/js/detect.js'
// import { isWindowWidth } from 'utils/js/detect.js'
//
// var scrollHeight = isWindowWidth( 600 ) ? 750 : 450;
// var heroCloud = document.getElementById( 'decoCloud' );
//
// window.addEventListener( 'scroll', function () {
//   if ( getScrollTop() >= scrollHeight ) {
//     if ( isWindowWidth( 960 ) ) {
//       document.body.style.backgroundPositionY = 50 + '%';
//     }
//     heroCloud.classList.add( 'move' );
//   } else {
//     if ( isWindowWidth( 960 ) ) {
//       document.body.style.backgroundPositionY = 0;
//     }
//     heroCloud.classList.remove( 'move' );
//   }
// });


new WOW().init()
