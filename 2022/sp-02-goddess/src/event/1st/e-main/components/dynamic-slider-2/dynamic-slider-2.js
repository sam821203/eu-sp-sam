// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { getScrollPercentage } from 'utils/js/scroll.js'

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initDynamicSlider2 = [
  buildSliderContent2(),
  ScrollDynamicSlider2(),
];

function buildSliderContent2 () {
  var sliderContainer = document.querySelector( '#dynamicSlider2Section .swiper-wrapper' );

  dataDynamicSliderSecond.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync( el,{
      isSliderLazyLoad: false,
    } );

    sliderContainer.appendChild(sliderChild);
  });
  detectApp(window.addEventListener('load', sliderDynamicReady), sliderDynamicReady);
}



function sliderDynamicReady() {
  var sliderDynamic = new Swiper('#dynamicSlider2Section', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    // init: isNeedSlider('#dynamicSlider2Section', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dynamicSlider2Section .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    // loop: true,
    // navigation: {
    //   nextEl: '#sliderDynamic2Next',
    //   prevEl: '#sliderDynamic2Prev',
    // },
    // pagination: {
    //   el: '#sliderDynamic2Pager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3,
    // spaceBetween: "1%",
    slidesPerGroup: 3,
    slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    speed: 600,
  })
  return sliderDynamic;
}


// 滾動
function ScrollDynamicSlider2() {
  var scrollItem = document.getElementById( 'decorDynamicSliderSecond' );
  // var scrollTitle = document.getElementById( 'DynamicSliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}