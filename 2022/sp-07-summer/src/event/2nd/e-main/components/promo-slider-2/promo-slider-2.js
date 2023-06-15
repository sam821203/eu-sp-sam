import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initPromoSlider2 = [
  promoSlider2Ready(),
  ScrollPromoSlider(),
];

function promoSlider2Ready() {
  var promoSliderItem = new Swiper('#promoSliderItem2', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#promoSliderItem2 .swiper-slide').length),
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
  var scrollTitle = document.getElementById( 'titlePromoSlider2');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollTitle, 0, .6 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateX(' + pos + '%) scale(' + value + ')';
    scrollTitle.style.transform = ' scale(' + value + ')';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollTitle.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollTitle.classList.remove( 'active' );
    }
  });
}