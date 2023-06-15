import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollTwoItem = scrollTwoItem();

function scrollTwoItem () {
  var scrollItem = document.getElementById( 'scrollTwoItem' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );

    scrollItem.style.opacity = scrollPercentage;
    scrollItem.style.transform = 'scale(' + scrollPercentage * 1.1 + ')';
  });
}