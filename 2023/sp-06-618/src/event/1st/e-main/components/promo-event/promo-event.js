import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { makeLink } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'

export var initPromo = [
  setInterval( function () { chooseRandomPromoItem() }, 2000 ),
  // detectApp( window.addEventListener( 'load', promoEventReady ), promoEventReady ),
  promoEventReady(),
  changeLink(),
  // scrollPromoEvent(),
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
    var thisSlideItemsLength = el.querySelectorAll('.swiper-slide').length;
    var sliderPromo = new Swiper(el, {
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      // effect: index === 2 ? "fade" : "normal",      
      effect: "fade",      
      fadeEffect: {
        crossFade: true,
      },
      grabCursor: true,
      init: thisSlideItemsLength > 1 ? true : false,
      loop: true,
      slidesPerView: 1,
      speed: 1000,
    })
    return sliderPromo;
  });

}

function changeLink() {
  var promoChangeLink = Array.apply(null,
    document.querySelectorAll('.js-change-link'));

  promoChangeLink.forEach(function(el) {
    var webLink = 'https://www.etmall.com.tw/member/taskActivity';
    var mobileLink = 'https://m.etmall.com.tw/member/taskActivity';
    var appLink = 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FTaskActivity&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86';
    var targetLink = makeLink(960, appLink, webLink, mobileLink);
    el.href = targetLink;
  });
}

// 滾動
function scrollPromoEvent() {
  var scrollItem = document.getElementById( 'decorPromoCloak' );
  var scrollItem2 = document.getElementById( 'decorPromoFigure' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );
    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform = 'translate(-' + pos + '%, -' + pos + '%) scale(' + value + ')';
    scrollItem.style.transform = 'scale(' + value + ')';
    scrollItem.style.transformOrigin = '50% 20%';
    scrollItem2.style.transform = 'scale(' + value + ')';
    scrollItem2.style.transformOrigin = '50% 55%';

    // scrollItem.style.opacity = value;
    // scrollItem.style.filter = 'blur(' + (pos / 6) + 'px)';
    // scrollItem2.style.opacity = value;
    // scrollItem2.style.filter = 'blur(' + (pos / 6) + 'px)';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
    }
  });
}