// ==========================================================================
// import vendor js modules
// ==========================================================================
// swiper 6.1.2 no IE
import WOW from 'wow.js/dist/wow.js'
import 'vendors/js/swiper-ie-polyfill.js'

// swiper 5.4.5 support IE 11
// import 'swiper/css/swiper.min.css'

// ==========================================================================
// import normal layout js modules
// ==========================================================================
import {notSupportIE9Alert} from 'utils/js/ie9-alert'
import {notSupportAndroid5} from 'utils/js/android5-alert'
import {initGlobalUXItems} from 'utils/js/generate'

// ==========================================================================
// import components js modules
// ==========================================================================
import {initBuildTab} from 'event/1st/e-main/components/tab-section/tab-section.js'
// ==========================================================================
// page js
// ==========================================================================

new WOW().init();