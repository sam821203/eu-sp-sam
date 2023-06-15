// ==========================================================================
// import js modules
// ==========================================================================
import { globalPolyfill } from 'utils/js/polyfill'
// import { initLazyload } from 'vendors/js/lazyload'
import { initGobalUXItems } from 'utils/js/generate'
import { initParallax } from 'layout/background-decoration/parallax'
import { initSliderSmall } from 'components/hero-small-slider/hero-small-slider'
import { initSliderGoodsFlip } from 'components/goods-slider-flip/goods-slider-flip'
import { nitSliderSpecial } from 'components/bn-special/bn-special'
import { initSliderBank } from 'components/bank-section/bank-section'
import { initSliderEvent } from 'components/bn-event/bn-event'
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