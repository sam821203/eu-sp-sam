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
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
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
		slidesPerView: 2.5,
    spaceBetween: '2.5%',
    // slidesPerGroup: 3,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return dynamicSliderItem;
}

// 滾動
function scrollDynamicSliderW3M3() {
  var scrollItem = document.getElementById( 'decorSliderW3M3Star1' );
  var scrollItem2 = document.getElementById( 'decorSliderW3M3Star2' );
  var scrollItem3 = document.getElementById( 'decorSliderW3M3Item' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;
    // var value2 = scrollPercentage * 0;

    // scrollItem.style.transformOrigin = 'bottom center';
    scrollItem3.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    // scrollItem.style.opacity = value;

    // scrollItem2.style.transform = ' scale(' + value + ')';
    // scrollItem2.style.opacity = value2;

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
    }
  });
}