// swiper 6.1.2 no IE

import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicHalfSlider = [
  buildSliderHalfContent(),
  ScrollDynamicSliderHalf(),
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

function sliderDynamicHalfReady() {
  var sliderDynamicHalf = new Swiper('#sliderDynamicHalf', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   960: {
    //     slidesPerView: 3,
    //     spaceBetween: 10
    //   },
    // },
    // grabCursor: true,
    autoHeight: true,
    observer: true,
    observeParents: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    // navigation: {
    //   nextEl: '#sliderDynamicNext',
    //   prevEl: '#sliderDynamicPrev',
    // },
    // pagination: {
    //   el: '#sliderDynamicHalfPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 2.3,
    spaceBetween: '1%',
    speed: 600,
  })
  return sliderDynamicHalf;
}

// 滾動
function ScrollDynamicSliderHalf() {
  var scrollItem = document.getElementById( 'decoDynamicSliderHalf' );
  // var scrollItem2 = document.getElementById( 'decorBnSlider2');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );
    // var scrollPercentage2 = getScrollPercentage( scrollItem2, 0, .6 );


    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';

    // var value = scrollPercentage * 1;

    // scrollItem2.style.transform = 'translateX(' + pos2 + '%)';
    // scrollItem2.style.transform = 'translateY(' + pos + '%)';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
    }
  });
}

