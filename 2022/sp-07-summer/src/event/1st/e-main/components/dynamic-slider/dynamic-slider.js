// swiper 6.1.2 no IE
import Swiper from "swiper/swiper-bundle.min.js";
import dailyObject from "event/1st/e-main/pages/index/index-start-time.js";
import { getScrollPercentage } from "utils/js/scroll.js";
import { detectApp } from "utils/js/detect.js";
import { isNeedSlider } from "utils/js/detect.js";
import { buildDynamicAutoSync } from "utils/js/build-dynamic-by-number.js";
import { sliceArrayByNumber } from "utils/js/handle-array.js";
import { moveActiveToItem } from "utils/js/move-active.js";

export var initSliderDynamic = [buildDailyTime(), scrollDynamicSlider()];

function sliderDynamicReady(nowDateIndex) {
  // 保險機制，用來防止沒填變數的 undefined / null 等突發狀況時，輪播不會壞掉
  var nowDateIndex = nowDateIndex || 0;
  var sliderDynamic = new Swiper("#dynamicSliderSection", {
    grabCursor: true,
    init: isNeedSlider("#dynamicSliderSection", 3),
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
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: "1.5%",
    speed: 600,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  });
}

// 滾動
function scrollDynamicSlider() {
  var scrollDynamicSliderLeft = document.getElementById(
    "decorDynamicSliderLeft"
  );
  var titleDynamicSlider = document.getElementById("titleDynamicSlider");
  var scrollDynamicSliderRight = document.getElementById(
    "decorDynamicSliderRight"
  );

  window.addEventListener("scroll", function () {
    var scrollPercentageLeft = getScrollPercentage(
      scrollDynamicSliderLeft,
      0,
      0.45
    );
    var scrollPercentageTitle = getScrollPercentage(titleDynamicSlider, 0, 0.3);
    var scrollPercentageRight = getScrollPercentage(
      scrollDynamicSliderRight,
      0,
      0.45
    );

    var pos = 250 + scrollPercentageLeft * -250;
    var pos3 = 250 + scrollPercentageRight * -250;

    var value = scrollPercentageLeft * 1;
    var value2 = scrollPercentageTitle * 1;
    var value3 = scrollPercentageRight * 1;

    scrollDynamicSliderLeft.style.transform =
      "translateX(" +
      pos / 2 +
      "%) translateY(" +
      pos / 5 +
      "%) scale(" +
      value +
      ")";
    titleDynamicSlider.style.transform = "scale(" + value2 + ")";
    scrollDynamicSliderRight.style.transform =
      "translateX(-" +
      pos3 +
      "%) translateY(" +
      pos3 / 2.5 +
      "%) scale(" +
      value3 +
      ")";

    scrollDynamicSliderLeft.style.opacity = value;
    titleDynamicSlider.style.opacity = value2;
    scrollDynamicSliderRight.style.opacity = value3;
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';

    if (scrollPercentageLeft === 1) {
      scrollDynamicSliderLeft.classList.add("active");
      scrollDynamicSliderRight.classList.add("active");
    } else {
      scrollDynamicSliderLeft.classList.remove("active");
      scrollDynamicSliderRight.classList.remove("active");
    }
  });
}

function buildDailyTime() {
  // 每日換品的時間移出去外面 (index-start-time.js) 統一設定
  var dailyArray = dailyObject.oneDay;
  var dateNow = new Date();
  dailyArray.forEach(function (date, index, thisArray) {
    // 如果小於當前日期就跳出，畫面上不會顯示出來
    if (dateNow < date) return false;

    // 如果不是最後一天的話就繼續
    if (index != thisArray.length - 1) {
      // 因為最後一天thisArray[index + 1]會變成undefined，因此要先檢查是否最後一天
      // 如果大於當前日期但是小於下一個日期就是目標，因此非目標就跳出
      if (!(dateNow < thisArray[index + 1])) return false;
      buildSliderContent(index);
      addToday(index);
    } else {
      buildSliderContent(index);
      addToday(index);
    }
  });
}

function buildSliderContent(nowDateIndex) {
  var nowDateIndex = nowDateIndex || 0;
  var sliderContainer = document.querySelector(
    "#dynamicSliderSection .swiper-wrapper"
  );
  // 拿取今天的時間 / 月份 / 日期
  var startDay = new Date("2022/7/1 00:00");
  var startMonth = startDay.getMonth() + 1;
  var startDate = startDay.getDate();

  dataDynamicSlider.forEach(function (el) {

    var dateEl = document.createElement("div");
    var dateMonth = document.createElement("div");
    var dateNumber = document.createElement("div");

    dateMonth.classList.add("date__month");
    dateNumber.classList.add("date__number");
    dateEl.classList.add("date__item");
    dateEl.classList.add("date__item--daily");

    // 在節點上塞入日期
    dateMonth.innerHTML = startMonth + "/";
    dateNumber.innerHTML = startDate;
    startDate++;

    dateEl.appendChild(dateMonth);
    dateEl.appendChild(dateNumber);

    var sliderChild = buildDynamicAutoSync(el);
    sliderChild.appendChild(dateEl);
    sliderContainer.appendChild(sliderChild);
  });
  detectApp(
    window.addEventListener("load", function () {
      sliderDynamicReady(nowDateIndex);
    }),
    function () {
      sliderDynamicReady(nowDateIndex);
    }
  );
}

// 當在執行 buildDailyTime 裡的 dateNow 當天時，添加 .today 上去
function addToday(index) {
  var productBox = Array.apply(
    null,
    document.querySelectorAll(".product--dynamic")
  );
  productBox[index].classList.add("today");
}