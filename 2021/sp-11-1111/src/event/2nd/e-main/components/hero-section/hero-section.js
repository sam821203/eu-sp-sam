import { ferrisReady } from 'event/1st/e-main/components/hero-section/ferris/ferris.js'
import { makeParallaxDefault } from 'utils/js/parallax-scroll.js'

export var initHero = requestAnimationFrame(heroReady);

function heroReady () {
  ferrisReady();
  initParallaxScroll();
}

function initParallaxScroll () {
  parallaxScroll( 'bgSky', -0.3 );
  parallaxScroll( 'bgCarLeft', 0.5 );
  parallaxScroll( 'bgCarRight', 0.5 );
  parallaxScroll( 'bgCastle', -0.4 );
  parallaxScroll( 'bgRoadLight', 0.2 );
}

function parallaxScroll (id, param) {
  var scrollDom = document.getElementById( id );

  makeParallaxDefault( scrollDom, param );
}

// function afterAnimateScroll (id, param) {
//   var decorationWrap = document.getElementById( id );
//   var decorationImg = decorationWrap.querySelector('img');

//   decorationWrap.addEventListener( 'animationend', function () {
//     makeParallaxDefault( decorationImg, param );
//   });
// }
