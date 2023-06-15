// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { isMonth } from 'utils/js/detect.js'

export var initSliderSpecial = checkDateSpecial();

function checkDateSpecial() {
  var bnSpecialPromoWrap = document.getElementById('bnSpecialPromoWrap');
  var itemPrevArray = Array.apply(null, document.querySelectorAll('#bnSpecial .month--prev'));
  var itemNextArray = Array.apply(null, document.querySelectorAll('#bnSpecial .month--next'));

  if(isMonth(11)){
    bnSpecialPromoWrap.style.backgroundImage = 'url("bg-special-n.png")';

    itemPrevArray.forEach(function(el){
      el.parentNode.removeChild(el);
    });
  } else if (isMonth(10)) {
    bnSpecialPromoWrap.style.backgroundImage = 'url("bg-special-p.png")';

    itemNextArray.forEach(function(el){
      el.parentNode.removeChild(el);
    });
  } else {
    console.error("銀行月份不再兩者範圍內");
  }

  detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);
}

function sliderSpecialReady() {
  var sliderSpecial = new Swiper('#sliderSpecial', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderSpecial', 2),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    navigation: {
      nextEl: '#sliderSpecialNext',
      prevEl: '#sliderSpecialPrev',
    },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 2,
    slidesPerGroup: 2,
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true, 
  })
}