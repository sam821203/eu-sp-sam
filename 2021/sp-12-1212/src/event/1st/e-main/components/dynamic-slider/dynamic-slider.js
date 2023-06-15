import Swiper from 'swiper/swiper-bundle.min.js';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
// import { buildByCustomTime } from 'utils/js/build-time.js'
// import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
// import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'


export var initDynamicSlider = [
  buildDynamicSliderContent(),
  ScrollDynamicSlider(),
];

function buildDynamicSliderContent () {
  var swiperWrapper = document.querySelector( '#dynamicSliderBlock .swiper-wrapper' );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSlider.forEach( function ( el ) {
    // var subData = thisArray[index];
    // console.log(subData);

    // 每組陣列包進外層li裡，每次輪播動一組
    var dynamicItemWrap = document.createElement('li');
    // 下方取值的時候先拿掉了swiper-slide，改加在外層
    dynamicItemWrap.classList.add('swiper-slide');

    // 第二層迴圈是要抓每個{}的值
    el.forEach( function ( item ){
      var sliderChild = buildDynamicAutoSync( item, {
        isSliderLazyLoad: false,
        // 拿掉底層預設的li和class，把product--dynamic改包在dynamic__item裡
        isSlider: false,
        outerTag: "div",
        outerClass: "dynamic__item",
      } );
      // 把dynamic__item加在dynamicItemWrap裡
      dynamicItemWrap.appendChild(sliderChild);
    });
    // console.log(dynamicItemWrap);
    // 完成的li加在swiper-wrapper裡
    swiperWrapper.appendChild(dynamicItemWrap);    

  });



  detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
}



function dailySliderReady() {
  var dailySlider = new Swiper('#dynamicSliderBlock', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // grabCursor: true,
    // init: isNeedSlider('#dailySliderBlock', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    loop: true,
    slidesPerView: 1,
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    speed: 600,
  })
  return dailySlider
}

// 滾動物件
function ScrollDynamicSlider() {
  var scrollItem = document.getElementById( 'decorDynamicSlider' );
  // var scrollTitle = document.getElementById( 'DailySliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 250 + scrollPercentage * -250;
    if (pos <= 43){
      pos = 43;
    }
    
    scrollItem.style.transform = 'translateX(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}