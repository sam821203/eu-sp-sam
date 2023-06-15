import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'

export var initSliderBank = detectApp(window.addEventListener('load', sliderBankReady), sliderBankReady);

function sliderBankReady() {
  var sliderBank = new Swiper('#sliderBank', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    effect: 'flow',
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '#sliderBankNext',
      prevEl: '#sliderBankPrev',
    },
    pagination: isIE9() ? '#sliderBankPager' : {
      el: '#sliderBankPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    slideVisibleClass: 'swiper-slide-visible',
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    speed: 600,
    breakpoints: {
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  })
}