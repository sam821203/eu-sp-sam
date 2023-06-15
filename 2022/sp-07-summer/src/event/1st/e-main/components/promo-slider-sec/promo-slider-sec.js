import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initPromoSliderSec = [
  promoSliderSecReady(),
  ScrollPromoSlider(),
];

function promoSliderSecReady() {
  var promoSliderItem = new Swiper('#promoSliderSecItem', {
    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
    },
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#promoSliderItem .swiper-slide').length),
    // effect: "coverflow",
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
    centeredSlides: true,
    // grabCursor: true,
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
    // slidesPerGroup: 3,
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return promoSliderItem;
}

// 滾動
function ScrollPromoSlider() {
  var promoSliderSecLeft = document.getElementById( 'promoSliderSecLeft' );
  var promoSliderSecRight = document.getElementById( 'promoSliderSecRight');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( promoSliderSecLeft, 0, .6 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    promoSliderSecLeft.style.transform = 'translateX(' + pos/2 + '%) scale(' + value + ')';
    promoSliderSecRight.style.transform = 'translateX(-' + pos + '%) scale(' + value + ')';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      promoSliderSecLeft.classList.add( 'active' );
      promoSliderSecRight.classList.add( 'active' );
    } else {
      promoSliderSecLeft.classList.remove( 'active' );
      promoSliderSecRight.classList.remove( 'active' );
    }
  });
}