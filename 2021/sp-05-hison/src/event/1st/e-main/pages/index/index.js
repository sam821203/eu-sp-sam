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
// // import "event/1st/e-main/components/hero-section/hero-section.js"
import { initDailyChange } from "event/1st/e-main/components/daily-change/daily-change.js"
import { initPromoSlider } from 'event/1st/e-main/components/promo-event/promo-event.js'
import { initBuildPromoByTime } from 'event/1st/e-main/components/promo-event/promo-event-2.js'
import { initDailySlider } from "event/1st/e-main/components/daily-slider/daily-slider.js"

import { initScrollDynamicSection } from "event/1st/e-main/components/dynamic-section/deco-dynamic-section.js"
import { initDynamicSection } from "event/1st/e-main/components/dynamic-section/dynamic-section.js"
import { initScrollDynamicSection2 } from "event/1st/e-main/components/dynamic-section-2/deco-dynamic-section-2.js"
import { initDynamicSection2 } from "event/1st/e-main/components/dynamic-section-2/dynamic-section-2.js"
import { initScrollDynamicSlider } from "event/1st/e-main/components/dynamic-slider/deco-dynamic-slider.js"
import { initDynamicSlider } from "event/1st/e-main/components/dynamic-slider/dynamic-slider.js"
import { initDynamicSlider2 } from "event/1st/e-main/components/dynamic-slider-2/dynamic-slider-2.js"
import { initScrollBnSlider } from "event/1st/e-main/components/bn-slider/deco-bn-slider.js"
import { initBnSlider } from "event/1st/e-main/components/bn-slider/bn-slider.js"
import { initScrollBnSpecial } from "event/1st/e-main/components/bn-special/deco-bn-special.js"
import { initSpecialSlider } from "event/1st/e-main/components/bn-special/bn-special.js"
import { initDynamicHalfSlider } from "event/1st/e-main/components/dynamic-slider-half/dynamic-slider-half.js"
import { initScrollLeftRight } from "event/1st/e-main/components/left-right-section/deco-left-right.js"
import { initLeftRight } from "event/1st/e-main/components/left-right-section/left-right-section.js"
import { initTwoDaySlider } from "event/1st/e-main/components/two-day-slider/two-day-slider.js"
import { initDailyTime } from "event/1st/e-main/components/daily-time/daily-time.js"
import { initScrollW3M3 } from "event/1st/e-main/components/event-w3m3/deco-event-w3m3.js"

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
