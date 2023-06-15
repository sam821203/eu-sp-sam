// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { getScrollPercentage } from 'utils/js/scroll.js'

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initDynamicSlider3 = [
  buildSliderContent3(),
  ScrollDynamicSlider3(),
];

function buildSliderContent3 () {
  var sliderContainer = document.querySelector( '#dynamicSlider3Section .swiper-wrapper' );

  dataDynamicSliderThird.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync( el,{
      isSliderLazyLoad: false,
    } );

    sliderContainer.appendChild(sliderChild);
  });
  detectApp(window.addEventListener('load', dynamicSlide3Ready), dynamicSlide3Ready);
}



function dynamicSlide3Ready() {
  var sliderDynamic = new Swiper('#dynamicSlider3Section', {
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    // init: isNeedSlider('#dynamicSlider2Section', 3),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dynamicSlider3Section .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    loop: true,
    // navigation: {
    //   nextEl: '#sliderDynamic2Next',
    //   prevEl: '#sliderDynamic2Prev',
    // },
    // pagination: {
    //   el: '#sliderDynamic2Pager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3.2,
    // slidesPerGroup: 3,
    spaceBetween: '1.5%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  })
  return sliderDynamic;
}


// 滾動
function ScrollDynamicSlider3() {
  // var scrollItem = document.getElementById( 'decorDynamicSliderSecond' );
  var scrollTitle = document.getElementById( 'titleDynamicSlider3');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollTitle, 0, .4 );

    var pos = 100 + scrollPercentage * -100;

    // scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollTitle.classList.add( 'active' );
    } else {
      scrollTitle.classList.remove( 'active' );
    }
  });
}