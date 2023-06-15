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

// // ==========================================================================
// // import components js modules
// // ==========================================================================
import { initPromoSlider } from 'event/1st/e-line/components/promo-event/promo-event.js'
import { initScrollBnSpecial } from "event/1st/e-line/components/bn-special/deco-bn-special.js"
import { initSpecialSlider } from "event/1st/e-line/components/bn-special/bn-special.js"

// ==========================================================================
// page js
// ==========================================================================
import { getScrollTop } from 'utils/js/detect.js'
import { isWindowWidth } from 'utils/js/detect.js'

if ( isWindowWidth( 960 ) ) {
  window.addEventListener( 'scroll', function () {
    var scrollHeight = 1000;
    if ( getScrollTop() >= scrollHeight ) {
      document.body.style.backgroundPositionY = 100 + '%';
    } else {
      document.body.style.backgroundPositionY = 0;
    }
  });
}

new WOW().init()
