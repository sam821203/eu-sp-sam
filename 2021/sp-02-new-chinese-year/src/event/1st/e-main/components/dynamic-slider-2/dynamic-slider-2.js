// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initSliderDynamic2 = buildSliderContent2();

function buildSliderContent2(){
  var sliderContainer = document.querySelector('#sliderDynamic2 .swiper-wrapper');

  dataDynamic2.forEach(function(el){
    var sliderChild = buildDynamicAutoSync(el);

    sliderContainer.appendChild(sliderChild);
  });

  detectApp(window.addEventListener('load', sliderDynamic2Ready), sliderDynamic2Ready);
}



function sliderDynamic2Ready() {
  var sliderDynamic = new Swiper('#sliderDynamic2', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderDynamic2', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic2 .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    // loop: true,
    navigation: {
      nextEl: '#sliderDynamic2Next',
      prevEl: '#sliderDynamic2Prev',
    },
    // pagination: {
    //   el: '#sliderDynamic2Pager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: '1.5%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true, 
  })
}
