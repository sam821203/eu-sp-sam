// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
// import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderTwoItem = detectApp(window.addEventListener('load', sliderTwoItemReady), sliderTwoItemReady);

function sliderTwoItemReady() {
  var sliderTwoItem = new Swiper('#sliderTwoItem', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderTwoItem .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    pagination: {
      el: '#sliderTwoItemPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: '3%',
    speed: 600,
  })
}
