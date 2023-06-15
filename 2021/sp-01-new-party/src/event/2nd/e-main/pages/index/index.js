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
import "event/2nd/e-main/components/bg-decoration/bg-decoration.js"
import { initDailyChange } from "event/2nd/e-main/components/daily-change/daily-change.js"
import { initPromo } from 'event/2nd/e-main/components/promo-event/promo-event.js'
import { initTextSlider } from 'event/2nd/e-main/components/text-slider/text-slider.js'
import { initSliderDaily } from "event/2nd/e-main/components/daily-tab/daily-tab.js"
import { initLeftRight } from "event/2nd/e-main/components/left-right-section/left-right-section.js"
import { initSliderMidMore } from "event/2nd/e-main/components/mid-more-slider/mid-more-slider.js"
import { initBuildTabSlider } from 'event/2nd/e-main/components/tab-slider-section/tab-slider-section.js'
import { initSliderSpecial } from "event/2nd/e-main/components/bn-special/bn-special.js"
import { initSliderDynamic2 } from "event/2nd/e-main/components/dynamic-slider-2/dynamic-slider-2.js"
import { initSliderDynamic3 } from "event/2nd/e-main/components/dynamic-slider-3/dynamic-slider-3.js"

// ==========================================================================
// page js
// ==========================================================================

new WOW().init()