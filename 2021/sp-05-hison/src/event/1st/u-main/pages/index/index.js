// ==========================================================================
// import vendor js modules
// ==========================================================================
import WOW from 'wow.js/dist/wow.js'

// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'

// // ==========================================================================
// // import components js modules
// // ==========================================================================

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
