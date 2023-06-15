import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
// import { ferrisReady } from 'event/1st/e-main/components/hero-section/ferris/ferris.js'
// import { makeParallaxDefault } from 'utils/js/parallax-scroll.js'
export var initHero = [
  // scrollBackGround(),
  // heroItemReady(),
];

function heroItemReady() {
  var heroItem = new Swiper('#heroTitle', {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    direction : 'vertical',
    effect: 'flip',
    flipEffect: {
      slideShadows : false,
      limitRotation : true,
    },
    // grabCursor: true,
    // init: isNeedSlider('#dailySliderBlock', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    loop: true,
    slidesPerView: 1,
    // slidesPerGroup: 3,
    // slidesPerColumn : 2,
    // slidesPerColumnFill : 'row',
    speed: 600,
  })
  return heroItem

}

// 滾動
function scrollBackGround() {
  // var scrollTarget = document.getElementById( 'scrollBackGround' );
  var scrollBottom = document.getElementById( 'scrollHeroBottom');
  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollBottom, 0, .3 );
    var windowWidth = window.innerWidth;
    var scrollPosition = window.pageYOffset;
    var sizeNumber = (2560 - windowWidth) * 0.03;

    if ( typeof scrollPercentage == "undefined"){
      scrollPercentage = 0;
    }
    var pos = scrollPercentage * (115 + sizeNumber);
    var value = scrollPercentage * 1;
    
    if( windowWidth < 960 ){
      pos = 100;
    }else{
      if( scrollPosition >= 2000 ){
        pos = 115 + sizeNumber;
      }
    }
    // scrollBottom.style = 'background-size:'+ pos +'%';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';
    // scrollBottom.style.transform = 'scale(' + pos + '%)';
    // scrollBottom.style.opacity = value;



    // console.log(pos);




    // scrollItem.style.transform = 'background-size:' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage >= 1 ) {
    //   scrollBottom.style = 'background-size: 130%';
    // } 
  });
}