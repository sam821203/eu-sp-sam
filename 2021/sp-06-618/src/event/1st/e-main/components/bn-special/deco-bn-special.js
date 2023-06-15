import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollBnSpecial = scrollBnSpecial();

function scrollBnSpecial () {
  var scrollItem = document.getElementById( 'decoBnSpecial' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = ' translateY(' + pos + '%)';
  });
}