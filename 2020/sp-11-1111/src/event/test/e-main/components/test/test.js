// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initSliderDynamicTest = buildSliderContentTest();

function buildSliderContentTest(){
  var sliderContainer = document.querySelector('#sliderDynamicTest .swiper-wrapper');

  dataDynamic2.forEach(function(el){
    var sliderChild = buildDynamicAutoSync(el, {
      sliderClass: ['aaa', 'bbb'],
      isSliderLazyLoad: false,
    });

    sliderContainer.appendChild(sliderChild);
  });
  detectApp(window.addEventListener('load', sliderDynamicTestReady), sliderDynamicTestReady);
}



function sliderDynamicTestReady() {
  var sliderDynamic = new Swiper('#sliderDynamicTest', {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,
    init: isNeedSlider('#sliderDynamicTest', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamicTest .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    // loop: true,
    navigation: {
      nextEl: '#sliderDynamicTestNext',
      prevEl: '#sliderDynamicTestPrev',
    },
    // pagination: {
    //   el: '#sliderDynamicTestPager',
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
