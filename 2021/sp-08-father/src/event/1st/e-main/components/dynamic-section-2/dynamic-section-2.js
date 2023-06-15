// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { isNeedSlider } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

export var initSliderDynamic = buildSliderContent();

function buildSliderContent(){
  var sliderContainer = document.querySelector( '#sliderDynamic .swiper-wrapper' );

  dataDynamicSection2.forEach(function(el){
    var sliderChild = buildDynamicAutoSync( el, {
      isSliderLazyLoad: false
    });

    sliderContainer.appendChild(sliderChild);
  });
  sliderDynamicReady();
}

function sliderDynamicReady() {
  var sliderDynamic = new Swiper('#sliderDynamic', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // grabCursor: true,
    // init: isNeedSlider('#sliderDynamic', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: 6,
    // },
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    // FIXME: 用了spaceBetween用'%'會壞掉，只能用數字！(套件問題)
    spaceBetween: 0,
    speed: 600,
  } )
  return sliderDynamic;
}
