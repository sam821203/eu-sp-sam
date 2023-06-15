import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
export var sliderPromo = detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);

function sliderSpecialReady() {
  var sliderSpecial = new Swiper('#sliderPromo_1', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height      
    grabCursor: true,
    init: isNeedSlider('#sliderPromo_1'),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#sliderSpecialNext',
      prevEl: '#sliderSpecialPrev',
    },
    // pagination: isIE9() ? '#sliderSpecialPager' : {
    //     el: '#sliderSpecialPager',
    //     type: 'bullets',
    //     clickable: true,
    // },
      centeredSlides: true,
      slidesPerView: 3,
      // slidesPerGroup: 1,
      spaceBetween: '4%',
      speed: 600,
      watchSlidesProgress: true,

  })
}