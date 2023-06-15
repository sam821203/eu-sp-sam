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
  var scrollItem = document.getElementById( 'decorPromoSlider' );
  var scrollTitle = document.getElementById( 'titlePromoSlider');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollTitle.style.transform = 'translateY(' + pos + '%)';

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