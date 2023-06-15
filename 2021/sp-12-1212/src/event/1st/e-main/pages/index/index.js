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
import { initPromo } from 'event/1st/e-main/components/promo-event/promo-event.js';
import { initDailySlider } from 'event/1st/e-main/components/daily-slider/daily-slider.js';
import { initDynamicSlider } from 'event/1st/e-main/components/dynamic-slider/dynamic-slider.js';
import 'utils/bg-decoration-instance/threejs-gift/dynamic-gift.js'
import { initTabSection } from 'event/1st/e-main/components/tab-section/tab-section.js';
import { initMatch } from 'event/1st/e-main/components/match-game/match-game.js'
import { initBnSection } from 'event/1st/e-main/components/bn-section/bn-section.js';
import { initBnSlider } from 'event/1st/e-main/components/bn-slider/bn-slider.js';
import { initBnSection2 } from 'event/1st/e-main/components/bn-section-2/bn-section-2.js';
import { initRandomW3M3 } from 'event/1st/e-main/components/event-w3m3/event-w3m3.js';
import { initSpecialSlider } from 'event/1st/e-main/components/bn-special/bn-special.js';

/**
 * page js
 */

