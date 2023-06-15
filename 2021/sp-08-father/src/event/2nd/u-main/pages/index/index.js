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
import 'utils/bg-decoration-instance/parallax/parallax.js'
// import { initPromoSlider } from 'event/2nd/u-main/components/promo-event/promo-event.js'

/**
 * page js
 */
