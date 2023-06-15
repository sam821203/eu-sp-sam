import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollBnSlider = scrollBnSlider();

function scrollBnSlider () {
  var scrollItem = document.getElementById( 'decoBnSlider' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var rotateDeg = 10 - scrollPercentage * 10;

    scrollItem.style.transform = 'rotate(' + rotateDeg + 'deg)';
  });
}