import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollPromo = scrollPromo();

function scrollPromo () {
  var scrollItem = document.getElementById( 'scrollPromo' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var pos = scrollPercentage * -40;

    if ( pos > -27.5 ) pos = 0;

    scrollItem.style.opacity = scrollPercentage;
    scrollItem.style.transform = 'translateY(' + pos + 'px)';
  });
}