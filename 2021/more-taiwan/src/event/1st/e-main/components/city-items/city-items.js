import {buildProductNumberLink} from 'utils/js/build-link.js'

export var buildCityItems = [
  buildSliderContent(),
  // 因為要取消連帶取消map active，所以改在index處理
  // cancelOverlay(),
];

function buildSliderContent() {
  var sliderContainer = document.querySelector( '#itemSlider .swiper-wrapper' );

  dataTaiwan.forEach( function ( el ) {
    var sliderChild = document.createElement( 'li' );
    var sliderChildLink = document.createElement( 'a' );
    var sliderChildImg = document.createElement( 'img' );

    buildProductNumberLink( el, sliderChildLink );
    sliderChildLink.title = el.zoneName + '的優質產品';
    sliderChildLink.target = '_blank';

    sliderChildImg.src = el.itemImgName;
    sliderChildImg.alt = el.zoneName + '的優質產品';

    sliderChildLink.appendChild( sliderChildImg );
    sliderChild.appendChild( sliderChildLink );
    sliderChild.classList.add( 'swiper-slide' );
    sliderChild.setAttribute( 'data-city', el.zoneName );

    sliderContainer.appendChild(sliderChild);
  } );
}

// function cancelOverlay () {
//   var promoItemsWrap = document.getElementById( 'promoItemsWrap' );
//   var iconCancel = document.getElementById( 'iconCancel' );

//   iconCancel.addEventListener( 'click', function ( e ) {
//     e.stopPropagation();
//     promoItemsWrap.classList.remove( 'active' );
//   } );

//   promoItemsWrap.addEventListener( 'click', function () {
//     promoItemsWrap.classList.remove( 'active' );
//   } );
// }