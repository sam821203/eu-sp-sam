import { getScrollPercentage } from 'utils/js/scroll.js'
import { isWindowWidth } from 'utils/js/detect.js'

export var initScrollDoubleSlider = scrollDoubleSlider();

function scrollDoubleSlider () {
  var scrollItem = document.getElementById( 'scrollDoubleSlider' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var itemConst = isWindowWidth( 960 ) ? ( scrollPercentage * 1.01 ) : ( scrollPercentage * 1.28 );

    scrollItem.style.opacity = scrollPercentage;
    scrollItem.style.transform = 'scale(' + itemConst + ')';
  });
}