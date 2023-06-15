import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initSliderW3M3 = [
  sliderW3M3Ready(),
  scrollSliderW3M3(),
];

function sliderW3M3Ready() {
  var galleryTop = new Swiper('.gallery-top', {
    // centeredSlides: true,
    // slidesPerView: 1,
    // slidesPerGroup : 1,
    loop: true,
    loopedSlides: 4
    // watchSlidesProgress : true,
    // watchSlidesVisibility : true,
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    autoplay: {
      delay: 1800 + Math.floor(Math.random() * 500),
      disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    loopedSlides: 4,
    slidesPerView: "auto",
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('.gallery-thumbs .swiper-slide').length),
    // slidesPerGroup : 1,
    // spaceBetween: '4%',
    // speed: 600,
    // watchSlidesProgress : true,
    // watchSlidesVisibility : true,
  } )
  
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
}

// 滾動
function scrollSliderW3M3() {
  var scrollItem = document.getElementById( 'decorW3M3Title' );
  // var scrollItem2 = document.getElementById( 'decorW3M3Right');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'scaleX(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollItem2.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      // scrollItem2.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      // scrollItem2.classList.remove( 'active' );
    }
  });
}