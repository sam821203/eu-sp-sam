import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'

export var initSliderGoodsFlip = detectApp(window.addEventListener('load', sliderGoodsFlipReady), sliderGoodsFlipReady);

function sliderGoodsFlipReady() {
  var sliderGoodsFlip = new Swiper('#sliderGoodsFlip', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
    grabCursor: true,
    loop: true,
    // navigation: {
    //   nextEl: '#sliderGoodsFlipNext',
    //   prevEl: '#sliderGoodsFlipPrev',
    // },
    // pagination: isIE9() ? '#sliderGoodsFlipPager' : {
    //   el: '#sliderGoodsFlipPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    speed: 600,
  })
}