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
  if (window.scrollY > window.innerHeight) {
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
  var scrollDecorEtcat = document.getElementById("decorEtcat");
  var scrollDecorEtman = document.getElementById("decorEtman");
  var scrollDecorFrame = document.getElementById("decorFrame");
  var scrollCloud = document.getElementById("decorCloud");
  var scrollDetector = document.getElementById("decorDetector");
  var scrollDecorFrame = document.getElementById("decorFrame");
  var scrollTitleMain = document.getElementById("titleMain");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollDetector, 0, 0.5);
    if (scrollPercentage === undefined) {
      scrollPercentage = 0;
    }

    // var scrollPercentage2 = getScrollPercentage(decorCloud1, 0, 0.6);
    // var scrollPosition = window.pageYOffset;
    // var sizeNumber = (2560 - windowWidth) * 0.03;
    // if (typeof scrollPercentage == "undefined") {
    //   scrollPercentage = 0;
    // }

    var pos = scrollPercentage * 100;
    var value2 = 1 + (scrollPercentage * 0.4);
    // if (windowWidth < 960) {
    //   pos = 100;
    // } else {
    //   if (scrollPosition >= 2000) {
    //     pos = 115 + sizeNumber;
    //   }
    // }
    scrollDecorFrame.style.transform = "translateY(" + (pos / 16) + "vw)";
    scrollCloud.style.transform = ' scale(' + value2 + ')';
    scrollTitleMain.style.transform = 'translateY(' + (pos / 16) + 'vw)';

    // scrollFlower.style.transform = "translateY(" + (pos / 14) + "vw)";
    // scrollItem.style.transform = 'background-size:' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    scrollCloud.style.animationFillMode = 'none';
    scrollDecorFrame.style.animationFillMode = 'none';
    scrollTitleMain.style.animationFillMode = 'none';
    // scrollFlower.style.animationFillMode = 'none';
    // decorClouds.style.transformOrigin = 'top ';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage >= 1 ) {
    //   scrollItem.style = 'background-size: 130%';
    // }

    if (scrollPercentage === 1) {
      scrollDecorEtcat.classList.add('active');
      scrollDecorEtman.classList.add('active');
    }
    // else {
    //   scrollDecorEtcat.classList.remove( 'active' );
    // }
  });
}