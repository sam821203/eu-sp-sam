import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSection3 = scrollDynamicSection3();

function scrollDynamicSection3 () {
  var scrollItem = document.getElementById( 'decoDynamicSection3' );
  var childItem = scrollItem.querySelector('.title__decoration');

  window.addEventListener( "scroll", function () {
    var scrollPercentageItem = getScrollPercentage( scrollItem, 0, 0.6 );
    var scrollPercentageChild = getScrollPercentage( childItem, 0, 0.6 );

    var posItem = 0 + scrollPercentageItem * 0;
    var posChild = 100 + scrollPercentageChild * -100;

    scrollItem.style.transform = 'translateY(' + posItem + 'px)';
    childItem.style.transform = 'translateY(' + posChild + 'px)';

    if ( scrollPercentageChild === 1 ) {
      childItem.classList.add( 'active' );
    } else {
      childItem.classList.remove( 'active' );
    }
  });
}