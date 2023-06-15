import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initSliderW1m1 = [
  sliderW1m1Ready(),
  scrollSliderW1m1(),
];

function sliderW1m1Ready() {
  var sliderW1m1Item = new Swiper('#sliderW1m1Item', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    centeredSlides: true,
    // effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    slidesPerView: "auto",
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderW1m1Item .swiper-slide').length),
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
    slidesPerView: 1,
    spaceBetween: '1%',
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return sliderW1m1Item;
}

// 滾動
function scrollSliderW1m1() {
  var scrollItem = document.getElementById( 'decorW1m1Left' );
  var scrollItem2 = document.getElementById( 'decorW1m1Right');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );

    // var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'scale(' + value + ')';
    scrollItem2.style.transform = ' scale(' + value + ')';
    scrollItem.style.transformOrigin = 'top';
    scrollItem2.style.transformOrigin = 'top';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
    }
  });
}