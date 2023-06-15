// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { buildByCustomTime } from 'utils/js/build-time.js'
import { siblingRandom } from 'utils/js/build-random.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'
// import { getScrollPercentage } from 'utils/js/scroll.js'

export var initSliderDynamic = [
  buildSliderTime(),
  sliderDynamic0Ready1(),
];

function buildSliderTime () {

}
// swiper
function sliderDynamic0Ready1() {
  var arrayDate = [0, 0, 0, 3, 3, 3, 4, 4, 4, 7, 8, 9, 10, 10, 11,];
  var dateIndex = new Date().getDate() - 1;
  // console.log(arrayDate[dateIndex]);
  var slideIndex = arrayDate[dateIndex] ? arrayDate[dateIndex] : 0;
  // console.log(333);
  var dynamicSlide = new Swiper('#dynamicSlide', {
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
    initialSlide: slideIndex,
    // initialSlide: 7,
		slidesPerView: 3,
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