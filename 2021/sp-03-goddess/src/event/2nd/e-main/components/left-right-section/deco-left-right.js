import { getScrollPercentage } from 'utils/js/scroll.js'
import { isWindowWidth } from 'utils/js/detect.js'

export var initScrollLeftRight = scrollLeftRight();

function scrollLeftRight () {
  var scrollItem = document.getElementById( 'scrollLeftRight' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var itemConst = isWindowWidth( 960 ) ? -50 : ( scrollItem.clientHeight * -0.3 );

    var pos = scrollPercentage * itemConst;

    scrollItem.style.opacity = scrollPercentage;
    scrollItem.style.transform = 'translateY(' + pos + 'px)';
  });
}