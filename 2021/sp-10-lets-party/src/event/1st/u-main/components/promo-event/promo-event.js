import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { isNeedSlider } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'

export var initPromo = [
  setInterval( function () { chooseRandomPromoItem() }, 3500 ),
  // detectApp( window.addEventListener( 'load', sliderPromoReady ), sliderPromoReady ),
  sliderPromoReady(),
  eventBoxClick(),
];

function chooseRandomPromoItem() {
  var promoItems = Array.apply( null, document.querySelectorAll( '#promoEvent .promo__box' ) );
  // console.log(promoItems);

  var chooseItemIndex = siblingRandom( promoItems.length );
  // console.log(chooseItemIndex);

  promoItems.forEach( (item) => {
    // arrayAnimationClass.forEach( function (className) {
      item.classList.remove( "shakeX" );
    // } );
  });
  promoItems[chooseItemIndex].classList.add("shakeX");

}

function sliderPromoReady() {
  var sliderPromo = new Swiper('#sliderPromo', {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    // direction: 'vertical',
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

function eventBoxClick(el) {
  var itemBox = document.getElementById('itemBoxClick')
  // console.log(itemBox);
  var eventBox = document.getElementById( 'eventBox' );
  // console.log(eventBox);
  var close = document.querySelector('.close');
  itemBox.addEventListener('click', function (e) {
    e.preventDefault();
    // alert('oooo');
    eventBox.classList.add( "active" );
  })

  close.addEventListener('click', function (e) {
    e.preventDefault();
    // alert('oooo');
    eventBox.classList.remove( "active" );
  })

  // itemAnchor.classList.add( 'disabled' );
  // itemPopup.classList.add( 'active' );

  // setTimeout( function () {
  //   itemPopup.classList.remove( 'active' );
  //   itemAnchor.classList.remove( 'disabled' );
  // }, 1000)
}
