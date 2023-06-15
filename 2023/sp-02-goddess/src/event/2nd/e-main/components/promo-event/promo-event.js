import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { makeLink } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'

export var initPromo = [
  // setInterval( function () { chooseRandomPromoItem() }, 1800 ),
  // detectApp( window.addEventListener( 'load', promoEventReady ), promoEventReady ),
  promoEventReady(),
  changeLink(),
  // ScrollPromoEvent(),
];

function chooseRandomPromoItem() {
  var promoItems = Array.apply( null, document.querySelectorAll( '.promo__block .event__item' ) );
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

  promoSliders.forEach( function ( el, index ) {
    var thisSlideItemsLength = el.querySelectorAll( '.swiper-slide' ).length;
    var sliderPromo = new Swiper(el, {
      autoplay: {
        delay: 1500 + Math.floor(Math.random() * 500),
        disableOnInteraction: false,
      },
      effect: index === 6 ? "normal" : "flip",
      flipEffect: {
        slideShadows: false,
      },
      grabCursor: true,
      init: thisSlideItemsLength > 1 ? true : false,
      loop: true,
      slidesPerView: 1,
      speed: 800 + Math.floor(Math.random() * 200),
    })
    return sliderPromo;
  });

}

function changeLink() {
  var promoChangeLink = Array.apply(null,
    document.querySelectorAll('.js-changeLink'));

  promoChangeLink.forEach(function(el) {
    var webLink = 'https://www.etmall.com.tw/member/taskActivity';
    var mobileLink = 'https://m.etmall.com.tw/member/taskActivity';
    var appLink = 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FTaskActivity&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86';
    var targetLink = makeLink(960, appLink, webLink, mobileLink);
    el.href = targetLink;
  });
}

// 滾動
function ScrollPromoEvent() {
  var scrollItem = document.getElementById( 'promoEventLeft' );
  var scrollItem2 = document.getElementById( 'promoEventRight' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );
    var pos = 100 + scrollPercentage * -100;
    scrollItem.style.transform = 'translateX(' + pos + '%)';
    scrollItem2.style.transform = 'translateX(-' + pos + '%)';

    // var value = scrollPercentage * 1;
    // scrollItem.style.opacity = value;

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
    }
  });
}