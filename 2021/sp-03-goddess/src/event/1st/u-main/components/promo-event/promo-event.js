// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { isMonth } from 'utils/js/detect.js'

export var initPromo = promoReady();

function promoReady() {
  var promoItemLinks = Array.apply( null, document.querySelectorAll( '#promoEvent li a' ) );
  var promoItemImgs = Array.apply( null, document.querySelectorAll( '#promoEvent li img' ) );

  if ( isMonth( 3 ) ) {
    promoItemLinks[0].href = 'https://media.u-mall.com.tw/sp/8237/m/index.html';
    promoItemLinks[2].href = 'https://media.u-mall.com.tw/sp/8237/m/index.html';

    promoItemImgs[0].src = 'promo-1-1.png';
    promoItemImgs[2].src = 'promo-3-1.png';

  }
}