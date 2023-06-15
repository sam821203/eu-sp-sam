// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { detectApp } from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'

export var initBnSlider = buildBnSlider();

function buildBnSlider () {
  // 採用沒到新月份就關掉的方式
  if ( !earlyDateHide( '2021/10/1 10:00:00', '#bnSlider' ) ) {
    detectApp( window.addEventListener( 'load', sliderBnReady ), sliderBnReady );
  }
}

function sliderBnReady() {
  var sliderBn = new Swiper('#sliderBn', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    // grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderBn .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    pagination: {
      el: '#sliderBnPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: '5%',
    speed: 600,
  } )

  return sliderBn;
}
