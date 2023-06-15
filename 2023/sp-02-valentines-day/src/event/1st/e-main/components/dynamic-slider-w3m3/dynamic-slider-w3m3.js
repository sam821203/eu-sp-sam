import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicSliderW3M3 = [
  buildDynamicSliderContent(),
  scrollDynamicSliderW3M3(),
];

function buildDynamicSliderContent () {
  var sliderContainer = document.querySelector( '#DynamicSliderW3M3Block .swiper-wrapper' );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSliderW3M3.forEach(function(el){
    var sliderChild = buildDynamicAutoSync(el);

    sliderContainer.appendChild(sliderChild);
  } );
  // detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
  dynamicSliderReady();
}

function dynamicSliderReady() {
  var dynamicSliderItem = new Swiper('#DynamicSliderW3M3Block', {
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
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#DynamicSliderBlock .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
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
    spaceBetween: '2%',
    // slidesPerGroup: 3,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return dynamicSliderItem;
}

// 滾動
function scrollDynamicSliderW3M3() {
  var scrollItem = document.getElementById( 'decorSliderW3M3Left' );
  var scrollItem2 = document.getElementById( 'decorSliderW3M3Right' );
  var scrollItem3 = document.getElementById( 'decorSliderW3M3Item' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;
    var pos2 = 200 + scrollPercentage * -200;

    scrollItem.style.transform = 'translateX(-' + pos + '%)';
    scrollItem2.style.transform = 'translateY(' + pos + '%)';
    scrollItem3.style.transform = 'translateX(' + pos2 + '%)';

    // var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom center';
    // scrollItem.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      scrollItem3.classList.add( 'active' );
    } else {
      scrollItem3.classList.remove( 'active' );
    }
  });
}