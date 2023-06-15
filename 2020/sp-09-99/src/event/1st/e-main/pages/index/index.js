// ==========================================================================
// import vendor js modules
// ==========================================================================
// swiper 6.1.2 no IE
import 'swiper/swiper-bundle.css';
import 'vendors/js/swiper-ie-polyfill.js'

// swiper 5.4.5 support IE 11
// import 'swiper/css/swiper.min.css';

// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'

// ==========================================================================
// import components js modules
// ==========================================================================
import { initDailyPromo } from "event/1st/e-main/components/promo-event/promo-event.js"
import { initBuildByCustomTime } from "event/1st/e-main/components/promo-event/promo-event-2.js"
import { initRandomSelect } from "event/1st/e-main/components/random-select/random-select.js"
import { initDailyChange } from "event/1st/e-main/components/daily-change/daily-change.js"
import { initSliderDynamicHalf } from "event/1st/e-main/components/dynamic-slider-half/dynamic-slider-half.js"
import { initSliderSpecialHalf } from "event/1st/e-main/components/bn-special-half/bn-special-half.js"
import { initSliderBnEvent } from "event/1st/e-main/components/bn-event/bn-event.js"
import { initSliderDynamic } from "event/1st/e-main/components/dynamic-slider/dynamic-slider.js"
import { initSliderDynamic2 } from "event/1st/e-main/components/dynamic-slider-2/dynamic-slider-2.js"
import { initSliderDynamic3 } from "event/1st/e-main/components/dynamic-slider-3/dynamic-slider-3.js"

// ==========================================================================
// page js
// ==========================================================================
