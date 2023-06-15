import { getScrollPercentage } from 'utils/js/scroll.js'

export var initScrollDynamicSliderHalf = scrollDynamicSliderHalf();

function scrollDynamicSliderHalf () {
  var scrollItem = document.getElementById( 'decoDynamicSliderHalf' );
  var scrollChildItem = scrollItem.querySelector('.decoration__dynamic-slider');
  // var scrollChildItem = Array.apply( null, document.querySelectorAll( '.decoration__dynamic-slider' ) )
  var scrollChildItemSec = scrollItem.querySelector('.decoration__dynamic-slider2');


  // scrollChildItem.forEach( function(){
    
    // })
  window.addEventListener( "scroll", function () {
    var scrollPercentageChild = getScrollPercentage( scrollChildItem, 0, 0.5 );

    var posChild = 100 - scrollPercentageChild * 100;
    var sizeChild = scrollPercentageChild;

    scrollChildItem.style.transform = 'translateY(' + posChild + '%) scale(' + sizeChild + ')';

    var scrollPercentageChildSec = getScrollPercentage( scrollChildItemSec, 0, 0.5 );

    var posChildSec = 100 - scrollPercentageChildSec * 100;
    var sizeChildSec = scrollPercentageChildSec;

    scrollChildItemSec.style.transform = 'translateY(' + posChildSec + '%) scale(' + sizeChildSec + ')';


    // if ( scrollPercentageChild2 === 1 ) {
    //   scrollChildItems[1].classList.add( 'active' );
    // } else {
    //   scrollChildItems[1].classList.remove( 'active' );
    // }
  });
}