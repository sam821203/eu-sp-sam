import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
// import { ferrisReady } from 'event/1st/e-main/components/hero-section/ferris/ferris.js'
// import { makeParallaxDefault } from 'utils/js/parallax-scroll.js'
export var initHero = [
  heroItemReady(),
];

function heroItemReady() {
  var heroItem = new Swiper('#heroItem', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // grabCursor: true,
    // init: isNeedSlider('#dailySliderBlock', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    loop: true,
    slidesPerView: 2,
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    // slidesPerColumnFill : 'row',
    speed: 600,
  })
  return heroItem

}