// swiper 6.1.2 no IE

import Swiper from "swiper/swiper-bundle.min.js";

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import { detectApp } from "utils/js/detect.js";
import { buildDynamicAutoSync } from "utils/js/build-dynamic-by-number.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initDynamicHalfSlider = [
  buildSliderHalfContent(),
  ScrollDynamicSliderHalf(),
];

function buildSliderHalfContent() {
  var sliderHalfContainer1 = document.querySelector(
    ".sliderDynamicHalf1 .swiper-wrapper"
  );
  var sliderHalfContainer2 = document.querySelector(
    ".sliderDynamicHalf2 .swiper-wrapper"
  );
  var sliderHalfContainer3 = document.querySelector(
    ".sliderDynamicHalf3 .swiper-wrapper"
  );
  // var myCustomWrapper = document.querySelectorAll('.promo__group--dynamic-slider-half .swiper-wrapper');

  dataDynamicHalf1.forEach(function (el) {
    var sliderHalfChild1 = buildDynamicAutoSync(el);
    sliderHalfContainer1.appendChild(sliderHalfChild1);
  });

  dataDynamicHalf2.forEach(function (el) {
    var sliderHalfChild2 = buildDynamicAutoSync(el);
    sliderHalfContainer2.appendChild(sliderHalfChild2);
  });

  dataDynamicHalf3.forEach(function (el) {
    var sliderHalfChild3 = buildDynamicAutoSync(el);
    sliderHalfContainer3.appendChild(sliderHalfChild3);
  });
  // FIXME:detectApp推遲到window load後才載入輪播可能是自動變價失敗原因
  // detectApp( window.addEventListener( 'load', sliderDynamicHalfReady ), sliderDynamicHalfReady );
  sliderDynamicHalfReady();
}

function sliderDynamicHalfReady() {
  var myCustomContainer = document.querySelectorAll(
    ".promo__group--dynamic-slider-half .swiper-container"
  );

  for (var i = 1; i < myCustomContainer.length + 1; i++) {
    var sliderDynamicHalf = new Swiper(".sliderDynamicHalf" + i, {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      autoHeight: true,
      observer: true,
      observeParents: true,
      lazy: {
        loadPrevNext: true,
      },
      loop: true,
      slidesPerView: 2.3,
      spaceBetween: "1%",
      speed: 600,
    });
  }
  return sliderDynamicHalf;
}

// 滾動
function ScrollDynamicSliderHalf() {
  var scrollItem = document.getElementById("dynamicSliderHalfLeft");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.4);
    var pos = 50 + scrollPercentage * -50;

    scrollItem.style.transform = "translateY(" + pos + "%)";

    // var value = scrollPercentage * 1;

    // scrollItem2.style.transform = 'translateX(' + pos2 + '%)';
    // scrollItem2.style.transform = 'translateY(' + pos + '%)';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem2.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if (scrollPercentage === 1) {
    //   scrollItem.classList.add("active");
    // } else {
    //   scrollItem.classList.remove("active");
    // }
  });
}
