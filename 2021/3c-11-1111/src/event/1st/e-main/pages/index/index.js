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
// import { initHero } from 'event/1st/e-main/components/hero-section/hero-section.js';
// import { initParallax } from 'utils/bg-decoration-instance/parallax/parallax.js'
// import { initPromoSlider } from 'event/1st/e-main/components/promo-event/promo-event.js';
import { initSliderDynamic } from 'event/1st/e-main/components/dynamic-slider/dynamic-slider.js';
import { initGlassGame } from 'event/1st/e-main/components/glass-game/glass-game.js';
import { initSliderDynamic2 } from 'event/1st/e-main/components/dynamic-slider-2/dynamic-slider-2.js';
// import { initDailySlider } from 'event/1st/e-main/components/daily-slider/daily-slider.js';
// import { initDynamicSection } from 'event/1st/e-main/components/dynamic-section/dynamic-section.js';
// import { initGameW2M2 } from 'event/1st/e-main/components/game-w2m2/game-w2m2.js';
// import { initBnSlider } from 'event/1st/e-main/components/bn-slider/bn-slider.js';
// import { initSliderMidMore } from 'event/1st/e-main/components/mid-more-slider/mid-more-slider.js';
// import { initSpecialSlider } from 'event/1st/e-main/components/bn-special/bn-special.js';

/**
 * page js
 */

