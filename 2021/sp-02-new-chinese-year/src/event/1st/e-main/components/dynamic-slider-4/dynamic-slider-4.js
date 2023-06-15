// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initSliderDynamic4 = buildSliderContent4();

function buildSliderContent4(){
  var sliderContainer = document.querySelector('#sliderDynamic4 .swiper-wrapper');

  dataDynamic4.forEach(function(el){
    var sliderChild = buildDynamicAutoSync(el);

    sliderContainer.appendChild(sliderChild);
  });

  detectApp(window.addEventListener('load', sliderDynamic4Ready), sliderDynamic4Ready);
}



function sliderDynamic4Ready() {
  var sliderDynamic = new Swiper('#sliderDynamic4', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderDynamic4', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic4 .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    // loop: true,
    navigation: {
      nextEl: '#sliderDynamic4Next',
      prevEl: '#sliderDynamic4Prev',
    },
    // pagination: {
    //   el: '#sliderDynamic4Pager',
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
