import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSection = scrollDynamicSection();

function scrollDynamicSection () {
  var scrollItem = document.getElementById( 'decorDynamicSection' );
  var childItem = scrollItem.querySelector('.title__decoration');

  window.addEventListener( "scroll", function () {
    var scrollPercentageItem = getScrollPercentage( scrollItem, 0, 0.6 );
    var scrollPercentageChild = getScrollPercentage( childItem, 0, 0.6 );

    var posItem = 100 + scrollPercentageItem * -100;
    var posChild = 150 + scrollPercentageChild * -150;

    scrollItem.style.transform = 'translateY(' + posItem + 'px)';
    childItem.style.transform = 'translateY(' + posChild + 'px)';

    // if ( scrollPercentageChild === 1 ) {
    //   childItem.classList.add( 'active' );
    // } else {
    //   childItem.classList.remove( 'active' );
    // }
  });
}