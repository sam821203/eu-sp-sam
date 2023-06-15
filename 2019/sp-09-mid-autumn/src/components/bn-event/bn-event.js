import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'
import { isNeedSliderRWD } from 'utils/js/detect.js'

export var initSliderEvent = detectApp(window.addEventListener('load', sliderEventReady), sliderEventReady);

function sliderEventReady() {
  if (isNeedSliderRWD(768, '#sliderEvent', 2, 1)) {
    var sliderEvent = new Swiper('#sliderEvent', {
      autoplay: isIE9() ? 2000 : {
        delay: 2000,
        disableOnInteraction: false,
      },
      calculateHeight: true, // ie9 prevent float wrong height
      loop: true,
      navigation: {
        nextEl: '#sliderEventNext',
        prevEl: '#sliderEventPrev',
      },
      pagination: isIE9() ? '#sliderEventPager' : {
        el: '#sliderEventPager',
        type: 'bullets',
        clickable: true,
      },
      slidesPerView: 2,
      speed: 600,
      breakpoints: {
        767: {
          slidesPerView: 1,
        },
      },
    })
  } else {
    var navArrowNext = document.getElementById('sliderEventNext');
    var navArrowPrev = document.getElementById('sliderEventPrev');
    var pagerWrapper = document.getElementById('sliderEventPager');
    navArrowNext.style.display = 'none';
    navArrowPrev.style.display = 'none';
    pagerWrapper.style.display = 'none';
  }
}