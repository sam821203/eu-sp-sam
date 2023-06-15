import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSlider = scrollDynamicSlider();

function scrollDynamicSlider () {
  var scrollItem = document.getElementById( 'decoDynamicSlider' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );

    var rotateDeg = scrollPercentage * 1080;

    scrollItem.style.transform = 'rotate(' + rotateDeg + 'deg)';
  });
}