import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollLeftRight = scrollLeftRight();

function scrollLeftRight () {
  var scrollItemTitle = document.getElementById( 'leftRightTitle' );
  var scrollItemDeco = document.getElementById( 'decoLeftRight' );

  window.addEventListener( "scroll", function () {
    var scrollPercentageTitle = getScrollPercentage( scrollItemTitle, 0, 0.6 );
    var scrollPercentageDeco = getScrollPercentage( scrollItemDeco, 0, 0.6 );

    var posTitle = 200 + scrollPercentageTitle * -200;
    var posDeco = 100 + scrollPercentageDeco * -100;

    scrollItemTitle.style.transform = 'translateY(' + posTitle + 'px)';
    scrollItemDeco.style.transform = 'translateY(' + posDeco + 'px)';
  });
}