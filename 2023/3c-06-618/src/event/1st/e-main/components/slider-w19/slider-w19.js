// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'
import { siblingRandom } from 'utils/js/build-random.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'
// import { getScrollPercentage } from 'utils/js/scroll.js'

export var initSliderDynamic = [
  sliderDynamicReady1(),
];

// swiper
function sliderDynamicReady1() {
  var arrayDate = [0, 0, 1, 1, 1, 2, 3, 3, 3, 4, 4, 4];
  var startTime = dailyObject.oneDay[0];
  var nowTime = new Date();
  var dayDiff = parseInt(Math.abs(startTime - nowTime) / 1000 / 60 / 60 / 24);
  // var dateIndex = new Date().getDate() - 1 ;
  var slideIndex = arrayDate[dayDiff] ? arrayDate[dayDiff] : 0;
  var dynamicSlide = new Swiper('#dynamicSlide', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    // grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    // effect: 'coverflow',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    initialSlide: slideIndex,
    // initialSlide: 7,
		slidesPerView: 1,
    // slidesPerGroup: 3,
    speed: 1000,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return dynamicSlide;
}

// swiper effect
// var slider = new Swiper( '#dynamicSlide', {
//   // autoplay: {
//   //   delay: 2000,
//   //   disableOnInteraction: false,
//   // },
//   centeredSlides: true,
//   effect : 'coverflow',
//   coverflowEffect: {
//     rotate: 30,
//     stretch: '10%',
//     depth: 120,
//     modifier: 2,
//     slideShadows : true
//   },
//   // loop: true,
//   slidesPerView: 1,
//   speed: 600
// });