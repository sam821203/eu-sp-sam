import { getScrollPercentage } from 'utils/js/scroll.js'
import { isWindowWidth } from 'utils/js/detect.js'

export var initScrollPromo = scrollPromo();

function scrollPromo () {
  var scrollItem = document.getElementById( 'scrollPromo' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var itemConst = isWindowWidth( 960 ) ? -40 : ( scrollItem.clientHeight * -0.12 );

    var pos = scrollPercentage * itemConst;

    if ( pos > -27.5 ) pos = 0;

    scrollItem.style.opacity = scrollPercentage;
    scrollItem.style.transform = 'translateY(' + pos + 'px)';
  });
}