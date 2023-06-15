import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
// import {isNeedSlider} from 'utils/js/detect.js'

export var initBnSlider3 = buildBnSlider3();

function buildBnSlider3 () {
    detectApp( window.addEventListener( 'load', sliderBn3Ready ), sliderBn3Ready );
}

function sliderBn3Ready() {
  var sliderBn3= new Swiper('#sliderBn3', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderBn3 .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    pagination: {
      el: '#sliderBn3Pager',
      type: 'bullets',
      clickable: true,
    },
    spaceBetween: '2%',
    speed: 600,
  } )

  return sliderBn3;
}
