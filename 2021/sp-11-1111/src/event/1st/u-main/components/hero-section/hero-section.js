import { ferrisReady } from 'event/1st/u-main/components/hero-section/ferris/ferris.js'
import { makeParallaxDefault } from 'utils/js/parallax-scroll.js'
export var initHero = requestAnimationFrame(heroReady);

function heroReady () {
  ferrisReady();
  // initParallaxScroll();
}

// function initParallaxScroll () {
//   parallaxScroll( 'bgSky', -0.05 );
//   parallaxScroll( 'ballon', 0.4 );
//   parallaxScroll( 'plane', 0.8 );
//   parallaxScroll( 'bgCastle', -0.1 );
// }

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
