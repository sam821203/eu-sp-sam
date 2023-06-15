// swiper 6.1.2 no IE
import Swiper from "swiper/swiper-bundle.min.js";
import { getScrollPercentage } from "utils/js/scroll.js";

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { detectApp } from "utils/js/detect.js";
import { isNeedSlider } from "utils/js/detect.js";
import { buildDynamicAutoSync } from "utils/js/build-dynamic-by-number.js";

export var initBnSection = [
  // bnSectionReady(),
  scrollBnSection(),
];

function bnSectionReady() {
  var bnSection = new Swiper("#bnSection", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      // reverseDirection: true,
    },
    // grabCursor: true,
    initialSlide: Math.floor(
      Math.random() *
        document.querySelectorAll("#bnSection .swiper-slide").length
    ),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: "1%",
    speed: 600,
  });

  return bnSection;
}

// 滾動
function scrollBnSection() {
  var scrollItem = document.getElementById("decorBnSectionBg");
  // var promoItems = Array.apply( null, document.querySelectorAll( '.promo__group--bn-section-2 .decor__item' ) );

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.4);

    var pos = 40 + scrollPercentage * -40;
    // var pos2 = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    // scrollItem2.style.transform = 'translateX(-' + pos + '%) scale(' + value + ')';
    scrollItem.style.transform = "translateY(" + pos + "%)";

    // scrollItem.style.transformOrigin = 'bottom';
    // scrollTitle.style.transform = 'translateY(' + pos2 + '%) scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    // scrollTitle.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // console.log(scrollPercentage);
    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
    }
  });
}
