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
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 15,
      depth: 100,
      modifier: 2.63,
      // slideShadows: false,
    },
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
    slidesPerView: 3,
    slideVisibleClass: 'swiper-slide-visible',
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    speed: 600,
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
    },
  })
}