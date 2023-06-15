import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

export var initDynamicHalfSlider2 = buildSliderHalfContent();

function buildSliderHalfContent(){
  var sliderHalfContainer = document.querySelector( '#sliderDynamicHalf2 .swiper-wrapper' );

  dataDynamicHalf2.forEach(function(el){
    var sliderHalfChild = buildDynamicAutoSync(el);

    sliderHalfContainer.appendChild(sliderHalfChild);
  } );

  // FIXME:detectApp推遲到window load後才載入輪播可能是自動變價失敗原因
  // detectApp( window.addEventListener( 'load', sliderDynamicHalfReady ), sliderDynamicHalfReady );
  sliderDynamicHalf2Ready();
}

function sliderDynamicHalf2Ready() {
  var sliderDynamicHalf2 = new Swiper('#sliderDynamicHalf2', {
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
    // pagination: {
    //   el: '#sliderDynamicHalfPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 2,
    spaceBetween: '3%',
    speed: 600,
  })
}
