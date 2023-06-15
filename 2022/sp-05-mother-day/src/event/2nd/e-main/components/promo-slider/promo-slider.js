import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initPromoSlider = [
  promoSliderReady(),
  ScrollPromoSlider(),
];

function promoSliderReady() {
  var promoSliderItem = new Swiper('#promoSliderItem', {
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
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#promoSliderItem .swiper-slide').length),
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
    breakpoints:{
      960:{
        slidesPerView: 3,
        spaceBetween: '1%',
      },
    },
    // slidesPerGroup: 3,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return promoSliderItem;
}

// 滾動
function ScrollPromoSlider() {
  var scrollItem = document.getElementById( 'decorPromoSliderLeft' );
  var scrollItem2 = document.getElementById( 'decorPromoSliderRight');
  var scrollTitle = document.getElementById( 'titlePromoSlider');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );

    var pos = 100 + scrollPercentage * -100;

    // scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    scrollTitle.style.transform = ' scale(' + value + ')';
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