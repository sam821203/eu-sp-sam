import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'

export var initSliderDynamic = buildSliderContent();

function buildSliderContent(){
  var sliderContainer = document.querySelector('#sliderDynamic .swiper-wrapper');
  dataDynamic.forEach(function(el){
    var sliderChild = buildDynamicSliderLiElement(el);

    sliderContainer.appendChild(sliderChild);
  });
  detectApp(window.addEventListener('load', sliderDynamicReady), sliderDynamicReady);
}



function sliderDynamicReady() {
  var sliderDynamic = new Swiper('#sliderDynamic', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderDynamic', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic .swiper-slide').length),
    loop: true,
    // navigation: {
    //   nextEl: '#sliderDynamicNext',
    //   prevEl: '#sliderDynamicPrev',
    // },
    pagination: {
      el: '#sliderDynamicPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: '1.5%',
    speed: 600,
  })
}
