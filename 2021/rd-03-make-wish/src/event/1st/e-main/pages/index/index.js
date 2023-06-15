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
// import "event/2nd/e-main/components/hero-section/hero-section.js"
import { initDailyChange } from "event/2nd/e-main/components/daily-change/daily-change.js"
import { initPromoSlider } from 'event/2nd/e-main/components/promo-event/promo-event.js'
import { initScrollPromo } from 'event/2nd/e-main/components/promo-event/deco-promo.js'
import { initSliderDaily } from "event/2nd/e-main/components/daily-tab/daily-tab.js"
import { initScrollDailyTab } from 'event/2nd/e-main/components/daily-tab/deco-daily-tab.js'
import { initSliderTwoItem } from "event/2nd/e-main/components/two-item-slider/two-item-slider.js"
import { initScrollTwoItem } from "event/2nd/e-main/components/two-item-slider/deco-two-item.js"
import { initScrollLeftRight } from "event/2nd/e-main/components/left-right-section/deco-left-right.js"
import { initLeftRight } from "event/2nd/e-main/components/left-right-section/left-right-section.js"
import { initSliderMidBig } from "event/2nd/e-main/components/mid-big-slider/mid-big-slider.js"
import { initScrollMidBig } from "event/2nd/e-main/components/mid-big-slider/deco-mid-big.js"
import { initSliderGroup } from "event/2nd/e-main/components/group-slider/group-slider.js"
import { initSliderEffect } from "event/2nd/e-main/components/effect-slider/effect-slider.js"
import { initSliderDynamicHalf } from "event/2nd/e-main/components/dynamic-slider-half/dynamic-slider-half.js"
import { initDoubleSlider } from "event/2nd/e-main/components/slider-section-double/slider-section-double.js"
import { initScrollDoubleSlider } from "event/2nd/e-main/components/slider-section-double/deco-section-double.js"
import { initSliderSpecial } from "event/2nd/e-main/components/bn-special/bn-special.js"

// ==========================================================================
// page js
// ==========================================================================
import { getScrollTop } from 'utils/js/detect.js'
import { isWindowWidth } from 'utils/js/detect.js'

var scrollHeight = isWindowWidth( 600 ) ? 750 : 450;
var heroCloud = document.getElementById( 'decoCloud' );

window.addEventListener( 'scroll', function () {
  if ( getScrollTop() >= scrollHeight ) {
    if ( isWindowWidth( 960 ) ) {
      document.body.style.backgroundPositionY = 50 + '%';
    }
    heroCloud.classList.add( 'move' );
  } else {
    if ( isWindowWidth( 960 ) ) {
      document.body.style.backgroundPositionY = 0;
    }
    heroCloud.classList.remove( 'move' );
  }
});


new WOW().init()
