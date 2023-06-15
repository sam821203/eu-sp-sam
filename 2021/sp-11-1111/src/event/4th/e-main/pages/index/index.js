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
import { initParallax } from 'utils/bg-decoration-instance/parallax/parallax.js'
import { initPromoSlider } from 'event/4th/e-main/components/promo-event/promo-event.js';
import { initSliderDynamic } from 'event/4th/e-main/components/dynamic-slider/dynamic-slider.js';
import { initDynamicSection } from 'event/4th/e-main/components/dynamic-section/dynamic-section.js';
import { initCashBackSlider } from 'event/4th/e-main/components/cash-back-slider/cash-back-slider.js';
import { initSliderMidMore } from 'event/4th/e-main/components/mid-more-slider/mid-more-slider.js';
import { initRandomW3M3 } from 'event/4th/e-main/components/event-w3m3/event-w3m3.js';
import { initSpecialSlider } from 'event/4th/e-main/components/bn-special/bn-special.js';

/** page js **/

