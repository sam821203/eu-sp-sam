import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initPromoSlider2 = [
  promoSlider2Ready(),
  ScrollPromoSlider(),
];

function promoSlider2Ready() {
  var promoSliderItem = new Swiper('#promoSlider2Item', {
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
  var scrollTitle = document.getElementById( 'titlePromoSlider2');
  // var scrollItem3 = document.getElementById( 'decorPromoSlider3');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 250 + scrollPercentage * -250;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateX(' + pos + '%) scale(' + value + ')';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    if ( scrollPercentage === 1 ) {
      scrollTitle.classList.add( 'active' );
    } else {
      scrollTitle.classList.remove( 'active' );
    }
  });
}