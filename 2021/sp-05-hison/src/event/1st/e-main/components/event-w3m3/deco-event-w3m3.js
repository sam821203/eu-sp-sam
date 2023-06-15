import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollW3M3 = scrollW3M3();

function scrollW3M3 () {
  var scrollItemLeft = document.getElementById( 'decoW3M3Left' );
  var scrollItemRight = document.getElementById( 'decoW3M3Right' );

  window.addEventListener( "scroll", function () {
    var scrollPercentageLeft = getScrollPercentage( scrollItemLeft, 0, 0.6 );
    var scrollPercentageRight = getScrollPercentage( scrollItemRight, 0, 0.6 );

    var rotateDegLeft = scrollPercentageLeft * 1080;
    var rotateDegRight = scrollPercentageRight * -720;

    scrollItemLeft.style.transform = 'rotate(' + rotateDegLeft + 'deg)';
    scrollItemRight.style.transform = 'rotate(' + rotateDegRight + 'deg)';
  });
}