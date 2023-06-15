// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { getScrollPercentage } from 'utils/js/scroll.js'

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initBnSection2 = [
  // bnSection2Ready(),
  scrollBnSection2(),
];

function bnSection2Ready() {
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
function scrollBnSection2() {
  var scrollItem = document.getElementById( 'decorBnSection2Left' );
  var scrollItemR = document.getElementById( 'decorBnSection2Right' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 200 + scrollPercentage * -200;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateX(-' + pos + '%) scale(' + value + ')';
    scrollItemR.style.transform = 'translateX(' + pos + '%) scale(' + value + ')';

    // scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    // scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    
    if ( scrollPercentage ==1 ) {
      scrollItem.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
    }
  });
}