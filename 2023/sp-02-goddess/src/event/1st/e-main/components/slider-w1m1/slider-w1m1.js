import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initSliderW1M1 = [
  sliderW1M1Ready(),
  scrollSliderW1M1(),
];

function sliderW1M1Ready() {
  var sliderW1M1Item = new Swiper('#sliderW1M1Item', {
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    grabCursor: true,
    centeredSlides: true,
    // effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    slidesPerView: "auto",
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderW1M1Item .swiper-slide').length),
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
  return sliderW1M1Item;
}

// 滾動
function scrollSliderW1M1() {
  var scrollItem = document.getElementById( 'decorW1M1Title' );
  var scrollItem2 = document.getElementById( 'decorW1M1Right');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .2 );

    // var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform = 'scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    // scrollItem.style.transformOrigin = 'top';
    // scrollItem2.style.transformOrigin = 'top';
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