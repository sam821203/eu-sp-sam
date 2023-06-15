import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'

export var sliderLoad = detectApp(window.addEventListener('load', sliderReady), sliderReady);

function sliderReady() {
  var heroSlider = new Swiper('#heroSlider', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#heroSlider .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#heroSliderNext',
      prevEl: '#heroSliderPrev',
    },
    slidesPerView: 1,
    speed: 600,
    pagination: isIE9() ? '#heroSliderPager' : {
      el: '#heroSliderPager',
      type: 'bullets',
      clickable: true,
    },
    paginationClickable: true, // ie9 only
  });
}