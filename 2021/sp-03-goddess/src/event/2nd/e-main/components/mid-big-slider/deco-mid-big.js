import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollMidBig = scrollMidBig();

function scrollMidBig () {
  var scrollItem = document.getElementById( 'scrollMidBig' );
  var scrollItem2 = document.getElementById( 'scrollMidBig2' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 1 );
    var scrollPercentage2 = getScrollPercentage( scrollItem2, 0, 1 );
    var itemConst = scrollItem.clientHeight * -4;
    var item2Const = scrollItem2.clientHeight * 12;

    var angle = scrollPercentage * itemConst;
    var angle2 = scrollPercentage2 * item2Const;

    scrollItem.style.transform = 'rotate(' + angle + 'deg)';

    scrollItem2.style.transform = 'rotate(' + angle2 + 'deg)';
  });
}