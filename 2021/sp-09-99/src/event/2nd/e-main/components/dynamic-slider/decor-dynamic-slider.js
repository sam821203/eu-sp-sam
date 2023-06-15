import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSlider = scrollDynamicSlider();

function scrollDynamicSlider () {
  var scrollItemWrap = document.getElementById( 'decoDynamicSlider' );
  var scrollChildItem = scrollItemWrap.querySelector('.decoration__dynamic-slider');

  window.addEventListener( "scroll", function () {
    var scrollPercentageChild = getScrollPercentage( scrollChildItem, 0, 0.5 );

    var posChild = 100 - scrollPercentageChild * 100;
    var sizeChild = scrollPercentageChild;

    scrollChildItem.style.transform = 'translateY(' + posChild + '%) scale(' + sizeChild + ')';


    // if ( scrollPercentageChild2 === 1 ) {
    //   scrollChildItems[1].classList.add( 'active' );
    // } else {
    //   scrollChildItems[1].classList.remove( 'active' );
    // }
  });
}