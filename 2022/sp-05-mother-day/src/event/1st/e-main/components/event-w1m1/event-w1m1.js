import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'

export var initRandomW1m1 = [
  // setInterval(function() {chooseRandomW1M1Item()}, 1500),
  ScrollEventW1M1(),
];

function chooseRandomW1M1Item() {
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
function ScrollEventW1M1() {
  var scrollTitle = document.getElementById( 'titleEventW1M1');
  var scrollItem = document.getElementById( 'decorEventW1M1' );
  var scrollItem2 = document.getElementById( 'decorEventW1M1Sec' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollTitle.style.transform = 'translateY(' + pos + '%)';
    scrollItem.style.transform = 'translateX(' + pos + '%)';
    scrollItem2.style.transform = 'translateX(-' + pos + '%)';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    scrollItem2.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}