// ==========================================================================
// import vendor js modules
// ==========================================================================
import WOW from 'wow.js/dist/wow.js'

// swiper 6.1.2 no IE
import 'swiper/swiper-bundle.css'
import 'vendors/js/swiper-ie-polyfill.js'
import { globalPolyfill } from 'utils/js/polyfill'
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
// import "event/2nd/e-main/components/hero-section/hero-section.js"
import { initDailyChange } from "event/2nd/e-main/components/daily-change/daily-change.js"
import { initDailyChange_2 } from "event/2nd/e-main/components/daily-change-2/daily-change-2.js"
import { initBuildByCustomTime } from 'event/2nd/e-main/components/promo-event/promo-event-2.js'
import { initDailyTab } from 'event/2nd/e-main/components/daily-tab/daily-tab.js'
// import { initSliderDaily } from "event/2nd/e-main/components/daily-slider/daily-slider.js"
// import { initSliderDynamic } from "event/2nd/e-main/components/dynamic-slider/dynamic-slider.js"
// import { initSliderDynamic2 } from "event/2nd/e-main/components/dynamic-slider-2/dynamic-slider-2.js"
// import { initSliderDynamic3 } from "event/2nd/e-main/components/dynamic-slider-3/dynamic-slider-3.js"
// import { initSliderDynamic4 } from "event/2nd/e-main/components/dynamic-slider-4/dynamic-slider-4.js"
// import { initBuildTabSlider } from 'event/2nd/e-main/components/tab-slider-section/tab-slider-section.js'
import { initSliderSpecial } from "event/2nd/e-main/components/bn-special/bn-special.js"
import { initCollectPoint } from "event/2nd/e-main/components/collect__point/collect__point.js"
import {initLeftRight} from "event/2nd/e-main/components/left-right-section/left-right-section.js"
import {initBuildTab_1} from "event/2nd/e-main/components/tab-section-1/tab-section-1.js"
import {initBuildTab_2} from "event/2nd/e-main/components/tab-section-2/tab-section-2.js"
import { initSliderDynamicHalf } from "event/2nd/e-main/components/dynamic-slider-half/dynamic-slider-half.js"
import { initDoubleSlider } from "event/2nd/e-main/components/slider-section-double/slider-section-double.js"
import { initSliderBank } from "event/2nd/e-main/components/bn-bank/bn-bank.js"

// ==========================================================================
// page js
// ==========================================================================

new WOW().init()