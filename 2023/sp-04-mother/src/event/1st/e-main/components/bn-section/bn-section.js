// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { getScrollPercentage } from 'utils/js/scroll.js'

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initBnSection = [
  // bnSectionReady(),
  scrollBnSection(),
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
function scrollBnSection() {
  var scrollTitle = document.getElementById( 'decorBnSectionTitle' );
  var scrollItem = document.getElementById( 'decorBnSectionLeft' );
  var scrollItem2 = document.getElementById( 'decorBnSectionRight' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 120 + scrollPercentage * -120;
    var value = scrollPercentage * 1;


    scrollTitle.style.transform = 'translateY(' + (pos * 2) + '%)';
    scrollItem.style.transform = 'translateY(' + (pos / 2.2) + '%) rotateX(' + pos + 'deg)';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem2.style.transformOrigin = 'bottom';

    if ( scrollPercentage ==1 ) {
      scrollTitle.classList.add( 'active' );
      scrollItem.classList.add( 'active' );
      // scrollItem2.classList.add( 'active' );
    } else {
      scrollTitle.classList.remove( 'active' );
      scrollItem.classList.remove( 'active' );
      // scrollItem2.classList.remove( 'active' );
    }
  });
}