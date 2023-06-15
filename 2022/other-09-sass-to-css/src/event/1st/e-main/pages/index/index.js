document.body.classList.add('js-loading');

/**
 * import vendor js modules
 */
import WOW from 'wow.js/dist/wow.js';
new WOW().init();

// swiper 6.1.2 no IE, add polyfill
import 'swiper/swiper-bundle.css';
import 'vendors/js/swiper-ie-polyfill.js';

// import 'vendors/js/lazyload.js'

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from 'utils/js/ie9-alert';
import { notSupportAndroid5 } from 'utils/js/android5-alert';
import { initGlobalUXItems } from 'utils/js/generate';

/**
 * import components js modules
 */
import { initHero } from 'event/1st/e-main/components/hero-section/hero-section.js';
// import { initParallax } from 'utils/bg-decoration-instance/parallax/parallax.js'
// import { initPromoSection } from 'event/1st/e-main/components/promo-section/promo-section.js';
import { initPromo } from 'event/1st/e-main/components/promo-event/promo-event.js';
import { initDailySlider } from 'event/1st/e-main/components/daily-slider/daily-slider.js';
import { initDynamicSlider } from 'event/1st/e-main/components/dynamic-slider/dynamic-slider.js';
import { initTabSection } from 'event/1st/e-main/components/tab-section/tab-section.js';
import { initRandomW3M3 } from 'event/1st/e-main/components/event-w3m3/event-w3m3.js';
import { initDynamicHalfSlider } from 'event/1st/e-main/components/dynamic-slider-half/dynamic-slider-half.js';
// import { initPromoSlider } from 'event/1st/e-main/components/promo-slider/promo-slider.js';
import { initBnSection } from 'event/1st/e-main/components/bn-section/bn-section.js';
import { initBnSlider } from 'event/1st/e-main/components/bn-slider/bn-slider.js';
import { initBnSection2 } from 'event/1st/e-main/components/bn-section-2/bn-section-2.js';
import { initDailyTime } from 'event/1st/e-main/components/daily-time/daily-time.js'
import { initSpecialSlider } from 'event/1st/e-main/components/bn-special/bn-special.js';
// import { initPromoSlider2 } from 'event/1st/e-main/components/promo-slider-2/promo-slider-2.js';


/**
 * page js
 */
function scrollAddFixed () {
  if ( window.scrollY >= 900 ) {
    document.body.classList.add( 'bg-fixed' );
  } else {
    document.body.classList.remove( 'bg-fixed' );
  }
}
document.addEventListener( 'scroll', scrollAddFixed );

function scrollTopAddFixed() {
  var bgTop = document.querySelector(".bg-web--top");
  if (window.scrollY >= 250) {
    bgTop.classList.add("bg-fixed");
  } else {
    bgTop.classList.remove("bg-fixed");
  }
}
document.addEventListener("scroll", scrollTopAddFixed);

function scrollBottomPopup() {
  var bgBottom = document.querySelector(".bg-web--bottom");
  if (window.scrollY >= 250) {
    bgBottom.classList.add("active");
  } else {
    bgBottom.classList.remove("active");
  }
}
document.addEventListener("scroll", scrollBottomPopup);

function scrollShineAddFixed() {
  var bgShine = document.querySelector(".bg-web--shine");
  if (window.scrollY >= 300) {
    bgShine.classList.add("active");
  } else {
    bgShine.classList.remove("active");
  }
}
document.addEventListener("scroll", scrollShineAddFixed);