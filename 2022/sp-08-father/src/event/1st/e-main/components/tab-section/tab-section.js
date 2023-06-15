// swiper 6.1.2 no IE
import Swiper from "swiper/swiper-bundle.min.js";
import { isWindowWidth } from "utils/js/detect.js";
import { buildDynamicSliderLiElement } from "utils/js/build-dynamic.js";
// scroll
// import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from "utils/js/scroll.js";

export var initTabSection = [
  // buildContent(),
  buildTab(),
  scrollTabSection(),
];

// 滾動物件
function scrollTabSection() {
  var scrollItem = document.getElementById("tabSectionWallet");
  var scrollItem2 = document.getElementById("tabSectionMoney");
  var scrollItem3 = document.getElementById("tabSectionMoney2");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.4);
    // var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = " scale(" + value + ")";
    scrollItem.style.opacity = value;
    scrollItem2.style.opacity = value;
    scrollItem3.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
      scrollItem2.classList.add("active");
      scrollItem3.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
      scrollItem2.classList.remove("active");
      scrollItem3.classList.remove("active");
    }
  });
}

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

  buildSliderContent();

  tabItems.forEach(function (el, index) {
    // if (index === dateNow) {
    // addActive(tabItems, dateNow);
    // addActive(contentBox, index);
    // }
    // addActive(contentBox, index);

    el.addEventListener("click", function () {
      // console.log('有接!');
      addActive(tabItems, index);
      addActive(contentBox, index);
      sliderTabReady(index);
    });
  });

  // 初始化輪播(剛load進來預設第一個頁籤active)
  sliderTabReady();
}

function addActive(arrayElementIn, elementIndex) {
  arrayElementIn.forEach(function (el) {
    el.classList.remove("active");
  });
  arrayElementIn[elementIndex].classList.add("active");
}

// function dateCheck(){
//   var date = new Date().getDate();
//   return date;
// }

function sliderTabReady(index) {
  var index = index || 0;
  var arrayTabContents = Array.apply(
    null,
    document.querySelectorAll(".tab__slider")
  );

  var sliderTabContents = new Swiper(arrayTabContents[index], {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    // init: !isWindowWidth(960),
    // navigation: isWindowWidth(960) ? {
    //   nextEl: '#sliderTabNext',
    //   prevEl: '#sliderTabPrev',
    // } : false,
    // pagination: {
    //   el: '#sliderTabPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 3,
    slidesPerGroup: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    speed: 600,
  });
}

function buildSliderContent() {
  if (!(dataTab1 && dataTab2 && dataTab3)) return false;

  var dataArray = [dataTab1, dataTab2, dataTab3];
  var sliderContainerArray = Array.apply(
    null,
    document.querySelectorAll("#tabContentBlock .swiper-wrapper")
  );

  sliderContainerArray.forEach(function (item, index) {
    dataArray[index].forEach(function (el) {
      var sliderChild = buildDynamicSliderLiElement(el);

      item.appendChild(sliderChild);
    });
  });
}
