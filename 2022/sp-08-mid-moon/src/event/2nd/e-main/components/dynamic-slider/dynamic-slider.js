import Swiper from 'swiper/swiper-bundle.min.js';
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'

export var initDynamicSlider = [
  buildDynamicSliderContent(),
  ScrollDynamicSlider(),
];

function buildDynamicSliderContent () {
  var sliderContainer = document.querySelector( '#DynamicSliderBlock .swiper-wrapper' );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSlider.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync( el,{
      isSliderLazyLoad: false,
    } );

    sliderContainer.appendChild(sliderChild);
  });
  dynamicSliderReady();
}

function dynamicSliderReady() {

  var dynamicSlider = new Swiper('#DynamicSliderBlock', {
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
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: '1.5%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  })
  return dynamicSlider;
}

// 滾動物件
function ScrollDynamicSlider() {
  var scrollItem = document.getElementById( 'decorDynamicSliderLeft');
  var scrollItem2 = document.getElementById( 'decorDynamicSliderRight');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 80 + scrollPercentage * -80;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'scale(' + value + ')';
    scrollItem2.style.transform = 'scale(' + value + ')';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
    }
  });
}
