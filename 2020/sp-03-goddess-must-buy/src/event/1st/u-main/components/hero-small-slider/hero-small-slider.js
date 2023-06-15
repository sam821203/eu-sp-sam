import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'
import { isNeedSlider } from 'utils/js/detect.js'

export var initSliderSmall = detectApp(window.addEventListener('load', sliderSmallReady), sliderSmallReady);

function sliderSmallReady() {
  var sliderSmall = new Swiper('#sliderSmall', {
    autoplay: isIE9() ? 2500 : {
      delay: 2500,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    centeredSlides: true,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true,
    // },
    grabCursor: true,
    init: isNeedSlider('#sliderSmall'),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSmall .swiper-slide').length),
    loop: true,
    // navigation: {
    //   nextEl: '#sliderSmallNext',
    //   prevEl: '#sliderSmallPrev',
    // },
    // pagination: isIE9() ? '#sliderSmallPager' : {
    //   el: '#sliderSmallPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    // paginationClickable: true, // ie9 only
    slidesPerView: 1,
    // slidesOffsetBefore: -150,
    // offsetPxBefore: -150, // ie9 "slidesOffsetBefore"
    speed: 1000,
  });
}