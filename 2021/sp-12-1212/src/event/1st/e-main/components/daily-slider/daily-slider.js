import Swiper from 'swiper/swiper-bundle.min.js';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
// import { buildByCustomTime } from 'utils/js/build-time.js'
// import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
// import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'


export var initDailySlider = [
  buildDailySliderContent(),
  ScrollDailySlider(),
];

function buildDailySliderContent () {
  var sliderContainer = document.querySelector( '#dailySliderBlock .swiper-wrapper' );

  dataDailySlider.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync( el, {
      isSliderLazyLoad: false,
    } );

    sliderContainer.appendChild(sliderChild);
  });
  detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
}

function dailySliderReady() {
  var dailySlider = new Swiper('#dailySliderBlock', {
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
    // loop: true,
    breakpoints:{
      960:{
        slidesPerView: 3,
        slidesPerColumn: 4,
      },
    },
    slidesPerView: 2,
    // slidesPerGroup: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill : 'row',
    speed: 600,
  })
  return dailySlider
}

// 滾動物件
function ScrollDailySlider() {
  var scrollItem = document.getElementById( 'decorDailySlider' );
  // var scrollTitle = document.getElementById( 'DailySliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}