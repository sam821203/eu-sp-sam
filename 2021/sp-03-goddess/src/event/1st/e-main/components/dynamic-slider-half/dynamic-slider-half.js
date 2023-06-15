// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

// import {detectApp} from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

export var initSliderDynamicHalf = buildSliderHalfContent();

function buildSliderHalfContent(){
  var sliderHalfContainer = document.querySelector('#sliderDynamicHalf .swiper-wrapper');
  dataDynamicHalf.forEach(function(el){
    var sliderHalfChild = buildDynamicAutoSync(el);

    sliderHalfContainer.appendChild(sliderHalfChild);
  } );

  // FIXME:detectApp推遲到window load後才載入輪播可能是自動變價失敗原因
  // detectApp( window.addEventListener( 'load', sliderDynamicHalfReady ), sliderDynamicHalfReady );
  sliderDynamicHalfReady();
}

function sliderDynamicHalfReady() {
  var sliderDynamicHalf = new Swiper('#sliderDynamicHalf', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      960: {
        slidesPerView: 3,
        spaceBetween: 10
      },
    },
    grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    // navigation: {
    //   nextEl: '#sliderDynamicNext',
    //   prevEl: '#sliderDynamicPrev',
    // },
    pagination: {
      el: '#sliderDynamicHalfPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: '3%',
    speed: 600,
  })
}
