import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { isMonth } from 'utils/js/detect.js'

export var initSpecialSlider = checkDateSpecial();

function checkDateSpecial () {
  // TODO: 0701 00:00 上線
  var bnSpecialPromoWrap = document.getElementById('bnSpecial');
  // var itemPrevArray = Array.apply(null, document.querySelectorAll('#bnSpecial .month--prev'));
  // var itemNextArray = Array.apply(null, document.querySelectorAll('#bnSpecial .month--next'));

  if(isMonth(7)){
    bnSpecialPromoWrap.style.display = 'block';
    // bnSpecialPromoWrap.style.backgroundImage = 'url(bg-special-p.png)';

    // itemPrevArray.forEach(function(el){
    //   el.parentNode.removeChild(el);
    // });
  } else if (isMonth(6)) {

    bnSpecialPromoWrap.style.display = 'none';
    // bnSpecialPromoWrap.style.backgroundImage = 'url(bg-special-p.png)';
    //
    // itemNextArray.forEach(function(el){
    //   el.parentNode.removeChild(el);
    // });
  } else {
    console.error("銀行月份不在兩者範圍內");
  }

  detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);
}

function sliderSpecialReady() {
  var sliderSpecial = new Swiper('#sliderSpecial', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    grabCursor: true,
    init: isNeedSlider('#sliderSpecial', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 2,
    // slidesPerGroup: 3,
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return sliderSpecial;
}