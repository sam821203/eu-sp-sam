// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'

// export var initSliderDaily = detectApp(window.addEventListener('load', sliderDailyReady), sliderDailyReady);

import { createDateArray } from 'utils/js/build-time.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initSliderDaily = dailySliderChange();

function dailySliderChange() {
  // 9/11 - 9/25 每日換品
  // 總共只有8天，但結尾抓下一個index做計算，因此要給9天，最後一天的倒數才會正常
  var dailySliderDateArray = createDateArray("2020/10/15 19:20:00", 9) // 9/11 - 9/25共9天

  // setTimeout、setInterval的作用域在window
  buildByCustomTime(dailySliderDateArray, [nowItemChange, nextItemChange]);
}

// 每日換品
function nowItemChange(i){
  var nowItemsArray = Array.apply(null, document.querySelectorAll('#dailyItem .item__box'));
  nowItemsArray.forEach(function(el){
    el.classList.remove('active');
  });
  nowItemsArray[i].classList.add('active');
}

function nextItemChange(i) {
  var nextItemsArray = Array.apply(null, document.querySelectorAll('#dailySlider .swiper-slide'));
  var arrayLength = nextItemsArray.length;
  nextItemsArray.filter(function(el, index){
    if(index < i) {
      return el.parentNode.removeChild(el);
    }
  });
  if( arrayLength !== 1) {
    var el = nextItemsArray[arrayLength - 1];
    el.style.display = 'none';
  }
  var slider = sliderDailyReady();
  slider.update();
}

function sliderDailyReady() {
  var sliderDaily = new Swiper('#dailySlider', {
    allowSlideNext: isNeedSlider('#dailySlider'),
    allowSlidePrev: isNeedSlider('#dailySlider'),
    grabCursor: isNeedSlider('#dailySlider'),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySlider .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    // loop: isNeedSlider('#dailySlider'),
    navigation: {
      nextEl: '#dailySliderNext',
      prevEl: '#dailySliderPrev',
    },
    // pagination: {
    //   el: '#dailySliderPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    // slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: '1.5%',
    speed: 600,
    // watchSlidesProgress : true,
    // watchSlidesVisibility : true, 
  });
  return sliderDaily;
}