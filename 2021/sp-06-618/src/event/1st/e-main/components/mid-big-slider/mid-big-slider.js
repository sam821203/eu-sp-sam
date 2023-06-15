// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import { isIE } from 'utils/js/detect.js'

export var initMidBigSlider = detectApp(window.addEventListener('load', sliderMidBigReady), sliderMidBigReady);

function sliderMidBigReady() {
  var sliderMidBig = new Swiper('#sliderMidBig', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderMidBig .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    // FIXME: IE會錯將最後一品dup掛active class造成最後一品一直放大，解法2種，1. 拿掉dup active class但dup輪到正式會少transition、2. JS中IE不loop，這邊走2.
    loop: !isIE(),
    // pagination: {
    //   el: '#sliderMidBigPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 1.8,
    spaceBetween: '0.5%',
    speed: 600,
  })
}
