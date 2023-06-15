import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'

export var initSliderHot = detectApp(window.addEventListener('load', sliderHotReady), sliderHotReady);

function sliderHotReady() {
  var sliderHot = new Swiper('#sliderHot', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderHot .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#sliderHotNext',
      prevEl: '#sliderHotPrev',
    },
    pagination: isIE9() ? '#sliderHotPager' : {
      el: '#sliderHotPager',
      type: 'bullets',
      clickable: true,
    },
    paginationClickable: true, // ie9 only
    slidesPerView: 3,
    slidesOffsetBefore: -150,
    offsetPxBefore: -150, // ie9 "slidesOffsetBefore"
    speed: 600,
    breakpoints: {
      959: {
        slidesPerView: 2,
        slidesOffsetBefore: 0,
      },
    },
  });
}