import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollBnSlider = scrollBnSlider();

function scrollBnSlider () {
  var scrollItem = document.getElementById( 'decoBnSlider' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var pos = 150 + scrollPercentage * -150;
    var width = scrollPercentage;

    scrollItem.style.transform = 'scale(' + width + ')' + ' translateY(' + pos + '%)';
  });
}