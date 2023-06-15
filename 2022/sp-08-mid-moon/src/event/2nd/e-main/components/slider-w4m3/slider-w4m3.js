import Swiper from 'swiper/swiper-bundle.min.js';
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'


export var initSliderW4M3 = [
  sliderW4M3Ready(),
  // setInterval(function() {randomSliderW4M3()}, 1500),
  ScrollSliderW4M3(),
];

function sliderW4M3Ready() {
  var promoSection = new Swiper('#sliderW4M3', {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    // init: isNeedSlider('#dailySliderBlock', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderW4M3 .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    // loop: true,
    slidesPerView: 2.5,
    // spaceBetween: "1%",
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    // slidesPerColumnFill : 'row',
    speed: 500,
    breakpoints: {
      960: {
        slidesPerView: 3.5,
      }
    },
  })
  return promoSection
}

// 滾動
function ScrollSliderW4M3() {
  var scrollItem = document.getElementById( 'decorSliderW4M3Left' );
  var scrollItem2 = document.getElementById( 'decorSliderW4M3Right' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 120 + scrollPercentage * -120;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollItem2.style.transform = 'scale(' + value + ')';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem2.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}