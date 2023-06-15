import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderBnEvent = detectApp(window.addEventListener('load', sliderBnEventReady), sliderBnEventReady);

function sliderBnEventReady() {
  var sliderBnEvent = new Swiper('#sliderBnEvent', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderBnEvent', 2),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderBnEvent .swiper-slide').length),
    loop: true,
    // navigation: {
    //   nextEl: '#sliderBnEventNext',
    //   prevEl: '#sliderBnEventPrev',
    // },
    pagination: {
      el: '#sliderBnEventPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: '1.5%',
    speed: 600,
  })
}
