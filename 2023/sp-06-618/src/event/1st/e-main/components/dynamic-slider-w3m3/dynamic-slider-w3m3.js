import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicSliderW3M3 = [
  buildDynamicSliderContent2(),
  // dynamicSliderW3M3Bn(),
  scrollDynamicW3m3(),
];

function buildDynamicSliderContent2 () {
  var sliderContainer = document.querySelector( '#DynamicSliderBlock2 .swiper-wrapper' );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSliderW3M3.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync(el);

    sliderContainer.appendChild(sliderChild); 
    
  });
  // detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
  dynamicSlider2Ready();
}

function dynamicSlider2Ready() {
  var dynamicSlider2Item = new Swiper('#DynamicSliderBlock2', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    // direction: "vertical",
    grabCursor: true,
    // effect: "fade",
    // flipEffect: {
    //   slideShadows: false,
    // },
    lazy: {
      loadPrevNext: true,
    },
    // loop: true,
    perspective: true,
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3,
    slidesPerGroup: 2,
    slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return dynamicSlider2Item;
}

// 滾動
function scrollDynamicW3m3() {
  var scrollItem = document.getElementById( 'decorDynamicW3m3Left' );
  var scrollItem2 = document.getElementById( 'decorDynamicW3m3Right');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    scrollItem2.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
    }
  });
}