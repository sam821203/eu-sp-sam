import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicSliderW2M2 = [
  buildDynamicSliderContent(),
  scrollDynamicSliderW2M2(),
];

function buildDynamicSliderContent () {
  var sliderContainer = document.querySelector( '#DynamicSliderW2M2Block .swiper-wrapper' );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSliderW2M2.forEach(function(el){
    var sliderChild = buildDynamicAutoSync(el);

    sliderContainer.appendChild(sliderChild);
  } );
  // detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
  dynamicSliderReady();
}

function dynamicSliderReady() {
  var dynamicSliderItem = new Swiper('#DynamicSliderW2M2Block', {
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
		slidesPerView: 2,
    spaceBetween: '2.5%',
    // slidesPerGroup: 3,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return dynamicSliderItem;
}

// 滾動
function scrollDynamicSliderW2M2() {
  var scrollTitle = document.getElementById( 'titleSliderW2M2' );
  var scrollItem = document.getElementById( 'decorSliderW2M2Item' );
  var scrollItem2 = document.getElementById( 'decorSliderW2M2Left' );
  var scrollItem3 = document.getElementById( 'decorSliderW2M2Right' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 150 + scrollPercentage * -150;
    var value = scrollPercentage * 1;

    scrollTitle.style.transform = 'translateY(' + pos + '%)';
    scrollItem2.style.transform = 'scale(' + value +')';

    // scrollItem.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
      scrollItem3.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
      scrollItem3.classList.remove( 'active' );
    }
  });
}