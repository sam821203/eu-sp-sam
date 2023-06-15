// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
// import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderGroup = detectApp(window.addEventListener('load', sliderGroupReady), sliderGroupReady);

function sliderGroupReady() {
  var sliderGroup = new Swiper('#sliderGroup', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 4,
      },
    },
    grabCursor: true,
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderGroup .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    // loop: true,
    pagination: {
      el: '#sliderGroupPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 2,
    // spaceBetween: '1%',
    speed: 600,
  })
}
