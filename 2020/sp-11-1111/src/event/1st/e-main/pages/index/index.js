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
import "utils/bg-decoration-instance/canvas-random-color/canvas-random-color.js"
import { initDailyChange } from "event/1st/e-main/components/daily-change/daily-change.js"
import { initBuildTab } from 'event/1st/e-main/components/tab-section/tab-section.js'
import { initSliderDaily } from "event/2nd/e-main/components/daily-slider/daily-slider.js"
import { initSliderTopBottom } from "event/1st/e-main/components/top-bottom-section/top-bottom-section.js"
// import { initSliderDynamic } from "event/1st/e-main/components/dynamic-slider/dynamic-slider.js"
import { initSliderMidBig } from "event/1st/e-main/components/mid-big-slider/mid-big-slider.js"
import { initSliderDynamic2 } from "event/1st/e-main/components/dynamic-slider-2/dynamic-slider-2.js"
import { initSliderDynamic3 } from "event/1st/e-main/components/dynamic-slider-3/dynamic-slider-3.js"
import { initSliderSpecial } from "event/1st/e-main/components/bn-special/bn-special.js"
import { initSliderMidMore } from "event/1st/e-main/components/mid-more-slider/mid-more-slider.js"
import { initBuildTabSlider } from 'event/1st/e-main/components/tab-slider-section/tab-slider-section.js'

// import { initSliderDaily } from "event/1st/e-main/components/daily-slider/daily-slider.js"

// ==========================================================================
// page js
// ==========================================================================

new WOW().init()