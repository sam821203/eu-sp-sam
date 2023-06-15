// import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'

export var initSliderGoods = detectApp(window.addEventListener('load', sliderGoodsReady), sliderGoodsReady);

function sliderGoodsReady() {
  var sliderGoods = new Swiper('#sliderGoods', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // effect:'fade',
    centeredSlides: true,
    fadeEffect: { crossFade: true },
    effect: "fade",
    // coverflowEffect: {
    //   rotate: 0,
    // },
    grabCursor: true,
    loop: true,
    // navigation: {
    //   nextEl: '#sliderGoodsNext',
    //   prevEl: '#sliderGoodsPrev',
    // },
    // pagination: {
    //   el: '#sliderGoodsPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 1,
    speed: 1000,
  })
}