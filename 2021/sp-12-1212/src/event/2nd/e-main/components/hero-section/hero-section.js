import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
// import { ferrisReady } from 'event/2nd/e-main/components/hero-section/ferris/ferris.js'
// import { makeParallaxDefault } from 'utils/js/parallax-scroll.js'
export var initHero = [
  heroTitleReady(),

];


// function heroReady () {
//   // ferrisReady();
//   // initParallaxScroll();
//   heroTitleReady(),
// }

// function initParallaxScroll () {
//   parallaxScroll( 'bgSky', -0.1 );
//   parallaxScroll( 'ballon', 0.4 );
//   parallaxScroll( 'plane', 0.8 );
//   parallaxScroll( 'bgCastle', -0.1 );
// }

// function parallaxScroll (id, param) {
//   var scrollDom = document.getElementById( id );

//   makeParallaxDefault( scrollDom, param );
// }

function heroTitleReady () {
  var heroTitle = new Swiper('#heroTitle', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    direction : 'vertical',
    effect: 'flip',
    flipEffect: {
      slideShadows : false,
      limitRotation : true,
    },
    // grabCursor: true,
    // init: isNeedSlider('#dailySliderBlock', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    loop: true,
    slidesPerView: 1,
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    // slidesPerColumnFill : 'row',
    speed: 600,
  })
  return heroTitle
}

// function afterAnimateScroll (id, param) {
//   var decorationWrap = document.getElementById( id );
//   var decorationImg = decorationWrap.querySelector('img');

//   decorationWrap.addEventListener( 'animationend', function () {
//     makeParallaxDefault( decorationImg, param );
//   });
// }
