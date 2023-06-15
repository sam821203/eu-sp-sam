import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSection = scrollDynamicSection();

function scrollDynamicSection () {
  var scrollItem = document.getElementById( 'decoDynamicSection' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );

    var flipDeg = scrollPercentage * 90 - 90;

    // scrollItem.style.transform = 'scaleX(' + scrollPercentage + ')';
    scrollItem.style.transform = 'perspective(400px) rotateX(' + flipDeg + 'deg)';
  });
}