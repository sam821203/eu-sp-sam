// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
// import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderEffect = detectApp(window.addEventListener('load', sliderEffectReady), sliderEffectReady);

function sliderEffectReady() {
  var sliderEffect = new Swiper('#sliderEffect', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      depth: 60,
      modifier: 2,
      slideShadows : true
    },
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderEffect .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    pagination: {
      el: '#sliderEffectPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 2.5,
    spaceBetween: '3%',
    speed: 600,
  })
}
