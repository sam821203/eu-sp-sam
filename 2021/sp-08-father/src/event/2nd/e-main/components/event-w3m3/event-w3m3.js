import { siblingRandom } from 'utils/js/build-random.js'

export var initRandomW3m3 = [
  setInterval(function() {chooseRandomW3M3Item()}, 1000),
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
