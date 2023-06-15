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
// import { initHero } from 'event/2nd/e-main/components/hero-section/hero-section.js';
import { initPromo } from 'event/2nd/e-main/components/promo-event/promo-event.js';
import { initDynamicSlider } from 'event/2nd/e-main/components/dynamic-slider/dynamic-slider.js';
import { initTabSection } from 'event/2nd/e-main/components/tab-section/tab-section.js';
import { initTabSectionSecond } from 'event/2nd/e-main/components/tab-section-2/tab-section-2.js';
import { initBnSection } from 'event/2nd/e-main/components/bn-section/bn-section.js';
import { initBnSlider } from 'event/2nd/e-main/components/bn-slider/bn-slider.js';


/**
 * page js
 */
function scrollAddFixed () {
  if ( window.scrollY >= 700 ) {
    document.body.classList.add( 'bg-fixed' );
  } else {
    document.body.classList.remove( 'bg-fixed' );
  }
}

document.addEventListener( 'scroll', scrollAddFixed );
