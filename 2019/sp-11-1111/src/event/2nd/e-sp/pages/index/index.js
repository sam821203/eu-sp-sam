// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { globalPolyfill } from 'utils/js/polyfill'
// import { initLazyload } from 'vendors/js/lazyload'
import { initGobalUXItems } from 'utils/js/generate'

// ==========================================================================
// import components js modules
// ==========================================================================
// import { initChangePromoAnchor } from 'event/2nd/e-sp/components/promo-event/promo-event.js'
import { initSliderScrollX } from 'event/2nd/e-sp/components/scroll-x-section/scroll-x-section.js'
import { initBuildTab } from 'event/2nd/e-sp/components/tab-section/tab-section.js'

// ==========================================================================
// page js
// ==========================================================================

// var lazyImg = document.getElementsByClassName('lazyload');
// new LazyLoad(lazyImg);
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
// window._mfq = window._mfq || [];
// (function () {
//   var mf = document.createElement("script");
//   mf.type = "text/javascript"; mf.async = true;
//   mf.src = "//cdn.mouseflow.com/projects/be27966d-4e5c-41ef-a80c-0c0682057c0a.js";
//   document.getElementsByTagName("head")[0].appendChild(mf);
// })();



// function getIos13Allow(){
  
//   // feature detect
//   var hasOrientationEvent = (typeof DeviceMotionEvent.requestPermission === 'function' || typeof DeviceOrientationEvent.requestPermission === 'function');

//   if (hasOrientationEvent) {
//     // handle iOS 13+ devices
//     DeviceMotionEvent.requestPermission()
//       .then(function(permissionState) {
//         if (permissionState === 'granted') {
//           orientationPlay();
//         }
//       })
//       .catch(console.error);
//   } else {
//     // handle regular non iOS 13+ devices
//     orientationPlay();
//   }
// }

// function orientationPlay(){
//   window.addEventListener('deviceorientation', function (event) {
//     var a = document.getElementById('alpha'),
//       b = document.getElementById('beta'),
//       g = document.getElementById('gamma'),
//       alpha = event.alpha,
//       beta = event.beta,
//       gamma = event.gamma;

//     a.innerHTML = Math.round(alpha);
//     b.innerHTML = Math.round(beta);
//     g.innerHTML = Math.round(gamma);

//   }, false);
// }

// var btnAllow = document.getElementById('btn');
// btnAllow.addEventListener('click', getIos13Allow);
// $('#btn').trigger('click');
