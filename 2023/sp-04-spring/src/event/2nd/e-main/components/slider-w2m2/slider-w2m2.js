import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initSliderW2M2 = [
  sliderW2M2Ready(),
  scrollSliderW2M2(),
];

function sliderW2M2Ready() {
  var sliderW2M2Item = new Swiper('#sliderW2M2Item', {
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    grabCursor: true,
    // centeredSlides: true,
    // effect: "flip",
    // flipEffect: {
    //   slideShadows: false,
    // },
    // slidesPerView: "auto",
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderW2M2Item .swiper-slide').length),
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
    spaceBetween: '1%',
    // slidesPerGroup: 2,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return sliderW2M2Item;
}

// 滾動
function scrollSliderW2M2() {
  var scrollItem = document.getElementById( 'decorW2M2Left' );
  var scrollItem2 = document.getElementById( 'decorW2M2Right');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    // var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'scale(' + value + ')';
    scrollItem2.style.transform = ' scale(' + value + ')';
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