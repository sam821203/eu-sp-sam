// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
// import { globalPolyfill } from 'utils/js/polyfill'
// import { initLazyload } from 'vendors/js/lazyload'
import { initGobalUXItems } from 'utils/js/generate'
// import { makeParallaxDefault } from 'utils/js/parallax-scroll'
// import { makeParallaxBgDefault } from 'utils/js/parallax-scroll'

// ==========================================================================
// import components js modules
// ==========================================================================
import { initSliderSmall } from 'event/2nd/u-main/components/hero-small-slider/hero-small-slider.js'

// ==========================================================================
// page js
// ==========================================================================
// var parallaxBg = document.getElementById('parallaxBg');
// var heroBlock = document.getElementById('heroBlock');

// function loadParallax() {
//   window.addEventListener('load', function () {
//     makeParallaxBgDefault(parallaxBg, 0.2);
//     makeParallaxDefault(ufoRight, 0.25);
//     makeParallaxDefault(ufoRight_2, 0.25);
//   });
// }
// loadParallax();
new WOW().init();

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


// 下滑顯示city
// $.debounce = function (func, wait, immediate) {
//     var timeout;
//     return function () {
//         var context = this, args = arguments;
//         var later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };
// $.throttle = function (func, wait) {
//     var context, args, timeout, throttling, more, result;
//     var whenDone = $.debounce(function () {
//         more = throttling = false;
//     }, wait);
//     return function () {
//         context = this, args = arguments;
//         var later = function () {
//             timeout = null;
//             if (more) func.apply(context, args);
//             whenDone();
//         };
//         if (!timeout) timeout = setTimeout(later, wait);
//
//         if (throttling) {
//             more = true;
//         } else {
//             result = func.apply(context, args);
//         }
//         ;
//         whenDone();
//         throttling = true;
//         return result;
//     };
// };
// var bind__handler = $.throttle(function (e) {
//     // window.addEventListener('load',bindNav);
//     addBgCity();
// }, 200);
// window.addEventListener('scroll', bind__handler);
// function addBgCity() {
//     var _document = $(document);
//     var goodsOffsetTop = $(".js-add__bg").offset().top - 200;
//     if (_document.scrollTop() >= goodsOffsetTop) {
//         $('#spWrap').addClass('bg__city');
//     }
//     else {
//         $('#spWrap').removeClass('bg__city');
//
//     }
// }