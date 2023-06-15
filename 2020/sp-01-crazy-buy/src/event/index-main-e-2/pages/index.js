// ==========================================================================
// import js modules
// ==========================================================================
import { globalPolyfill } from 'utils/js/polyfill'
// import { initLazyload } from 'vendors/js/lazyload'
import { initGobalUXItems } from 'utils/js/generate'
// import { initParallax } from 'layout/background-decoration/parallax'
// import { initParallax } from 'layout/background-decoration/jq-firefly'
import { initSliderSmall } from 'event/index-main-e-2/components/hero-small-slider/hero-small-slider'
// import { initSliderGoods } from 'event/index-main-e-2/components/goods-slider/goods-slider'
// import { initSliderGoodsFlip } from 'event/index-main-e-2/components/goods-slider-flip/goods-slider-flip'
import { initChangePromoAnchor } from 'event/index-main-e-2/components/promo-event/promo-event.js'
import { nitSliderSpecial } from 'event/index-main-e-2/components/bn-special/bn-special'
import { initSliderHot } from 'event/index-main-e-2/components/two-medium-slider/two-medium-slider'
// import { initSliderBank } from 'event/index-main-e-2/components/bank-section/bank-section'
import { initBuildCountDown } from 'event/index-main-e-2/components/countdown-section/countdown-section.js'

// import { initCanvasEffect } from 'event/index-main-e-2/components/canva-effect/canva-effect.js'
// import { initSliderEvent } from 'event/index-main-e-2/components/bn-event/bn-event'
// ==========================================================================
// page js
// ==========================================================================
// import spTimeLimit from 'utils/js/auto-change'
// function swiperClickBugFix(){
//   var sliderItems = document.querySelectorAll('.swiper-slide');
//   sliderItems.forEach(function(el){
//     var sliderLink = el.querySelector('a');
//     if (sliderLink.href) {
//       el.addEventListener('click', function(){
//         location.href = sliderLink.href;
//       });
//     }
//   });
// }
// swiperClickBugFix();
// spTimeLimit("2019/7/8");

import * as share from 'layout/share-tools/share-tools.js'
// mouseflow
// window._mfq = window._mfq || [];
// (function () {
//   var mf = document.createElement("script");
//   mf.type = "text/javascript"; mf.async = true;
//   mf.src = "//cdn.mouseflow.com/projects/be27966d-4e5c-41ef-a80c-0c0682057c0a.js";
//   document.getElementsByTagName("head")[0].appendChild(mf);
// })();