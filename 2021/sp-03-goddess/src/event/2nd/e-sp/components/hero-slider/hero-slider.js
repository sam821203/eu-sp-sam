// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'

export var initSliderHero = detectApp(window.addEventListener('load', sliderHeroReady), sliderHeroReady);

function sliderHeroReady() {
  var sliderHero = new Swiper('#sliderHero', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderHero .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    slidesPerView: 1,
    speed: 600,
  })
}
