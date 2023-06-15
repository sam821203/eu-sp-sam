import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { isNeedSlider } from 'utils/js/detect.js'
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
  var promoSliders = document.querySelectorAll( '.container--promo-event' );
  promoSliders.forEach( function ( el ) {
    var thisSlideItemsLength = el.querySelectorAll( '.swiper-slide' ).length;
    var sliderPromo = new Swiper(el, {
      autoplay: {
        delay: 1800 + Math.floor(Math.random() * 500),
        disableOnInteraction: false,
        reverseDirection: true,
      },
      // grabCursor: true,
      init: thisSlideItemsLength > 1 ? true : false,
      initialSlide: Math.floor(Math.random() * thisSlideItemsLength),
      loop: true,
      // navigation:  {
      //   nextEl: '#sliderPromoNext',
      //   prevEl: '#sliderPromoPrev',
      // },
      // pagination: {
      //   el: '#sliderPromoPager',
      //   type: 'bullets',
      //   clickable: true,
      // },
      // slidesPerView: 3,
      // slidesPerGroup: 3,
      // spaceBetween: '1.5%',
      speed: 500 + Math.floor(Math.random() * 200),
      // watchSlidesProgress : true,
      // watchSlidesVisibility : true,
    })
  });

}