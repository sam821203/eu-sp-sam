import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderSpecial = detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);

function sliderSpecialReady() {
  var sliderSpecial = new Swiper('#sliderSpecial', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderSpecial'),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#sliderSpecialNext',
      prevEl: '#sliderSpecialPrev',
    },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    speed: 600,

  })
}