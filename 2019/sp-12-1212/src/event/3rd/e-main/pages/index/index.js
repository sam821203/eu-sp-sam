// ==========================================================================
// import normal layout js modules
// ==========================================================================
import {globalPolyfill} from 'utils/js/polyfill'
import {initGobalUXItems} from 'utils/js/generate'
import {initCanvasSnow} from 'utils/bg-decoration-instance/canvas-snow/canvas-snow.js'


// ==========================================================================
// import components js modules
// ==========================================================================
import {bgDecoration} from 'event/3rd/e-main/components/background-decoration/background-decoration'
import {initSliderSmall} from 'event/3rd/e-main/components/hero-small-slider/hero-small-slider.js'
import {initSliderGoods} from 'event/3rd/e-main/components/goods-slider/goods-slider.js'
//- import { initChangePromoAnchor } from 'event/3rd/e-main/components/promo-event/promo-event.js'
import {nitSliderSpecial} from 'event/3rd/e-main/components/bn-special/bn-special.js'
import {initBuildCountDown} from 'event/3rd/e-main/components/countdown-section/countdown-section.js'


//- ==========================================================================
//- page js
//- ==========================================================================
new WOW().init();
