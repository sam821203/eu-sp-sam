import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { isNeedSlider } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'

export var initPromo = [
  setInterval( function () { chooseRandomPromoItem() }, 1000 ),
  timeCheck (),
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

function sliderPromoReady() {
  var sliderPromo = new Swiper('#sliderPromo', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    direction: 'vertical',
    effect : 'flip',
    flipEffect: {
      slideShadows : false,
      limitRotation : true,
    },
    // grabCursor: true,
    init: isNeedSlider('#sliderPromo', 1),
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderPromo .swiper-slide').length),
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
    speed: 600,
    // watchSlidesProgress : true,
    // watchSlidesVisibility : true,
  })
}

function timeCheck () {
  var dateNow = new Date();
  var checkPoint = new Date('2021/6/19 00:00');
  var arrayPromoItem = Array.apply( null, document.querySelectorAll( '#promoEvent .js-time-check' ) );
  arrayPromoItem.forEach( function ( el, index, thisArray ) {
    if ( dateNow >= checkPoint ) {
      thisArray[2].style.display = 'none';
      thisArray[3].style.display = 'none';
      thisArray[6].style.display = 'none';
      thisArray[7].style.display = 'none';
    } else {
      thisArray[0].style.display = 'none';
      thisArray[1].style.display = 'none';
      thisArray[4].style.display = 'none';
      thisArray[5].style.display = 'none';
    }
  });
}