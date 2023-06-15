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
  var scrollItem = document.getElementById( 'decorBnSectionBg' );
  var scrollItem2 = document.getElementById( 'decorBnSectionLeft' );
  var scrollTitle = document.getElementById( 'titleBnSection');
  // var promoItems = Array.apply( null, document.querySelectorAll( '.promo__group--bn-section-2 .decor__item' ) );
  // console.log(promoItems);

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 50 + scrollPercentage * -50;
    var pos2 = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translateX(-' + pos + '%) scale(' + value + ')';
    scrollTitle.style.transform = 'translateY(' + pos2 + '%)';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollTitle.style.transform = 'translateY(' + pos2 + '%) scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    scrollTitle.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // console.log(scrollPercentage);
    if ( scrollPercentage ==1 ) {
      scrollItem2.classList.add( 'active' );
    } else {
      scrollItem2.classList.remove( 'active' );
    }
  });
}