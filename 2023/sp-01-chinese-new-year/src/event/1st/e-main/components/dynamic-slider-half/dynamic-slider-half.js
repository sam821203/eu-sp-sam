// swiper 6.1.2 no IE

import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicHalfSlider = [
  buildSliderHalfContent(),
  // ScrollDynamicSliderHalf(),
];

function buildSliderHalfContent(){
  var sliderHalfContainer = document.querySelector( '#sliderDynamicHalf .swiper-wrapper' );

  dataDynamicHalf.forEach(function(el){
    var sliderHalfChild = buildDynamicAutoSync(el);

    sliderHalfContainer.appendChild(sliderHalfChild);
  } );

  // FIXME:detectApp推遲到window load後才載入輪播可能是自動變價失敗原因
  // detectApp( window.addEventListener( 'load', sliderDynamicHalfReady ), sliderDynamicHalfReady );
  sliderDynamicHalfReady();
}

function sliderDynamicHalfReady () {
  var dynamicSliders = document.querySelectorAll( '.container--dynamic-half' );
  dynamicSliders.forEach( function ( el ) {
    var thisSlideItemsLength = el.querySelectorAll( '.swiper-slide' ).length;
    var sliderPromo = new Swiper(el, {
      autoplay: {
        delay: 1800 + Math.floor(Math.random() * 500),
        disableOnInteraction: false,
        // reverseDirection: true,
      },
    grabCursor: true,
    // centeredSlides: true,
    // init: thisSlideItemsLength > 1 ? true : false,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('.container--dynamic-half .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
      loadPrevNextAmount: 3,
    },
    loop: true,
    // spaceBetween: '1%',
    slidesPerView: 3,
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    // slidesPerColumnFill : 'row',
    speed: 600,
  })
    return sliderPromo;
  });

}

// 滾動
function ScrollDynamicSliderHalf() {
  // var scrollItem = document.getElementById( 'decorHalfLeft' );
  var scrollItem2 = document.getElementById( 'decorHalfRight');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );
    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;
    
    // scrollItem.style.transform = 'translateX(-' + pos + '%) scale(' + value + ')';
    // scrollItem.style.transformOrigin = 'top left';

    // scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollItem.style.opacity = value;


    // scrollItem2.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      // scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
      // scrollItem3.classList.add( 'active' );
    } else {
      // scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
      // scrollItem3.classList.remove( 'active' );
    }
  });
}

