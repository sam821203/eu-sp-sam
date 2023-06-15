import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'

export var initSliderRank = detectApp(window.addEventListener('load', sliderRankReady), sliderRankReady);

function sliderRankReady() {
  var sliderRank = new Swiper('#sliderRank', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderRank .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#sliderRankNext',
      prevEl: '#sliderRankPrev',
    },
    slidesPerView: 3,
    speed: 600,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
    },
  });
}