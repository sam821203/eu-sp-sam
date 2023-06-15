// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initSliderDynamic3 = buildSliderContent3();

function buildSliderContent3(){
  var sliderContainer = document.querySelector('#sliderDynamic3 .swiper-wrapper');

  dataDynamic3.forEach(function(el){
    var sliderChild = buildDynamicAutoSync(el);

    sliderContainer.appendChild(sliderChild);
  });

  detectApp(window.addEventListener('load', sliderDynamic3Ready), sliderDynamic3Ready);
}



function sliderDynamic3Ready() {
  var sliderDynamic = new Swiper('#sliderDynamic3', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderDynamic3', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic3 .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    // loop: true,
    navigation: {
      nextEl: '#sliderDynamic3Next',
      prevEl: '#sliderDynamic3Prev',
    },
    // pagination: {
    //   el: '#sliderDynamic3Pager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: '1.5%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true, 
  })
}
