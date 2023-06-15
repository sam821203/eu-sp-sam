// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { isMonth } from 'utils/js/detect.js'

export var initSliderSpecialHalf = checkDateSpecialHalf();

function checkDateSpecialHalf() {
  // var itemPrevArray = Array.apply(null, document.querySelectorAll('#specialHalf .month--prev'));
  // var itemNextArray = Array.apply(null, document.querySelectorAll('#specialHalf .month--next'));
  //
  // itemPrevArray.forEach(function(el){
  //   if(isMonth(11)) el.parentNode.removeChild(el);
  // });
  // itemNextArray.forEach(function(el){
  //   if(isMonth(10)) el.parentNode.removeChild(el);
  // });

  detectApp(window.addEventListener('load', sliderSpecialHalfReady), sliderSpecialHalfReady);
}

function sliderSpecialHalfReady() {
  var sliderSpecialHalf = new Swiper('#sliderSpecialHalf', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderSpecialHalf'),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecialHalf .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    navigation: {
      nextEl: '#sliderSpecialHalfNext',
      prevEl: '#sliderSpecialHalfPrev',
    },
    pagination: {
      el: '#sliderSpecialHalfPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 2,
    slidesPerGroup: 2,
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true, 
  })
}