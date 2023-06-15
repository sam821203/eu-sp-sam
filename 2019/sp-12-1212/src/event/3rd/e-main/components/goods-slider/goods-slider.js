import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'

export var initSliderGoods = detectApp(window.addEventListener('load', sliderGoodsReady), sliderGoodsReady);

function sliderGoodsReady() {
  var sliderGoods = new Swiper('#sliderGoods', {
    autoplay: isIE9() ? 3000 : {
      delay: 3000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderGoods .swiper-slide').length),
    loop: true,
    // navigation: {
    //   nextEl: '#sliderGoodsNext',
    //   prevEl: '#sliderGoodsPrev',
    // },
    // pagination: isIE9() ? '#sliderGoodsPager' : {
    //   el: '#sliderGoodsPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    speed: 1000,
    preloadImages: false,
    lazy: {

        loadPrevNext:true,
    }
  })

    sliderGoods.lazy.load();
}