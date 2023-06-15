import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'

export var initPromo = [
  setInterval( function () { chooseRandomPromoItem() }, 2000 ),
  detectApp( window.addEventListener( 'load', promoEventReady ), promoEventReady ),
  // promoEventReady(),
];

function chooseRandomPromoItem() {
  var promoItems = Array.apply( null, document.querySelectorAll( '.promo__block .promo__item' ) );
  // console.log(promoItems);

  var chooseItemIndex = siblingRandom( promoItems.length );
  // console.log(chooseItemIndex);

  promoItems.forEach( function (item) {
    // arrayAnimationClass.forEach( function (className) {
      item.classList.remove( "animate" );
    // } );
  });
  promoItems[chooseItemIndex].classList.add("animate");

}

function promoEventReady () {
  var promoEvent = new Swiper('#promoEvent', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // grabCursor: true,
    // init: isNeedSlider('#dailySliderBlock', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    loop: true,
    slidesPerView: 1,
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    // slidesPerColumnFill : 'row',
    speed: 600,
  })
  // console.log(promoEvent);
  return promoEvent
}