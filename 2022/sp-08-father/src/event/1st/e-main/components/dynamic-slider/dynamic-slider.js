import Swiper from "swiper/swiper-bundle.min.js";
import dailyObject from "event/1st/e-main/pages/index/index-start-time.js";
import { buildDynamicAutoSync } from "utils/js/build-dynamic-by-number.js";
// import { buildByCustomTime } from 'utils/js/build-time.js'
// import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from "utils/js/scroll.js";
import { detectApp } from "utils/js/detect.js";
import { isNeedSlider } from "utils/js/detect.js";

export var initDynamicSlider = [
  buildDynamicSliderContent(),
  ScrollDynamicSlider(),
];

function buildDynamicSliderContent() {
  var swiperWrapper = document.querySelector(
    "#dynamicSliderBlock .swiper-wrapper"
  );

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSlider.forEach(function (el, index) {
    // 每組陣列包進外層li裡，每次輪播動一組
    var dynamicItemWrap = document.createElement("li");
    // 下方取值的時候先拿掉了swiper-slide，改加在外層
    dynamicItemWrap.classList.add("swiper-slide");

    // var sliderChild = buildDynamicAutoSync( el, {
    //   isSliderLazyLoad: false,
    // } );

    // 第二層迴圈是要抓每個{}的值
    el.forEach(function (item) {
      var sliderChild = buildDynamicAutoSync(item, {
        isSliderLazyLoad: false,

        // 拿掉底層預設的li和class，把product--dynamic改包在dynamic__item裡
        isSlider: false,
        outerTag: "div",
        outerClass: "dynamic__item",
      });

      // 把dynamic__item加在dynamicItemWrap裡
      dynamicItemWrap.appendChild(sliderChild);

      // var dynamicItemStyle = document.querySelector( '.dynamic__item' );

      // dynamicItemStyle.classList.add('item--before');
    });

    swiperWrapper.appendChild(dynamicItemWrap);
  });
  dynamicSliderReady();
}

// function dynamicSliderReady() {
//   var dynamicSlider = new Swiper('#dynamicSliderBlock', {
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
//     // grabCursor: true,
//     // init: isNeedSlider('#dailySliderBlock', 3),
//     // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
//     // lazy: {
//     //   loadPrevNext: true,
//     // },
//     // loop: true,
//     slidesPerView: 3,
//     // spaceBetween: "1%",
//     slidesPerGroup: 3,
//     slidesPerColumn : 2,
//     slidesPerColumnFill : 'row',
//     speed: 600,
//   })
//   return dynamicSlider
// }

function dynamicSliderReady() {
  var dynamicSlider = new Swiper("#dynamicSliderBlock", {
    // allowTouchMove: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    speed: 800,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
  return dynamicSlider;
}

// 滾動物件
function ScrollDynamicSlider() {
  var scrollItem = document.getElementById("decorDynamicSlider");
  var scrollItem2 = document.getElementById("decorDynamicSlider2");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.5);
    var pos = 75 + scrollPercentage * -75;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = "translateY(" + pos + "%)";
    scrollItem2.style.transform = "translateY(-" + pos + "%)";
    scrollItem.style.opacity = value;
    scrollItem2.style.opacity = value;

    // scrollItem2.style.transformOrigin = "bottom";
    // scrollItem2.style.transform = "translateY(" + pos + "%)";
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem2.style.transform = " scale(" + value + ")";
    // scrollTitle.style.transformOrigin = 'bottom';

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
      scrollItem2.classList.add("active");
      // scrollItem2.style.transformOrigin = "center";
    } else {
      scrollItem.classList.remove("active");
      scrollItem2.classList.remove("active");
      // scrollItem2.style.transformOrigin = "bottom";
    }
  });
}
