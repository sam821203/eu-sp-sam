import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'

export var initRandomW3m3 = [
  setInterval(function() {chooseRandomW3M3Item()}, 1000),
  ScrollEventW3M3(),
];

function chooseRandomW3M3Item() {
  var w3m3Items = Array.apply( null, document.querySelectorAll( '#w3m3Wrap a' ) );
  var arrayAnimationClass = ['active', 'active'];
  var chooseClassIndex = siblingRandom( arrayAnimationClass.length, 'siblingRandomCheckW3M3AnimationIndex' );
  var chooseItemIndex = siblingRandom( w3m3Items.length );
  // console.log(chooseItemIndex);

  w3m3Items.forEach( function ( item ) {
    arrayAnimationClass.forEach( function (className) {
      item.classList.remove( className );
    } );
  } );
  w3m3Items[chooseItemIndex].classList.add( arrayAnimationClass[chooseClassIndex] );
  // console.log(chooseItemIndex, chooseClassIndex);

}

// 滾動
function ScrollEventW3M3() {
  var scrollItem = document.getElementById( 'decorEventW3M3' );
  // var scrollTitle = document.getElementById( 'DynamicSliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}