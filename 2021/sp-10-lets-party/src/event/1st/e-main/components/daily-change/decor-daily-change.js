import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDaily = scrollDaily();

function scrollDaily () {
  var scrollItem = document.getElementById( 'decoDaily' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.5 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
  });
}