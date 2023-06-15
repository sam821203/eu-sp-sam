// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { getScrollPercentage } from 'utils/js/scroll.js'

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { detectApp } from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'

export var initBnSlider = [
  buildBnSlider(),
  ScrollBnSlider(),
];

function buildBnSlider () {
  // 採用沒到新月份就關掉的方式
  if ( !earlyDateHide( '2021/9/1 10:00:00', '#bnSlider' ) ) {
    detectApp( window.addEventListener( 'load', sliderBnReady ), sliderBnReady );
  }
}

function sliderBnReady() {
  var sliderBn = new Swiper('#sliderBn', {
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   reverseDirection: true,
    // },
    // grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderBn .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    pagination: {
      el: '#sliderBnPager',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: '5%',
    speed: 600,
  } )

  return sliderBn;
}

// 滾動
function ScrollBnSlider() {
  var scrollItem = document.getElementById( 'decorBnSlider' );
  // var scrollTitle = document.getElementById( 'DynamicSliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}