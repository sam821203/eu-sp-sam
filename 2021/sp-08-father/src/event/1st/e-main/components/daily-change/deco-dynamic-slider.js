import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDaily = scrollDaily();

function scrollDaily () {
  var scrollItem = document.getElementById( 'decoDaily' );
  console.log(scrollItem);
  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
  });
}