import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'
import { isWindowWidth } from 'utils/js/detect.js'

export var initSliderScrollX = ifInitSlider;

var ifInitSlider = isWindowWidth(1213) ? detectApp(window.addEventListener('load', sliderScrollXReady), sliderScrollXReady) : null;


function sliderScrollXReady() {
  var sliderScrollX = new Swiper('#sliderScrollX', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    grabCursor: true,
    loop: true,

    // navigation: {
    //     nextEl: '#sliderScrollXNext',
    //     prevEl: '#sliderScrollXPrev',
    // },
    // pagination: isIE9() ? '#sliderScrollXPager' : {
    //   el: '#sliderScrollXPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerGroup: 5,
    slidesPerView: 5,  
    speed: 600,
  
  })
}
