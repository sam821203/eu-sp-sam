import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollPromo = scrollPromo();

function scrollPromo () {
  var scrollItem = document.getElementById( 'scrollPromo' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateX(' + pos + 'px)';
  });
}