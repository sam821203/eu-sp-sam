// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import {detectApp} from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
// export var initDynamicSection2 = sliderMidMoreReady();


// import {isNeedSlider} from 'utils/js/detect.js'

export var initBnSection2 = [
  scrollBnSection2(),
];

// 滾動
function scrollBnSection2() {
  var scrollItem = document.getElementById( 'decorBnSection2' );
  // var scrollTitle = document.getElementById( 'titleAnnualAward');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}