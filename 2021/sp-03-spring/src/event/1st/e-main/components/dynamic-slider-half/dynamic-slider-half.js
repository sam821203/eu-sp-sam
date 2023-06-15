// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'

export var initSliderDynamicHalf = buildSliderHalfContent();

function buildSliderHalfContent(){
  var sliderHalfContainer = document.querySelector('#sliderDynamicHalf .swiper-wrapper');
  dataDynamicHalf.forEach(function(el){
    // swiper 5.4.5大網不輪lazyload會出不來，6.1.2可以，所以5.4.5要關掉lazyload
    // var sliderHalfChild = buildDynamicSliderLiElement(el, true);
    var sliderHalfChild = buildDynamicSliderLiElement(el);

    sliderHalfContainer.appendChild(sliderHalfChild);
  });
  detectApp(window.addEventListener('load', sliderDynamicHalfReady), sliderDynamicHalfReady);
}



function sliderDynamicHalfReady() {
  var sliderDynamicHalf = new Swiper('#sliderDynamicHalf', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   960: {
    //       slidesPerView: 2.2,
    //   },
    // },
    grabCursor: true,
    // init: (window.innerWidth <= 960),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamicHalf .swiper-slide').length),

    // swiper 5.4.5大網不輪lazyload會出不來，6.1.2可以，所以5.4.5要關掉lazyload
    // lazy: {
    //   loadPrevNext: true,
    // },

    loop: true,
    navigation: {
      nextEl: '#sliderDynamicHalfNext',
      prevEl: '#sliderDynamicHalfPrev',
    },
    pagination: {
      el: '#sliderDynamicHalfPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 2.5,
    // slidesPerGroup: 1,
    spaceBetween: '1.5%',
    speed: 600,
    watchOverflow: true,
    watchSlidesProgress : true,
    watchSlidesVisibility : true, 
  })
}
