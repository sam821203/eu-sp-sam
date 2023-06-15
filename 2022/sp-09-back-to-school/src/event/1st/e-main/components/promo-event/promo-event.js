import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initPromo = [
  setInterval( function () { chooseRandomPromoItem() }, 1500 ),
  // detectApp( window.addEventListener( 'load', promoEventReady ), promoEventReady ),
  promoEventReady(),
  // scrollPromoEvent(),
];

function chooseRandomPromoItem() {
  var promoItems = Array.apply( null, document.querySelectorAll( '.promo__block .promo__item img' ) );
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
  // var promoSliders = Array.apply( null, document.querySelectorAll( '.container--promo-event' ) );
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

// 滾動
function scrollPromoEvent() {
  var scrollItem = document.getElementById( 'decorPromoEventLeft' );
  var scrollItem2 = document.getElementById( 'decorPromoEventRight' );
  var scrollItem3 = document.getElementById( 'decorPromoEventStar1' );
  var scrollItem4 = document.getElementById( 'decorPromoEventStar2' );
  // var scrollItem3 = document.getElementById( 'decorBnSectionItem' );
  var scrollTitle = document.getElementById( 'titlePromoEvent');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 130 + scrollPercentage * -130;
    var pos2 = 80 + scrollPercentage * -80;
    var value = scrollPercentage * 1;


    scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollItem2.style.transform = 'translateY(' + pos + '%)';
    scrollTitle.style.transform = 'translateY(-' + pos2 + '%) scale(' + value + ')';

    // var value = scrollPercentage * 1;

    // scrollItem.style.transformOrigin = 'bottom';
    scrollItem3.style.transform = ' scale(' + value + ')';
    scrollItem4.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem3.classList.add( 'active' );
    // } else {
    //   scrollItem3.classList.remove( 'active' );
    // }
  });
}