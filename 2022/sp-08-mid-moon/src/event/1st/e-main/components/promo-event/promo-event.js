import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { makeLink } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'

export var initPromo = [
  setInterval( function () { chooseRandomPromoItem() }, 1800 ),
  // detectApp( window.addEventListener( 'load', promoEventReady ), promoEventReady ),
  promoEventReady(),
  // ScrollPromoEvent(),
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
  var promoSliders = document.querySelectorAll( '.container--promo-event' );

  promoSliders.forEach( function ( el ) {
    var thisSlideItemsLength = el.querySelectorAll( '.swiper-slide' ).length;
    var sliderPromo = new Swiper(el, {
      autoplay: {
        delay: 1800 + Math.floor(Math.random() * 500),
        disableOnInteraction: false,
      },
    grabCursor: true,
    init: thisSlideItemsLength > 1 ? true : false,
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    loop: true,
    slidesPerView: 1,
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    // slidesPerColumnFill : 'row',
    speed: 500 + Math.floor(Math.random() * 200),
  })
    return sliderPromo;
  });

}

// 滾動
function ScrollPromoEvent() {
  var scrollItem = document.getElementById( 'decorPromoEvent' );
  var scrollItem2 = document.getElementById( 'decorBottomLeft' );
  var scrollItem3 = document.getElementById( 'decorBottomRight' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );
    // var pos = 100 + scrollPercentage * -100;
    // scrollItem.style.transform = 'translateY(' + pos + '%)';

    // var value = scrollPercentage * 1;
    // scrollItem.style.opacity = value;

    if (window.scrollY >= 700) {
      scrollItem2.classList.add("active");
      scrollItem3.classList.add("active");
    }else{
      scrollItem2.classList.remove("active");
      scrollItem3.classList.remove("active");
    }

  });
}