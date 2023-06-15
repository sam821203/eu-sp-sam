import Swiper from "swiper/swiper-bundle.min.js";
import { detectApp } from "utils/js/detect.js";
import { getScrollPercentage } from "utils/js/scroll.js";
// import { makeParallaxDefault } from 'utils/js/parallax-scroll.js'
export var initHero = [
  scrollBackGround(),
  // heroItemReady(),
  // backGroundPosition(),
];

function backGroundPosition() {
  var bgWeb = document.querySelector('.bg-web');
  // console.log(bgWeb);
  if (window.scrollY > window.innerHeight){
    bgWeb.style.backGroundPositionY = '-700px';
  }
}

function heroItemReady() {
  var heroItem = new Swiper("#heroTitle", {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    direction: "vertical",
    effect: "flip",
    flipEffect: {
      slideShadows: false,
      limitRotation: true,
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
  });
  return heroItem;
}

// 滾動
function scrollBackGround() {
  // var scrollTarget = document.getElementById("scrollBackGround");
  // var scrollItem = document.getElementById("scrollHeroItem");
  var scrollItem = document.getElementById( 'decorPromoCloak' );
  var scrollDecorEtcat = document.getElementById("decorEtcat");
  var scrollDecorEtman = document.getElementById("decorEtman");
  var scrollDecorFrame = document.getElementById("decorFrame");
  var decorCloud = document.getElementById("decorCloud");
  var decorPromoEvent = document.getElementById("decorPromoEvent");
  var currentWidth = window.innerWidth;

  window.addEventListener("scroll", function () {
    var scrollEl = currentWidth > 959 ? scrollItem : decorPromoEvent;
    var scrollPercentage = getScrollPercentage(scrollEl, 0, 0.2);
    if (scrollPercentage === undefined) {
      scrollPercentage = 0;
    }

    // var scrollPercentage2 = getScrollPercentage(decorCloud1, 0, 0.6);
    // var windowWidth = window.innerWidth;
    // var scrollPosition = window.pageYOffset;
    // var sizeNumber = (2560 - windowWidth) * 0.03;
    // if (typeof scrollPercentage == "undefined") {
    //   scrollPercentage = 0;
    // }

    var pos = 100 + scrollPercentage * -100;
    // var pos2 = 100 + scrollPercentage2 * -100;
    // var pos = scrollPercentage * (115 + sizeNumber);
    // var value = scrollPercentage * 1;
    var value2 = 1 + (scrollPercentage * (currentWidth > 959 ? 0.3 : 0.2));
    // console.log( currentHeight * scrollPercentage / 10000);
    // if (windowWidth < 960) {
    //   pos = 100;
    // } else {
    //   if (scrollPosition >= 2000) {
    //     pos = 115 + sizeNumber;
    //   }
    // }
    // scrollItem.style = "background-position:" + pos + "%";
    scrollDecorFrame.style.transform = "translateY(-" + (pos / 14) + "vw)";
    decorCloud.style.transform = ' scale(' + value2 + ')';
    // scrollItem.style.transform = 'background-size:' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    // decorClouds.style.transformOrigin = 'top ';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage >= 1 ) {
    //   scrollItem.style = 'background-size: 130%';
    // }

    if ( scrollPercentage === 1 ) {
      scrollDecorEtcat.classList.add( 'active' );
      scrollDecorEtman.classList.add( 'active' );
    } 
    // else {
    //   scrollDecorEtcat.classList.remove( 'active' );
    // }
  });
}
