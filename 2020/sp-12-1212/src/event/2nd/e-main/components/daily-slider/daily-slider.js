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
  // TODO: 每日換品
  // 總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
  var dailySliderDateArray = createDateArray("2020/12/4 10:00", 12) // 共12天


  // setTimeout、setInterval的作用域在window
  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime(dailySliderDateArray, [nowItemChange, nextItemChange], 100);
}

// 每日換品
function nowItemChange(i){
  var nowItemsArray = Array.apply(null, document.querySelectorAll('#dailyItem .item__box'));
  var arrayLength = nowItemsArray.length;

  nowItemsArray.forEach(function(el){
    el.classList.remove('active');
  });

  if(nowItemsArray[i]) {
    nowItemsArray[i].classList.add('active');
  } else if (i >= arrayLength){
    // 超過就放最後一品即可
    nowItemsArray[arrayLength - 1].classList.add('active');
  }
}

function nextItemChange(i) {
  var nextItemsArray = Array.apply(null, document.querySelectorAll('#dailySlider .swiper-slide'));
  var arrayLength = nextItemsArray.length;
  var dailySlider = document.getElementById('dailySlider');
  var dailySliderPrev = document.getElementById('dailySliderPrev');
  var dailySliderNext = document.getElementById('dailySliderNext');
  
  nextItemsArray.forEach(function(el, index){
    // 第3天時(i為2)，第1與2天的不顯示(index為0與1不顯示)
    if(index < i) {
      el.style.display = 'none';
    }
  });

  // 當arrayLength是3時，array是[item1, item2, 已售完]，因此在>= arrayLength -2時(最後一個item也就是item2)要關掉箭頭，在>= arrayLength -1(最後一項，也就是已售完)時除了關掉左右箭頭，還要露出已售完
  // console.log(i, arrayLength);

  if(i >= (arrayLength - 2)) {
    // 關掉左右箭頭
    dailySliderPrev.style.display = 'none';
    dailySliderNext.style.display = 'none';
  }
  
  if(i >= arrayLength - 1) {
    // 顯示最後一品
    nextItemsArray[arrayLength - 1].style.display = 'block';
    nextItemsArray[arrayLength - 1].style.pointerEvents = 'none';


    // 不給點防止拖動slider造成破版
    dailySlider.style.pointerEvents = 'none';
  }

  var sliderDaily = sliderDailyReady();
}

function sliderDailyReady() {
  var sliderDaily = new Swiper('#dailySlider', {
    allowSlideNext: isNeedSlider('#dailySlider'),
    allowSlidePrev: isNeedSlider('#dailySlider'),
    // grabCursor: isNeedSlider('#dailySlider'),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySlider .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2,
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
    watchSlidesProgress : true,
    watchSlidesVisibility : true, 
  });
  return sliderDaily;
}