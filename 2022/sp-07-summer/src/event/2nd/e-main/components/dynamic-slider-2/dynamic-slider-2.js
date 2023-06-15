// swiper 6.1.2 no IE
import Swiper from "swiper/swiper-bundle.min.js";
import { isWindowWidth } from "utils/js/detect.js";
import { buildDynamicSliderLiElement } from "utils/js/build-dynamic.js";
// import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { isNeedSlider } from "utils/js/detect.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initSliderDynamic2 = [
  scrollSlider2Section(),
  buildSlider2Content(),
  sliderDynamic2Ready(),
];

// Tab 頁籤
function buildTab() {
  var tabBox = document.getElementById("tabBox");
  var tabItems = Array.apply(null, tabBox.querySelectorAll(".tab__item--top"));
  // console.log(tabItems);
  var tabContentBlock = document.getElementById("tabContentBlock");
  var contentBox = Array.apply(
    null,
    tabContentBlock.querySelectorAll(".content__box")
  );

  // var dateNow = dateCheck() - 1; // change date to zero start
  if (tabItems.length !== contentBox.length) {
    console.error("Tab Item數量與Content Box數量不符");
    return false;
  }

  tabItems.forEach(function (el, index) {
    el.addEventListener("click", function () {
      // console.log('有接!');
      addActive(tabItems, index);
      addActive(contentBox, index);
      // sliderTabReady(index);
    });
  });
  // 初始化輪播(剛load進來預設第一個頁籤active)
  // sliderTabReady();
}

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove("active");
  });
  arrayElementIn[elementIndex].classList.add("active");
}

// 滾動
function scrollSlider2Section() {
  var scrollGhostLeft = document.getElementById("decorSlider2LeftGhost");
  var scrollGhostRight = document.getElementById("decorSlider2RightGhost");

  window.addEventListener("scroll", function () {
    var scrollPercentageGhostLeft = getScrollPercentage(scrollGhostLeft, 0, 0.4);
    var scrollPercentageGhostRight = getScrollPercentage(scrollGhostRight, 0, 0.5);

    var pos = 100 + scrollPercentageGhostLeft * -100;
    var value = scrollPercentageGhostLeft * 1;
    var pos2 = 100 + scrollPercentageGhostRight * -100;
    var value2 = scrollPercentageGhostRight * 1;

    scrollGhostLeft.style.transform =
      " translateX(" +
      pos +
      "%) translateY(" +
      pos / 5 +
      "%) scale(" +
      value +
      ")";
    scrollGhostLeft.style.opacity = value;

    scrollGhostRight.style.transform =
      " translateX(-" +
      pos2 +
      "%) translateY(" +
      pos2 / 5 +
      "%) scale(" +
      value2 +
      ")";
    scrollGhostRight.style.opacity = value2;
    // scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollItem2.style.transform = 'translateY(' + pos + '%) scale('+ value + ')';
    // scrollItem2.style.transformOrigin = 'bottom';

    if (scrollPercentageGhostLeft === 1) {
      scrollGhostLeft.classList.add("active");
    } else {
      scrollGhostLeft.classList.remove("active");
    }
    if (scrollPercentageGhostRight === 1) {
      scrollGhostRight.classList.add("active");
    } else {
      scrollGhostRight.classList.remove("active");
    }
  });
}

function buildSlider2Content() {
  if (!dataSlider2) return false;

  var dataArray = [dataSlider2];
  var sliderContainerArray = Array.apply(
    null,
    document.querySelectorAll("#dynamicSliderSection2 .swiper-wrapper")
  );

  sliderContainerArray.forEach(function (item, index) {
    dataArray[index].forEach(function (el) {
      var sliderChild = buildDynamicSliderLiElement(el);

      item.appendChild(sliderChild);
    });
  });
}

function sliderDynamic2Ready(nowDateIndex) {
  // 保險機制，用來防止沒填變數的 undefined / null 等突發狀況時，輪播不會壞掉
  var nowDateIndex = nowDateIndex || 0;
  var sliderDynamic = new Swiper("#dynamicSliderSection2", {
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    grabCursor: true,
    init: isNeedSlider("#dynamicSliderSection2", 1),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dynamicSliderSection .swiper-slide').length),
    initialSlide: nowDateIndex + 1,
    lazy: {
      loadPrevNext: true,
    },
    // loop: true,
    // navigation: {
    //   nextEl: '#sliderDynamic2Next',
    //   prevEl: '#sliderDynamic2Prev',
    // },
    // pagination: {
    //   el: '#sliderDynamic2Pager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    // slidesPerGroup: 3,
    // centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: "3%",
    speed: 600,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
}
