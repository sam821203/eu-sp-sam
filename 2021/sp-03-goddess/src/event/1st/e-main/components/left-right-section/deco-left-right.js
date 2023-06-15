import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollLeftRight = scrollLeftRight();

function scrollLeftRight () {
  var scrollItem = document.getElementById( 'scrollLeftRight' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );

    var pos = scrollPercentage * -50;

    scrollItem.style.opacity = scrollPercentage;
    scrollItem.style.transform = 'translateY(' + pos + 'px)';
  });
}