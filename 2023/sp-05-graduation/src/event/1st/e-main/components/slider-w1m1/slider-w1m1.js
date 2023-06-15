import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initSliderW1M1 = [
  sliderW1M1Ready(),
  // scrollSliderW1M1(),
];

function sliderW1M1Ready() {
  var sliderW1M1Item = new Swiper('#sliderW1M1Item', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderW1M1Item .swiper-slide').length),
    centeredSlides: true,
    grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    effect : 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 10,
      depth: 60,
      modifier: 2,
      slideShadows : false,
    },
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
		slidesPerView: 1,
    // slidesPerGroup: 3,
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return sliderW1M1Item;
}

// 滾動
function scrollSliderW1M1() {
  var scrollItem = document.getElementById( 'decorSliderW1M1Left' );
  var scrollItem2 = document.getElementById( 'decorSliderW1M1Right' );
  // var scrollItem2 = document.getElementById( 'decorSliderW1M1Bottom' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );
    var angle = -360 + scrollPercentage * 360;
    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateY(' + (pos * 2) + '%) rotate(' + (angle / 12) + 'deg)';
    scrollItem2.style.transform = 'translateY(' + (pos * 4) + '%)';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
    }
  });
}