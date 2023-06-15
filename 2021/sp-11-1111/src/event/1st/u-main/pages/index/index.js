document.body.classList.add('js-loading');

/**
 * import vendor js modules
 */
import WOW from 'wow.js/dist/wow.js'
new WOW().init();

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'

/**
 * import components js modules
 */
  // import { initDailySlider } from 'event/1st/e-main/components/daily-slider/daily-slider.js'
import { initHero } from 'event/1st/e-main/components/hero-section/hero-section.js';

/**
 * page js
 */
