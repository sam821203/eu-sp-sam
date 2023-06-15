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

// function buildSliderContent2 () {
//   var sliderContainer = document.querySelector( '#sliderDynamic2 .swiper-wrapper' );

//   dataDynamicSlider.forEach( function ( el ) {
//     var sliderChild = buildDynamicAutoSync( el );

//     sliderContainer.appendChild(sliderChild);
//   });
//   detectApp(window.addEventListener('load', sliderDynamic2Ready), sliderDynamic2Ready);
// }

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
  var scrollItem = document.getElementById( 'decorBnSection' );
  // var scrollTitle = document.getElementById( 'titleBnSection');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 80 + scrollPercentage * -80;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
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