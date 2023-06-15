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
// import "event/3rd/e-main/components/test/test.js"
import "event/3rd/e-main/components/bg-decoration/bg-decoration.js"
import { initCanvasFireWork } from"utils/bg-decoration-instance/canvas-firework/canvas-firework"
import "event/3rd/e-main/components/hero-section/hero-section.js"
import "utils/bg-decoration-instance/canvas-random-color/canvas-random-color.js"
import { initDailyChange } from "event/3rd/e-main/components/daily-change/daily-change.js"
import { initPromoSlider } from 'event/3rd/e-main/components/promo-event/promo-event.js'
import { initBuildTab } from 'event/3rd/e-main/components/tab-section/tab-section.js'
import { initSliderTopBottom } from "event/3rd/e-main/components/top-bottom-section/top-bottom-section.js"
import { initSliderMidBig } from "event/3rd/e-main/components/mid-big-slider/mid-big-slider.js"
import { initSliderDynamic2 } from "event/3rd/e-main/components/dynamic-slider-2/dynamic-slider-2.js"
import { initSliderDynamic3 } from "event/3rd/e-main/components/dynamic-slider-3/dynamic-slider-3.js"
import { initSliderSpecial } from "event/3rd/e-main/components/bn-special/bn-special.js"
import { initSliderMidMore } from "event/3rd/e-main/components/mid-more-slider/mid-more-slider.js"
import { initBuildTabSlider } from 'event/3rd/e-main/components/tab-slider-section/tab-slider-section.js'

// ==========================================================================
// page js
// ==========================================================================

new WOW().init()