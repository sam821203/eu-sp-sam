// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'

export var initSliderDynamic = buildSliderContent();

function buildSliderContent(){
  var sliderContainer = document.querySelector('#sliderDynamic .swiper-wrapper');
  dataDynamic.forEach(function(el){
    var sliderChild = buildDynamicSliderLiElement(el, true);

    sliderContainer.appendChild(sliderChild);
  });
  detectApp(window.addEventListener('load', sliderDynamicReady), sliderDynamicReady);
}



function sliderDynamicReady() {
  var sliderDynamic = new Swiper('#sliderDynamic', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderDynamic', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    navigation: {
      nextEl: '#sliderDynamicNext_1',
      prevEl: '#sliderDynamicPrev_1',
    },
    pagination: {
      el: '#sliderDynamicPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    // spaceBetween: '1.5%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true, 
  })
}
