// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

export var initDynamicSection2 = buildContent();

function buildContent(){
  var dynamicSection2 = document.querySelector( '#dynamicSection2 .product__wrap' );

  dataDynamicSection2.forEach(function(el){
    var dataChild = buildDynamicAutoSync( el, {
      outerTag: 'div',
      isSlider: false,
    });

    dynamicSection2.appendChild(dataChild);
  });
}
