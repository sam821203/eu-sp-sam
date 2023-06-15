import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { isMonth } from 'utils/js/detect.js'

export var initSliderSpecial = checkDateSliderSpecial();

function checkDateSliderSpecial() {
  var slidePrevArray = Array.apply(null, document.querySelectorAll('#sliderSpecial .swiper-slide.month--prev'));
  var slideNowArray = Array.apply(null, document.querySelectorAll('#sliderSpecial .swiper-slide.month--now'));

  slidePrevArray.forEach(function(el){
    if(isMonth(8)) el.parentNode.removeChild(el);
  });
  slideNowArray.forEach(function(el){
    if(isMonth(7)) el.parentNode.removeChild(el);
  });

  detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);
}

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