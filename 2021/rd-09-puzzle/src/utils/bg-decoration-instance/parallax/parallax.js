import Parallax from 'parallax-js'
import { detectWindowWidth } from 'utils/js/detect.js'

function makeParallax() {
  var bgDecoration = document.getElementById('bgDecoration');
  var itemImgs = Array.apply( null, bgDecoration.querySelectorAll( '.decoration__item img' ) );
  itemImgs.forEach( function ( el ) {
    var elOffsetLeft = (window.innerWidth - el.clientWidth) / 2;
    el.style.left = elOffsetLeft +'px';
  });
  var parallaxInstance = new Parallax( bgDecoration );

}

function readyParallax() {
  detectWindowWidth(960, makeParallax, null);
  window.addEventListener('resize', function(){
    detectWindowWidth(960, makeParallax, null);
  });
}
export var initParallax = requestAnimationFrame(readyParallax);
