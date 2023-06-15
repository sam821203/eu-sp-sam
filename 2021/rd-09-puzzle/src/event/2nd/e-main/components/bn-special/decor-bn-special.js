import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollBnSpecial = scrollBnSpecial();

function scrollBnSpecial () {
  var scrollItem = document.getElementById( 'decorBnSpecial' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.5 );

    var value = scrollPercentage * 1;

    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
  });
}