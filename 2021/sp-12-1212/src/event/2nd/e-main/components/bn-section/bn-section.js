// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { getScrollPercentage } from 'utils/js/scroll.js'

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'

export var initBnSection = [
  // buildSliderContent2(),
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

// function sliderDynamic2Ready() {
//   var sliderDynamic = new Swiper('#sliderDynamic2', {
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
//     grabCursor: true,
//     init: isNeedSlider('#sliderDynamic2', 3),
//     initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic2 .swiper-slide').length),
//     lazy: {
//       loadPrevNext: true,
//     },
//     loop: true,
//     navigation: {
//       nextEl: '#sliderDynamic2Next',
//       prevEl: '#sliderDynamic2Prev',
//     },
//     // pagination: {
//     //   el: '#sliderDynamic2Pager',
//     //   type: 'bullets',
//     //   clickable: true,
//     // },
//     slidesPerView: 3,
//     slidesPerGroup: 3,
//     spaceBetween: '1.5%',
//     speed: 600,
//     watchSlidesProgress : true,
//     watchSlidesVisibility : true,
//   })
// }


// 滾動
function scrollBnSection() {
  var scrollItem = document.getElementById( 'decorBnSection' );
  var scrollTitle = document.getElementById( 'titleBnSection');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollTitle, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    scrollTitle.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
    }
  });
}