// ==========================================================================
// import js modules
// ==========================================================================
import { globalPolyfill } from 'utils/js/polyfill'
// import { initLazyload } from 'vendors/js/lazyload'
import { initGobalUXItems } from 'utils/js/generate'
// import { initParallax } from 'layout/background-decoration/parallax'
// import { initParallax } from 'layout/background-decoration/jq-firefly'
import { initSliderSmall } from 'components/hero-small-slider/hero-small-slider.js'
import { initSliderGoods } from 'components/goods-slider/goods-slider.js'
import { initSliderGoodsFlip } from 'components/goods-slider-flip/goods-slider-flip.js'
import { nitSliderSpecial } from 'components/bn-special/bn-special.js'
import { initSliderHot } from 'components/two-medium-slider/two-medium-slider.js'
import { initSliderBank } from 'components/bank-section/bank-section.js'
import { initSliderEvent } from 'components/bn-event/bn-event.js'

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

// mouseflow
window._mfq = window._mfq || [];
(function () {
  var mf = document.createElement("script");
  mf.type = "text/javascript"; mf.async = true;
  mf.src = "//cdn.mouseflow.com/projects/be27966d-4e5c-41ef-a80c-0c0682057c0a.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();