// ==========================================================================
// import vendor js modules
// ==========================================================================
import WOW from 'wow.js/dist/wow.js'

// swiper 6.1.2 no IE
import 'swiper/swiper-bundle.css'
import 'vendors/js/swiper-ie-polyfill.js'

// swiper 5.4.5 support IE 11
// import 'swiper/css/swiper.min.css'

import 'vendors/js/lazyload.js'
// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'

// ==========================================================================
// import components js modules
// ==========================================================================
import "event/test/e-main/components/bg-decoration/bg-decoration.js"
import { initPromo } from 'event/test/e-main/components/promo-event/promo-event.js'
import { initTextSlider } from 'event/test/e-main/components/text-slider/text-slider.js'
import { initSliderMidMore } from "event/test/e-main/components/mid-more-slider/mid-more-slider.js"
import { initBuildTabSlider } from 'event/test/e-main/components/tab-slider-section/tab-slider-section.js'
import { initSliderSpecial } from "event/test/e-main/components/bn-special/bn-special.js"

// ==========================================================================
// page js
// ==========================================================================

new WOW().init()