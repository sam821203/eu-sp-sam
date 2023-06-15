import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'

export var initRandomW3m3 = [
  setInterval(function() {chooseRandomW3M3Item()}, 4500),
  ScrollEventW3M3(),
];

function chooseRandomW3M3Item() {
  var w3m3Items = Array.apply( null, document.querySelectorAll( '#w3m3Wrap a' ) );
  var arrayAnimationClass = ['active', 'active'];
  var chooseClassIndex = siblingRandom( arrayAnimationClass.length, 'siblingRandomCheckW3M3AnimationIndex' );
  var chooseItemIndex = siblingRandom( w3m3Items.length );

  w3m3Items.forEach( function ( item ) {
    arrayAnimationClass.forEach( function (className) {
      item.classList.remove( className );
    } );
  } );
  w3m3Items[chooseItemIndex].classList.add( arrayAnimationClass[chooseClassIndex] );
}

// 滾動
function ScrollEventW3M3() {
  var scrollItem = document.getElementById( 'decorEventW3M3Left' );
  var scrollTitle = document.getElementById( 'titleEventW3m3');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollTitle, 0, .2 );
    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
    }
  });
}