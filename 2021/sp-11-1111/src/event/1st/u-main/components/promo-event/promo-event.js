import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'

export var initPromo = [
  // setInterval( function () { chooseRandomPromoItem() }, 1000 ),
  detectApp( window.addEventListener( 'load', sliderPromoReady ), sliderPromoReady ),
];

function chooseRandomPromoItem() {
  var promoItems = Array.apply( null, document.querySelectorAll( '#promoEvent a' ) );
  var arrayAnimationClass = ['animation', 'animation2'];
  var chooseClassIndex = siblingRandom(arrayAnimationClass.length, 'siblingRandomCheckPromoAnimationIndex');
  var chooseItemIndex = siblingRandom( promoItems.length );

  promoItems.forEach( function ( item ) {
    arrayAnimationClass.forEach( function (className) {
      item.classList.remove( className );
    } );
  } );
  promoItems[chooseItemIndex].classList.add( arrayAnimationClass[chooseClassIndex] );
  // console.log(chooseItemIndex, chooseClassIndex);

}

function sliderPromoReady () {
  var sliders = Array.apply( null, document.querySelectorAll( '#promoEvent .swiper-container' ) );

  sliders.forEach( function ( el ) {
    var thisSlideItemsLength = el.querySelectorAll( '.swiper-slide' ).length;
    var slider = new Swiper( el, {
      autoplay: {
        delay: 1800 + Math.floor(Math.random() * 500),
        disableOnInteraction: false,
        reverseDirection: true,
      },
      init: thisSlideItemsLength > 1 ? true : false,
      initialSlide: Math.floor(Math.random() * thisSlideItemsLength),
      loop: true,
      speed: 500 + Math.floor(Math.random() * 200),
    });
  });

}