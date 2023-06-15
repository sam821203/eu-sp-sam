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
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#promoSliderItem .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    // effect: "flip",
    // flipEffect: {
    //   slideShadows: false,
    // },
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    // slidesPerGroup: 3,
    slidesPerView: 1,
    spaceBetween: '1%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return promoSliderItem;
}

// 滾動
function ScrollPromoSlider() {
  var scrollItem = document.getElementById( 'decorPromoSliderItem' );
  var scrollTitle = document.getElementById( 'titlePromoSlider');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollTitle, 0, .5 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateX(' + pos + '%) scale(' + value + ')';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    scrollTitle.style.transform = ' scale(' + value + ')';
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}