// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import {detectApp} from 'utils/js/detect.js'
// import { getScrollPercentage } from 'utils/js/scroll.js'
import { siblingRandom } from 'utils/js/build-random.js'

// export var initDynamicSection2 = sliderMidMoreReady();


// import {isNeedSlider} from 'utils/js/detect.js'

export var initBnSection2 = [
  setInterval( function () { chooseRandomBnItem() }, 2000 ),
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
