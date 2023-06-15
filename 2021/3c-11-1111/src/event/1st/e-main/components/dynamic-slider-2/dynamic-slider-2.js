// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'
import { siblingRandom } from 'utils/js/build-random.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'
// import { getScrollPercentage } from 'utils/js/scroll.js'

export var initSliderDynamic2 = [
  // buildSliderTime(),
  sliderDynamic0Ready2(),
];

// function buildSliderTime () {

// }
// swiper
function sliderDynamic0Ready2() {
  var arrayDate = [0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];
  var dateIndex = new Date().getDate() - 1;
  var slideIndex = arrayDate[dateIndex] ? arrayDate[dateIndex] : 0;
  // truthy || falsy
  // if ( arrayDate[dateIndex] === true) {
  //   var slideIndex = arrayDate[dateIndex];
  // } else {
  //   var slideIndex = 0;
  // }
  // console.log(slideIndex);
  var dynamicSlide = new Swiper('#dynamicSlide2', {
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },
    centeredSlides: true,
    // grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    // effect: 'coverflow',
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    initialSlide: slideIndex,
		slidesPerView: 3,
    slidesPerGroup: 1,
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