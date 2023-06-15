import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'

export var initEventW3m3 = [
  setInterval(function() {chooseRandomW3M3Item()}, 1000),
];

function chooseRandomW3M3Item() {
  var w3m3Items = Array.apply( null, document.querySelectorAll( '#w3m3Wrap a' ) );
  var chooseItemIndex = siblingRandom( w3m3Items.length, 'siblingCheckW3M3AnimationIndex' );
  // console.log(chooseItemIndex);

  w3m3Items.forEach( function ( item ) {
    item.classList.remove( 'active' );
  } );
  w3m3Items[chooseItemIndex].classList.add( 'active' );

}

// 滾動
export var initScrollEventW3M3 = ScrollEventW3M3();

function ScrollEventW3M3() {
  var scrollItem = document.getElementById( 'decorEventW3M3' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, 0.5 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateX(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}