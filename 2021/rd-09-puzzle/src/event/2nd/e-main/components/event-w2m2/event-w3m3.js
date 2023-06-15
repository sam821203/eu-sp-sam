import { siblingRandom } from 'utils/js/build-random.js'

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
