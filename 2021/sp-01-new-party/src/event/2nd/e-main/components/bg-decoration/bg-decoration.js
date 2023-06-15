import { makeParallaxBgDefault } from 'utils/js/parallax-scroll.js'
import { isWindowWidth } from 'utils/js/detect.js'

var decorationSpark = document.getElementById( 'decorationSpark' );

makeParallaxBgDefault(decorationSpark, -0.6);

if ( isWindowWidth( 960 ) ) {
  window.addEventListener('load', function () {
    var bodyHeight = document.body.clientHeight;
    var decorationForeground = document.getElementById( 'decorationForeground' );

    decorationForeground.style.height = bodyHeight + 'px';
  });

}
