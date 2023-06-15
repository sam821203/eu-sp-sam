import { makeParallaxDefault } from 'utils/js/parallax-scroll.js'

export var initHero = requestAnimationFrame(heroReady);

function heroReady () {
  afterAnimateScroll( 'decoHero', 0.44 );
  afterAnimateScroll( 'decoPoli', 0.25 );
  afterAnimateScroll( 'decoPoli2', 0.35);
}

function afterAnimateScroll (id, param) {
  var decorationWrap = document.getElementById( id );
  var decorationImg = decorationWrap.querySelector('img');

  decorationWrap.addEventListener( 'animationend', function () {
    makeParallaxDefault( decorationImg, param );
  });
}
