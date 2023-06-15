import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSection4 = scrollDynamicSection4();

function scrollDynamicSection4 () {
  var scrollItem = document.getElementById( 'decoDynamicSection4' );
  var childItem = scrollItem.querySelector('.title__decoration');

  window.addEventListener( "scroll", function () {
    var scrollPercentageItem = getScrollPercentage( scrollItem, 0, 0.6 );
    var scrollPercentageChild = getScrollPercentage( childItem, 0, 0.6 );

    var posItem = 150 + scrollPercentageItem * -150;
    var posChild = -50 + scrollPercentageChild * 50;

    scrollItem.style.transform = 'translateY(' + posItem + 'px)';
    childItem.style.transform = 'translateY(' + posChild + 'px)';

    if ( scrollPercentageChild == 1 ) {
      childItem.classList.add( 'active' );
    } else {
      childItem.classList.remove( 'active' );
    }
  });
}