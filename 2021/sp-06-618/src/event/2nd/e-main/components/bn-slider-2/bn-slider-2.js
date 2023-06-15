import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
// import {isNeedSlider} from 'utils/js/detect.js'

export var initBnSlider2 = buildBnSlider2();

function buildBnSlider2 () {
    detectApp( window.addEventListener( 'load', sliderBn2Ready ), sliderBn2Ready );
}

function sliderBn2Ready() {
  var sliderBn2= new Swiper('#sliderBn2', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderBn2 .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    pagination: {
      el: '#sliderBn2Pager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: '3%',
    speed: 600,
  } )

  return sliderBn2;
}
