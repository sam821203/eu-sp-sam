import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { makeLink } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'

export var initPromo = [
  setInterval( function () { chooseRandomPromoItem() }, 2200 ),
  detectApp( window.addEventListener( 'load', promoEventReady ), promoEventReady ),
  promoEventReady(),
  changeEventLink(),
];

function chooseRandomPromoItem() {
  var promoItems = Array.apply( null, document.querySelectorAll( '.promo__block .promo__item' ) );
  // console.log(promoItems);

  var chooseItemIndex = siblingRandom( promoItems.length );
  // console.log(chooseItemIndex);

  promoItems.forEach( function (item) {
      item.classList.remove( "sand-flash-shake" );
  });
  promoItems[chooseItemIndex].classList.add("sand-flash-shake");
}

function promoEventReady () {
  var promoSliders = document.querySelectorAll( '.container--promo-event' );
  promoSliders.forEach( function ( el ) {
    var thisSlideItemsLength = el.querySelectorAll( '.swiper-slide' ).length;
    var sliderPromo = new Swiper(el, {
      autoplay: {
        delay: 1800 + Math.floor(Math.random() * 500),
        disableOnInteraction: false,
        // reverseDirection: true,
      },
    grabCursor: true,
    init: thisSlideItemsLength > 1 ? true : false,
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    // loop: true,
    slidesPerView: 1,
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    // slidesPerColumnFill : 'row',
    speed: 500 + Math.floor(Math.random() * 200),
  })
    return sliderPromo;
  });

}

function changeEventLink() {
  var changeEventLink = document.getElementById('changeEventLink');
  var webLink = 'https://www.surveycake.com/s/Azzry';
  var mobileLink = 'https://www.surveycake.com/s/Azzry';
  var appLink = 'etmall://open?pgid=45&url=https%3A%2F%2Fwww.surveycake.com%2Fs%2FAzzry';
  
  var targetLink = makeLink(960, appLink, webLink, mobileLink);
  changeEventLink.href = targetLink;
}