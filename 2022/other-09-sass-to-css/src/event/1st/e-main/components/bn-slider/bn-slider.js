// swiper 6.1.2 no IE
import Swiper from "swiper/swiper-bundle.min.js";
import { getScrollPercentage } from "utils/js/scroll.js";

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { detectApp } from "utils/js/detect.js";
import { earlyDateHide } from "utils/js/detect.js";

export var initBnSlider = [buildBnSlider(), ScrollBnSlider()];

function buildBnSlider() {
  // 採用沒到新月份就關掉的方式
  // 雖然有寫自動判斷開關，但行銷覺得手改比較安心~
  // if ( !earlyDateHide( '2021/9/1 10:00:00', '#bnSlider' ) ) {
  detectApp(window.addEventListener("load", sliderBnReady), sliderBnReady);
  // }
}

function sliderBnReady() {
  var sliderBn = new Swiper("#sliderBn", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      // reverseDirection: true,
    },
    grabCursor: true,
    initialSlide: Math.floor(
      Math.random() *
        document.querySelectorAll("#sliderBn .swiper-slide").length
    ),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    pagination: {
      el: "#sliderBnPager",
      type: "bullets",
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: "1.5%",
    speed: 600,
  });

  return sliderBn;
}

// 滾動
function ScrollBnSlider() {
  var scrollItem = document.getElementById("decorBnSliderLeft");
  var scrollItem2 = document.getElementById("decorBnSliderRight");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.5);

    var pos = 50 + scrollPercentage * -50;
    // var value = scrollPercentage * 1;

    scrollItem.style.transform = "translateY(-" + pos * 1.2 + "%)";
    scrollItem2.style.transform = "translateY(-" + pos * 1.2 + "%)";
    // scrollTitle.style.transform = 'scale(' + value + ')';

    // scrollItem2.style.transform = 'translateX(' + pos2 + '%)';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem2.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollItem2.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    //   scrollItem2.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    //   scrollItem2.classList.remove( 'active' );
    // }
  });
}
