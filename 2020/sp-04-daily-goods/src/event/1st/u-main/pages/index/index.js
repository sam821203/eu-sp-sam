// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
// import { globalPolyfill } from 'utils/js/polyfill'
// import { initLazyload } from 'vendors/js/lazyload'
import { initGobalUXItems } from 'utils/js/generate'
// import { makeParallaxDefault } from 'utils/js/parallax-scroll'
// import { makeParallaxBgDefault } from 'utils/js/parallax-scroll'

// ==========================================================================
// import components js modules
// ==========================================================================
import { initSliderSpecial } from 'event/1st/u-main/components/bn-special/bn-special.js'
import { initdailyChange } from 'event/1st/u-main/components/daily-change/daily-change.js'

// ==========================================================================
// page js
// ==========================================================================

new WOW().init();
