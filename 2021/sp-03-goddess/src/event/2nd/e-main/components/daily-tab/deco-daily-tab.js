import { getScrollPercentage } from 'utils/js/scroll.js'
import { isWindowWidth } from 'utils/js/detect.js'

export var initScrollDailyTab = scrollDailyTab();

function scrollDailyTab () {
  var scrollItem = document.getElementById( 'scrollDailyTab' );
  var scrollItem2 = document.getElementById( 'scrollDailyTab2' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.6 );
    var scrollPercentage2 = getScrollPercentage( scrollItem2, 0, 0.6 );
    var itemConst = isWindowWidth( 960 ) ? -50 : ( scrollItem.clientHeight * -0.4 );
    var item2Const = isWindowWidth( 960 ) ? -100 : ( scrollItem2.clientHeight * -0.8 );


    var pos = scrollPercentage * itemConst;
    var pos2 = scrollPercentage2 * item2Const;

    scrollItem.style.opacity = scrollPercentage;
    scrollItem.style.transform = 'translateY(' + pos + 'px)';

    scrollItem2.style.transform = 'translateY(' + pos2 + 'px)';
  });
}