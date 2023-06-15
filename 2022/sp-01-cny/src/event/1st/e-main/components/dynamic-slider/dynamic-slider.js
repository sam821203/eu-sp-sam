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

  dataDynamicSlider.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync( el, {
      isSliderLazyLoad: false,
    } );

    swiperWrapper.appendChild(sliderChild);
  });
  dynamicSliderReady();
}



function dynamicSliderReady() {
  var dynamicSlider = new Swiper('#dynamicSliderBlock', {
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
    slidesPerView: 3,
    // spaceBetween: "1%",
    slidesPerGroup: 3,
    slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    speed: 600,
  })
  return dynamicSlider
}

// 滾動物件
function ScrollDynamicSlider() {
  // var scrollItem = document.getElementById( 'decorDynamicSlider' );
  var scrollTitle = document.getElementById( 'titleDynamicSlider');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollTitle, 0, .4 );
    var pos = 50 + scrollPercentage * -50;

    // scrollItem.style.transform = 'translateX(' + pos + '%)';
    scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    if (value < 0.2) {
      value = 0.2;
    }

    // scrollItem.style.transformOrigin = 'bottom';
    scrollTitle.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}