import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSection2 = scrollDynamicSection2();

function scrollDynamicSection2 () {
  var scrollItem = document.getElementById( 'decoDynamicSection2' );
  var childItem = scrollItem.querySelector('.title__decoration');

  window.addEventListener( "scroll", function () {
    var scrollPercentageItem = getScrollPercentage( scrollItem, 0, 0.6 );
    var scrollPercentageChild = getScrollPercentage( childItem, 0, 0.6 );

    var posItem = 50 + scrollPercentageItem * -50;
    var posChild = 0 + scrollPercentageChild * 0;

    scrollItem.style.transform = 'translateY(' + posItem + 'px)';
    childItem.style.transform = 'translateY(' + posChild + 'px)';


    if ( scrollPercentageChild === 1 ) {
      childItem.classList.add( 'active' );
    } else {
      childItem.classList.remove( 'active' );
    }
  });
}