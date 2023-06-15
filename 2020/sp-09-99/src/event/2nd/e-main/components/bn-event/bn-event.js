// swiper 6.1.2 no IE
import Swiper from 'swiper/bundle';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderBnEvent = detectApp(window.addEventListener('load', sliderBnEventReady), sliderBnEventReady);

function sliderBnEventReady() {
  var sliderBnEvent = new Swiper('#sliderBnEvent', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderBnEvent', 2),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderBnEvent .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    // navigation: {
    //   nextEl: '#sliderBnEventNext',
    //   prevEl: '#sliderBnEventPrev',
    // },
    pagination: {
      el: '#sliderBnEventPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: '1.5%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true, 
  })
}
