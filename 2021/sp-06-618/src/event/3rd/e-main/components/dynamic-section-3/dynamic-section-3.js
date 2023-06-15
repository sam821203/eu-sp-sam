// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

export var initDynamicSection3 = buildContent();

function buildContent(){
  var dynamicSection3 = document.querySelector( '#dynamicSection3 .product__wrap' );

  dataDynamicSection3.forEach(function(el){
    var dataChild = buildDynamicAutoSync( el, {
      outerTag: 'div',
      isSlider: false,
    });

    dynamicSection3.appendChild(dataChild);
  });
}
