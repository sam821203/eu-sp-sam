import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initPromoSlider2 = [
  promoSlider2Ready(),
  ScrollPromoSlider2(),
];

function promoSlider2Ready() {
  var promoSlider2Item = new Swiper('#promoSlider2Item', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    grabCursor: true,
    effect: "flip",
    flipEffect: {
      slideShadows: false,
    },
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#promoSlider2Item .swiper-slide').length),
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
    // slidesPerGroup: 3,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return promoSlider2Item;
}

// 滾動
function ScrollPromoSlider2() {
  var scrollItem = document.getElementById( 'decorPromoSlider2' );
  // var scrollTitle = document.getElementById( 'BnSpecialTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}