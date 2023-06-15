// ==========================================================================
// import js modules
// ==========================================================================
import { globalPolyfill } from 'utils/js/polyfill'
import { initLazyload } from 'utils/js/generate'
import { initGobalUXItems } from 'utils/js/generate'
import { initParallax } from 'layout/background-decoration/background-decoration'
import { initSliderRank } from 'components/main-big-slider/main-big-slider'
import { initSliderHot } from 'components/two-medium-slider/two-medium-slider'
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