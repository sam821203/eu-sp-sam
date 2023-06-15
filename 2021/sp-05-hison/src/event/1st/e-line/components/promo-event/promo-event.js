// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { detectApp } from 'utils/js/detect.js'
import { isNeedSlider } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'

export var initPromo = [
  setInterval(function() {chooseRandomPromoItem ()}, 1000),
  detectApp( window.addEventListener( 'load', sliderPromoReady ), sliderPromoReady ),
];

function chooseRandomPromoItem () {
  var promoItems = Array.apply( null, document.querySelectorAll( '#promoEvent li' ) );
  var arrayAnimationClass = ['animation', 'animation'];
  var chooseClassIndex = siblingRandom(arrayAnimationClass.length, 'siblingRandomCheckAnimationIndex');
  var chooseItemIndex = siblingRandom( promoItems.length );

  promoItems.forEach( function ( item ) {
    arrayAnimationClass.forEach( function (className) {
      item.classList.remove( className );
    } );
  } );
  promoItems[chooseItemIndex].classList.add( arrayAnimationClass[chooseClassIndex] );
  // console.log(chooseItemIndex, chooseClassIndex);
}

function sliderPromoReady() {
  var sliderPromo = new Swiper('#sliderPromo', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    init: isNeedSlider('#sliderPromo', 1),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderPromo .swiper-slide').length),
    loop: true,
    navigation:  {
      nextEl: '#sliderPromoNext',
      prevEl: '#sliderPromoPrev',
    },
    // pagination: {
    //   el: '#sliderPromoPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    // slidesPerView: 3,
    // slidesPerGroup: 3,
    // spaceBetween: '1.5%',
    speed: 600,
    // watchSlidesProgress : true,
    // watchSlidesVisibility : true,
  })
}
