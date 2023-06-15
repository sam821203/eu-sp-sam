document.body.classList.add('js-loading');

/**
 * import vendor js modules
 */
import WOW from 'wow.js/dist/wow.js'
new WOW().init();

// swiper 6.1.2 no IE, add polyfill
import 'swiper/swiper-bundle.css'
import 'vendors/js/swiper-ie-polyfill.js'

// import 'vendors/js/lazyload.js'

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'

/**
 * import components js modules
 */
import { initPromoSlider } from 'event/2nd/e-main/components/promo-event/promo-event.js'
import { initScrollDaily } from 'event/2nd/e-main/components/daily-change/decor-daily-change.js'
import { initDailyChange } from 'event/2nd/e-main/components/daily-change/daily-change.js'
import { initEventW3M3 } from 'event/2nd/e-main/components/event-w3m3/event-w3m3.js'
import { initDailySlider } from 'event/2nd/e-main/components/daily-slider/daily-slider.js'
import { initBnSlider } from 'event/2nd/e-main/components/bn-slider/bn-slider.js'
import { initGameW3m3 } from 'event/2nd/e-main/components/game-w3m3/game-w3m3.js'
import { initGameDate } from 'event/2nd/e-main/components/event-w1m1-2/event-w1m1-2.js'
import { initScrollDynamicSection } from 'event/2nd/e-main/components/dynamic-section/decor-dynamic-section.js'
import { initDynamicSection } from 'event/2nd/e-main/components/dynamic-section/dynamic-section.js'
import { initScrollDynamicSlider } from 'event/2nd/e-main/components/dynamic-slider/decor-dynamic-slider.js'
import { initSliderDynamic } from 'event/2nd/e-main/components/dynamic-slider/dynamic-slider.js'
import { initDynamicSection2 } from 'event/2nd/e-main/components/dynamic-section-2/dynamic-section-2.js'
import { initDynamicHalfSlider } from 'event/2nd/e-main/components/dynamic-slider-half/dynamic-slider-half.js'
import { initScrollBnSpecial } from 'event/2nd/e-main/components/bn-special/decor-bn-special.js'
import { initSpecialSlider } from 'event/2nd/e-main/components/bn-special/bn-special.js'
import { initScrollDailyTime } from 'event/2nd/e-main/components/daily-time/decor-daily-time.js'
import { initDailyTime } from 'event/2nd/e-main/components/daily-time/daily-time.js'
import { initTwoDaySlider } from 'event/2nd/e-main/components/daily-two-day/daily-two-day.js'

/**
 * page js
 */
