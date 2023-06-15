import Parallax from 'parallax-js'
import { detectWindowWidth } from 'utils/js/detect.js'

function makeParallax() {
  var bgDecoration = document.getElementById('bgDecoration');
  var itemImgs = Array.apply( null, bgDecoration.querySelectorAll( '.decoration__item img' ) );
  var itemImgsFirst = itemImgs[0];
  var itemImgsSecond = itemImgs[1];
  // console.log(itemImgsSecond);
  itemImgs.forEach( function ( el, index ) {
    var elOffsetLeft = (window.innerWidth - el.clientWidth) / 2;
    el.style.left = 120 + elOffsetLeft +'px';
    itemImgsFirst.style.top = '-' + 10 +'px';
    itemImgsSecond.style.top = 230 +'px';
  });
  var parallaxInstance = new Parallax( bgDecoration );

}

function readyParallax () {
  window.addEventListener('load', function(){
    detectWindowWidth(1260, makeParallax, null);
  });

  window.addEventListener('resize', function(){
    detectWindowWidth(1260, makeParallax, null);
  });
}
export var initParallax = requestAnimationFrame(readyParallax);
