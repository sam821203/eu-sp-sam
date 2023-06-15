import Swiper from 'swiper/swiper-bundle.min.js';
import dailyObject from 'event/1st/e-main/pages/index/index-start-time.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
// import { buildByCustomTime } from 'utils/js/build-time.js'
// import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
// import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'


export var initDynamicSlider4 = [
  buildDynamicSlider4Content(),
  ScrollDynamicSlider(),
];

function buildDynamicSlider4Content () {
  var swiperWrapper = document.querySelector( '#dynamicSlider4Block .swiper-wrapper' );

  dataDynamicSliderForth.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync( el, {
      isSliderLazyLoad: false,
    } );

    swiperWrapper.appendChild(sliderChild);
  });
  dynamicSlider4Ready();
}



function dynamicSlider4Ready() {
  var dynamicSlider = new Swiper('#dynamicSlider4Block', {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,
    // init: isNeedSlider('#dailySliderBlock', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    // loop: true,
    slidesPerView: 3,
    // spaceBetween: "1%",
    // slidesPerGroup: 3,
    slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    speed: 600,
  })
  return dynamicSlider
}

// 滾動物件
function ScrollDynamicSlider() {
  var scrollItem = document.getElementById( 'decorDynamic4Left' );
  var scrollItem2 = document.getElementById( 'decorDynamic4Right');
  var scrollTitle = document.getElementById( 'dynamic4Title');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );
    var pos = 120 + scrollPercentage * -120;

    scrollItem.style.transform = 'translateY(-' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translateY(-' + pos + '%)';
    scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    // if (value < 0.2) {
    //   value = 0.2;
    // }

    // scrollItem2.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    // scrollItem2.style.opacity = value;
    scrollItem.style.opacity = value;
    scrollTitle.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
    }
  });
}