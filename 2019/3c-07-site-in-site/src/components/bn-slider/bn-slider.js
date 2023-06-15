import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'
import { isNeedSlider } from 'utils/js/detect.js'

export var bnSliderLoad = detectApp(window.addEventListener('load', bnSliderReady), bnSliderReady);

function bnSliderReady() {
  if (isNeedSlider('#bnSlider', 2)) {
    var bnSlider = new Swiper('#bnSlider', {
      autoplay: isIE9() ? 2000 : {
        delay: 2000,
        disableOnInteraction: false,
      },
      calculateHeight: true, // ie9 prevent float wrong height
      grabCursor: true,
      initialSlide: Math.floor(Math.random() * document.querySelectorAll('#bnSlider .swiper-slide').length),
      loop: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: '1%',
      speed: 600,
      pagination: isIE9() ? '#bnSliderPager' : {
        el: '#bnSliderPager',
        type: 'bullets',
        clickable: true,
      },
      paginationClickable: true, // ie9 only
    });
  } else {
    var pagerWrapper = document.getElementById('#bnSliderPager');
    pagerWrapper.style.display = 'none';
  }
}