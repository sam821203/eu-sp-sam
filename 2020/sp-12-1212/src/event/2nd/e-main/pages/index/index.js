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
// import { initSliderSmall } from 'event/2nd/e-main/components/hero-small-slider/hero-small-slider.js'
// import { initChangePromoAnchor } from 'event/2nd/e-main/components/promo-event/promo-event.js'
// import {initDailyPromo} from "event/2nd/e-main/components/promo-event/promo-event.js"
// import {initBuildByCustomTime} from "event/2nd/e-main/components/promo-event/promo-event.js"
import { initSliderDaily } from 'event/2nd/e-main/components/daily-slider/daily-slider.js'
import {initDailyChange} from 'event/2nd/e-main/components/daily-change/daily-change.js'
import {decorationBg} from 'event/2nd/e-main/components/bg-decoration/bg-decoration.js'
import {initSliderSpecial} from 'event/2nd/e-main/components/bn-special/bn-special.js'
import {initBuildTab} from 'event/2nd/e-main/components/tab-section/tab-section.js'
import {sliderPromo} from 'event/2nd/e-main/components/promo-slider/promo-slider.js'
import {initSliderDynamic} from 'event/2nd/e-main/components/dynamic-slider/dynamic-slider.js'
import {initSliderBank} from 'event/2nd/e-main/components/bn-bank/bn-bank.js'
import {initSliderMidBig} from 'event/2nd/e-main/components/mid-big-slider/mid-big-slider.js'
import {initBuildShowFall} from 'event/2nd/e-main/components/left-right-section/event-game-1.js'
// import {initRandomSelect} from 'event/2nd/e-main/components/random-select/random-select.js'
import {initRandomCard} from "event/2nd/e-main/components/random-select/random-card.js"
import {initBuildTabSlider} from 'event/2nd/e-main/components/tab-slider-section/tab-slider-section.js'
import {initSliderText} from 'event/2nd/e-main/components/text-slider/text-slider.js'
import {initSliderDynamic_3} from 'event/2nd/e-main/components/dynamic-slider-3/dynamic-slider-3.js'
import {initLeftRight} from "event/2nd/e-main/components/left-right-section/left-right-section.js"
//- import { initEventw4m2 } from 'event/2nd/e-main/components/event-w4m2/event-w4m2.js'
// ==========================================================================
// page js
// ==========================================================================

new WOW().init();