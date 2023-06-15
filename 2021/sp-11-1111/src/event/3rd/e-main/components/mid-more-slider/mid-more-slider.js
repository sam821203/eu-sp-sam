// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import {detectApp} from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
// export var initDynamicSection2 = sliderMidMoreReady();


// import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderMidMore = [
  detectApp(window.addEventListener('load', sliderMidMoreReady), sliderMidMoreReady),
  ScrollMidMoreSlider(),
];

function sliderMidMoreReady() {
  var sliderMidMore = new Swiper('#sliderMidMore', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   767: {
    //     slidesPerView: 3,
    //   },
    // },
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderMidMore .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    navigation: {
      nextEl: '#sliderMidMoreNext',
      prevEl: '#sliderMidMorePrev',
    },

    slidesPerView: 3,
    // slidesPerGroup: 1,
    spaceBetween: '1.5%',
    speed: 600,
    watchSlidesProgress: true,
    // watchSlidesVisibility : true,
  })
}

// 滾動
function ScrollMidMoreSlider() {
  // var scrollItem = document.getElementById( 'decorDynamicSlider' );
  var scrollTitle = document.getElementById( 'MidMoreSliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollTitle, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    // scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}