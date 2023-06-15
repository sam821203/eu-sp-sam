// swiper 6.1.2 no IE
import Swiper from "swiper/swiper-bundle.min.js";
import { getScrollPercentage } from "utils/js/scroll.js";

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { detectApp } from "utils/js/detect.js";
import { isNeedSlider } from "utils/js/detect.js";
import { buildDynamicAutoSync } from "utils/js/build-dynamic-by-number.js";
import { laterDateHide } from "utils/js/detect.js";
import { laterDateShow } from "utils/js/detect.js";

export var initBnSection = [
  // bnSectionReady(),
  scrollBnSection(),
  buildBnSectionTime(),
];

function buildBnSectionTime() {
  laterDateHide("2023/01/21 00:00:00", "#bnSectionDate1");
  laterDateShow("2023/01/21 00:00:00", "#bnSectionDate2");
  laterDateHide("2023/01/25 00:00:00", "#bnSectionDate2");
  laterDateShow("2023/01/25 00:00:00", "#bnSectionDate3");
}

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
    // pagination: {
    //   el: '#sliderBnPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 1,
    spaceBetween: "1%",
    speed: 600,
  });

  return bnSection;
}

// 滾動
function scrollBnSection() {
  var scrollItem = document.getElementById("decorBnSectionLeft");
  var scrollItem2 = document.getElementById("decorBnSectionRight");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.5);

    var pos = 120 + scrollPercentage * -120;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem.style.transform =
      "translateX(-" + pos + "%) scale(" + value + ")";
    scrollItem2.style.transform =
      "translateX(" + pos + "%) scale(" + value + ")";
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem2.style.transformOrigin = 'bottom';

    if (scrollPercentage == 1) {
      scrollItem.classList.add("active");
      scrollItem2.classList.add("active");
      // scrollItem3.classList.add( 'active' );
    } else {
      scrollItem.classList.remove("active");
      scrollItem2.classList.remove("active");
      // scrollItem3.classList.remove( 'active' );
    }
  });
}
