import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSection2 = scrollDynamicSection2();

function scrollDynamicSection2 () {
  var scrollItemWrap = document.getElementById( 'decoDynamicSection2' );
  var scrollChildItems = scrollItemWrap.querySelectorAll('.decoration__dynamic-section-2');

  window.addEventListener( "scroll", function () {
    var scrollPercentageChild1 = getScrollPercentage( scrollChildItems[0], 0, 0.5 );
    var scrollPercentageChild2 = getScrollPercentage( scrollChildItems[1], 0, 0.5 );

    var posChild1 = 50 + scrollPercentageChild1 * -50;
    var posChild2 = 100 + scrollPercentageChild2 * -100;

    scrollChildItems[0].style.transform = 'translateY(' + posChild1 + 'px)';
    scrollChildItems[1].style.transform = 'translateY(' + posChild2 + 'px)';


    if ( scrollPercentageChild2 === 1 ) {
      scrollChildItems[1].classList.add( 'active' );
    } else {
      scrollChildItems[1].classList.remove( 'active' );
    }
  });
}