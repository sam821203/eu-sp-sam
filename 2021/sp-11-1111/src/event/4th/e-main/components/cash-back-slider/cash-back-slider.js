// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { getScrollPercentage } from 'utils/js/scroll.js'

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initCashBackSlider = [
  buildCashBackSlider(),
  ScrollDynamicSlider(),
];

function buildCashBackSlider () {
  var sliderContainer = document.querySelector( '#cashBackSlider .swiper-wrapper' );

  dataCashBackSlider.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync( el );

    sliderContainer.appendChild(sliderChild);
  });
  detectApp(window.addEventListener('load', cashBackSliderReady), cashBackSliderReady);
}



function cashBackSliderReady() {
  var sliderDynamic = new Swiper('#cashBackSlider', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#cashBackSlider', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic2 .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    navigation: {
      nextEl: '#sliderDynamic2Next',
      prevEl: '#sliderDynamic2Prev',
    },
    // pagination: {
    //   el: '#sliderDynamic2Pager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: '1.5%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  })
}


// 滾動
function ScrollDynamicSlider() {
  var scrollItem = document.getElementById( 'decorCashBackSlider' );
  var scrollTitle = document.getElementById( 'CashBackSliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}