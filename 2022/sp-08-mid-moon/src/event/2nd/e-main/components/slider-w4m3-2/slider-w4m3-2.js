import Swiper from 'swiper/swiper-bundle.min.js';
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'


export var initSlider2W4M3 = [
  slider2W4M3Ready(),
  // setInterval(function() {randomSliderW4M3()}, 1500),
  ScrollSlider2W4M3(),
];

function slider2W4M3Ready() {
  var promoSection = new Swiper('#slider2W4M3', {
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
function ScrollSlider2W4M3() {
  var scrollItem = document.getElementById( 'decorSlider2W4M3Right' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 150 + scrollPercentage * -150;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translate(' + pos + '%,' + pos +'%)';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}