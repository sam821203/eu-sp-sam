import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initSliderW2M2 = [
  sliderW2M2Ready(),
  scrollSliderW2M2(),
];

function sliderW2M2Ready() {
  var sliderW2M2Item = document.querySelector( '#sliderW2M2Item' );

  var thisSlideItemsLength = sliderW2M2Item.querySelectorAll( '.swiper-slide' ).length;
  var sliderW2M2Item = new Swiper('#sliderW2M2Item', {
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    grabCursor: true,
    // centeredSlides: true,
    // effect: "flip",
    // flipEffect: {
    //   slideShadows: false,
    // },
    // slidesPerView: "auto",
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderW2M2Item .swiper-slide').length),
    init: thisSlideItemsLength > 1 ? true : false,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    spaceBetween: '1%',
    slidesPerView: 2,
    // slidesPerGroup: 1,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return sliderW2M2Item;
}

// 滾動
function scrollSliderW2M2() {
  var scrollTitle = document.getElementById( 'decorW2M2Title');
  var scrollItem = document.getElementById( 'decorW2M2Item' );
  var scrollItem2 = document.getElementById( 'decorW2M2Right' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );
    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollTitle.style.transform = 'translateY(' + pos + '%)';
    scrollTitle.style.opacity = value;

    scrollItem.style.transformOrigin = 'top';
    // scrollItem2.style.transformOrigin = 'center';
    // scrollItem.style.transform = ' scale(' + value + ')';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}