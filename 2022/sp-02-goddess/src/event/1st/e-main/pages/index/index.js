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
import { initParallax } from 'utils/bg-decoration-instance/parallax/parallax.js'
import { initPromo } from 'event/1st/e-main/components/promo-event/promo-event.js';
import { initPromoSlider } from 'event/1st/e-main/components/promo-slider/promo-slider.js';
import { initDailySlider } from 'event/1st/e-main/components/daily-slider/daily-slider.js';
import { initDynamicSlider } from 'event/1st/e-main/components/dynamic-slider/dynamic-slider.js';
import { initPromoSlider2 } from 'event/1st/e-main/components/promo-slider-2/promo-slider-2.js';
// import { initBnSection } from 'event/1st/e-main/components/bn-section/bn-section.js';
import { initTabSection } from 'event/1st/e-main/components/tab-section/tab-section.js';
import { initDynamicSlider2 } from 'event/1st/e-main/components/dynamic-slider-2/dynamic-slider-2.js';
import { initBnSlider } from 'event/1st/e-main/components/bn-slider/bn-slider.js';
import { initDynamicSlider3 } from 'event/1st/e-main/components/dynamic-slider-3/dynamic-slider-3.js';
import { initBnSection2 } from 'event/1st/e-main/components/bn-section-2/bn-section-2.js';
// import { initScratchGame } from 'event/1st/e-main/components/scratch-game/scratch-game.js'
// import { initTabSectionSecond } from 'event/1st/e-main/components/tab-section-2/tab-section-2.js';


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
