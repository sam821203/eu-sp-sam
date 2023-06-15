import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDailyTab = scrollDailyTab();

function scrollDailyTab () {
  var scrollItem = document.getElementById( 'scrollDailyTab' );
  var scrollItem2 = document.getElementById( 'scrollDailyTab2' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var scrollPercentage2 = getScrollPercentage( scrollItem2, 0, 0.6);

    var pos = scrollPercentage * -50;
    var pos2 = scrollPercentage2 * -100;

    scrollItem.style.opacity = scrollPercentage;
    scrollItem.style.transform = 'translateY(' + pos + 'px)';

    scrollItem2.style.transform = 'translateY(' + pos2 + 'px)';
  });
}