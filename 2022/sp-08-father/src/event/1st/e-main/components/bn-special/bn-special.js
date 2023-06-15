import Swiper from "swiper/swiper-bundle.min.js";
import { detectApp } from "utils/js/detect.js";
import { earlyDateHide } from "utils/js/detect.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initSpecialSlider = [
  sliderSpecialPrevReady(),
  sliderSpecialNextReady(),
  // bnSpecialReady(),
  // ScrollBnSpecial(),
];

function bnSpecialReady() {
  // TODO: 不用判斷月份就整區關掉
  // var bnSpecialPromoZone = document.getElementById('bnSpecialPromoZone');
  // var itemPrevArray = Array.apply(null, document.querySelectorAll('#bnSpecial .month--prev'));
  // var itemNextArray = Array.apply( null, document.querySelectorAll( '#bnSpecial .month--next' ) );
  // var checkPoint = new Date( '2021/8/31 23:59:59' );
  // console.log(isLaterThan( checkPoint ));

  // if ( isLaterThan( checkPoint ) ) {
  //   bnSpecialPromoZone.style.backgroundImage = 'url(bg-special-n.png)';

  //   itemPrevArray.forEach( function ( el ) {
  //     el.parentNode.removeChild( el );
  //   } );
  // } else {
  //   bnSpecialPromoZone.style.backgroundImage = 'url(bg-special-p.png)';

  //   itemNextArray.forEach( function ( el ) {
  //     el.parentNode.removeChild( el );
  //   } );
  // }

  // 採用沒到新月份就關掉的方式
  if (!earlyDateHide("2021/9/1 00:00:00", "#bnSpecial")) {
    detectApp(
      window.addEventListener("load", sliderSpecialReady),
      sliderSpecialReady
    );
  }
}

function sliderSpecialPrevReady() {
  var sliderSpecialPrev = new Swiper("#sliderSpecialPrev", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    // grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    slidesPerView: 3,
    // slidesPerGroup: 3,
    speed: 600,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
  return sliderSpecialPrev;
}

function sliderSpecialNextReady() {
  var sliderSpecialNext = new Swiper("#sliderSpecialNext", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    slidesPerView: 1,
    // slidesPerGroup: 3,
    speed: 600,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
  return sliderSpecialNext;
}

// 滾動
function ScrollBnSpecial() {
  var scrollItem = document.getElementById("decorBnSpecial");
  var scrollTitle = document.getElementById("BnSpecialTitle");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.6);

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = "translateY(" + pos + "%)";
    scrollTitle.style.transform = "translateY(" + pos + "%)";

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = "bottom";
    scrollItem.style.transform = " scale(" + value + ")";
    scrollItem.style.opacity = value;
    scrollTitle.style.transformOrigin = "bottom";

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}
