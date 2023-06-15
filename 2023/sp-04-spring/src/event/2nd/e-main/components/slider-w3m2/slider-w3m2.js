import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initSliderW3M2 = [
  sliderW3M2Ready(),
  scrollSliderW3M2(),
];

function sliderW3M2Ready() {
  var randomSlideW3M2 = Math.floor(Math.random() * document.querySelectorAll('.gallery-tab .swiper-slide').length);


  var galleryTab = new Swiper('.gallery-tab', {
    autoplay: {
      delay: 1800 + Math.floor(Math.random() * 500),
      disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 4,
    initialSlide: randomSlideW3M2,
    slidesPerView: 2,
    spaceBetween: 10,
    // freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
      960: {  //当屏幕宽度大于等于320
        direction: 'vertical',
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
    // watchSlidesProgress : true,
    // watchSlidesVisibility : true,
  } )

  var galleryItem = new Swiper('.gallery-item', {
    // centeredSlides: true,
    // slidesPerView: 1,
    // slidesPerGroup : 1,
    initialSlide: randomSlideW3M2,
    loop: true,
    loopedSlides: 4,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    // thumbs: {
    //   swiper: galleryTab,
    // },
    // watchSlidesProgress : true,
    // watchSlidesVisibility : true,
  });
  
  // return galleryItem;
  galleryItem.controller.control = galleryTab;
  galleryTab.controller.control = galleryItem;
}


// 滾動
function scrollSliderW3M2() {
  var scrollItem = document.getElementById( 'decorW3M2Left' );
  var scrollTitle = document.getElementById( 'decorW3M2Title');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .4 );

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';

    if ( scrollPercentage === 1 ) {
      scrollTitle.classList.add( 'active' );
    } else {
      scrollTitle.classList.remove( 'active' );
    }
  });
}