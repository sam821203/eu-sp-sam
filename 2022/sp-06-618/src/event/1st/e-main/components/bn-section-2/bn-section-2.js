// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import {detectApp} from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
import { siblingRandom } from 'utils/js/build-random.js'

// export var initDynamicSection2 = sliderMidMoreReady();


// import {isNeedSlider} from 'utils/js/detect.js'

export var initBnSection2 = [
  // setInterval( function () { chooseRandomBnItem() }, 2000 ),
  scrollBnSection2(),
];


// 隨機跳動
function chooseRandomBnItem() {
  var promoItems = Array.apply( null, document.querySelectorAll( '#bnSectionSecond .promo__box' ) );
  // console.log(promoItems);

  var chooseItemIndex = siblingRandom( promoItems.length );
  // console.log(chooseItemIndex);

  promoItems.forEach( function (item) {
    // arrayAnimationClass.forEach( function (className) {
      item.classList.remove( "shakeX" );
    // } );
  });
  promoItems[chooseItemIndex].classList.add("shakeX");

}

// 滾動
function scrollBnSection2() {
  var scrollItem = document.getElementById( 'decorBnSection2Wing' );
  var scrollItem2 = document.getElementById( 'decorBnSection2Left' );
  var scrollTitle = document.getElementById( 'titleBnSection2');
  // var promoItems = Array.apply( null, document.querySelectorAll( '.promo__group--bn-section-2 .decor__item' ) );
  // console.log(promoItems);

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 50 + scrollPercentage * -50;
    var pos2 = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translateX(-' + pos + '%) scale(' + value + ')';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollTitle.style.transform = 'translateY(' + pos2 + '%) scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    scrollTitle.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // console.log(scrollPercentage);
    // if ( scrollPercentage >= 0.35 ) {
    //   scrollTitle.classList.add( 'active' );
    // } else {
    //   scrollTitle.classList.remove( 'active' );
    // }
  });
}