import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'

export var initSliderDynamic2 = buildSliderContent2();

function buildSliderContent2(){
  var sliderContainer = document.querySelector('#sliderDynamic2 .swiper-wrapper');
  dataDynamic2.forEach(function(el){
    var sliderChild = buildDynamicSliderLiElement(el);

    sliderContainer.appendChild(sliderChild);
  });
  detectApp(window.addEventListener('load', sliderDynamic2Ready), sliderDynamic2Ready);
}



function sliderDynamic2Ready() {
  var sliderDynamic = new Swiper('#sliderDynamic2', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderDynamic2', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic2 .swiper-slide').length),
    loop: true,
    // navigation: {
    //   nextEl: '#sliderDynamicNext',
    //   prevEl: '#sliderDynamicPrev',
    // },
    pagination: {
      el: '#sliderDynamic2Pager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: '1.5%',
    speed: 600,
  })
}
