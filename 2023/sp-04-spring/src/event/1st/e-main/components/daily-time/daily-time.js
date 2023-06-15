// swiper 6.1.2 no IE
import Swiper from "swiper/swiper-bundle.min.js";

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';
import dailyObject from "event/1st/e-main/pages/index/index-start-time.js";
import { moveActiveToItem } from "utils/js/move-active.js";
import { buildDynamicAutoSync } from "utils/js/build-dynamic-by-number.js";
import { buildByCustomTime } from "utils/js/build-time.js";
import { setIntervalFix } from "utils/js/build-time.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initDailyTime = [
  dailyTime(),
  checkTime(),
  scrollDailyTime(),
];

function dailyTime() {
  var dataCheck = dataDailyTime || false;
  if (!dataCheck) return false;

  // 每日換品的時間現在移出去外面統一設定
  // 注意是9點開始換品
  var dailyTimeArray = dailyObject.oneDayNine;

  // setTimeout、setInterval的作用域在window
  // tick = 100毫秒 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，並且搶在變價前更新
  buildByCustomTime(dailyTimeArray, [buildSlider], 100);
}

// 建立當天的dynamic product的slider
function buildSlider(i) {
  var dailyTimeEl = document.querySelector("#dailyTime .product__wrap");

  // 歸零：每天i循環都先清空dailyTimeEl、其內會有各個li，
  // 還必須清除span.swiper-notification，每一次i會產出一個
  // 不要開loop否則要update輪播不然dup會錯
  while (dailyTimeEl.firstChild) {
    dailyTimeEl.removeChild(dailyTimeEl.firstChild);
  }
  // console.log(dataDailyTime);

  dataDailyTime[i].forEach(function (el, index) {
    var dailyTimeChild = buildDynamicAutoSync(el, {
      outerTag: "div",
      isSlider: false,
    });
    buildProductPart(dailyTimeChild);
    dailyTimeEl.appendChild(dailyTimeChild);
  });
}

// 建立dynamic新增的部分：時間
function buildProductPart(el) {
  var elTime = document.createElement("div");

  elTime.classList.add("product__time");
  // console.log(elWrap);
  // elWrap.classList.add("product__time--wrap");
  
  
  el.insertBefore(elTime, el.firstChild);
}

function checkTime() {
  setIntervalFix(function () {
    var hourNow = new Date().getHours();
    var arrayProductTime = Array.apply(
      null,
      document.querySelectorAll(".product__time")
    );

    if (hourNow >= 9 && hourNow < 15) {
      moveActiveToItem(arrayProductTime, 0);
    } else if (hourNow >= 15 && hourNow < 20) {
      moveActiveToItem(arrayProductTime, 1);
    } else {
      moveActiveToItem(arrayProductTime, 2);
    }

  }, 1000);
}

//滾動
function scrollDailyTime() {
  var scrollItem = document.getElementById("decorDailyTimeLeft");
  var scrollItem2 = document.getElementById("decorDailyTimeRight");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.6);

    // var pos = 50 + scrollPercentage * -50;

    var value = scrollPercentage * 1;

    scrollItem.style.transform = "scale(" + value + ")";
    scrollItem2.style.transform = "scale(" + value + ")";


    // scrollItem.style.opacity = value;
    // scrollItem2.style.opacity = value;

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
      scrollItem2.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
      scrollItem2.classList.remove("active");
    }
  });
}
