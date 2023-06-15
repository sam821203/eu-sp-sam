// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { getScrollPercentage } from 'utils/js/scroll.js'

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initBnSection3 = [
  // bnSectionReady(),
  scrollBnSection3(),
];

function bnSectionReady() {
  var bnSection = new Swiper('#bnSection', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      // reverseDirection: true,
    },
    // grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#bnSection .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    // pagination: {
    //   el: '#sliderBnPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 1,
    spaceBetween: '1%',
    speed: 600,
  } )

  return bnSection;
}

// 滾動
function scrollBnSection3() {
  var scrollItem = document.getElementById( 'decorBnSection3Left' );
  var scrollItem2 = document.getElementById( 'decorBnSection3Right' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translateY(' + pos + '%)';
    
    // if ( scrollPercentage ==1 ) {
    //   scrollItem.classList.add( 'active' );
    //   scrollItem2.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    //   scrollItem2.classList.remove( 'active' );
    // }
  });
}