// swiper 6.1.2 no IE
import Swiper from "swiper/swiper-bundle.min.js";

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';
// import dailyObject from "event/1st/e-main/pages/index/index-start-time.js";
import { buildDynamicAutoSync } from "utils/js/build-dynamic-by-number.js";
import { buildByCustomTime } from "utils/js/build-time.js";
import { getScrollPercentage } from "utils/js/scroll.js";
// import { countDownNumber } from 'utils/js/build-time.js'
import { laterDateHide } from "utils/js/detect.js";
import { laterDateShow } from "utils/js/detect.js";

export var initDailyTime2 = [
  dailyTime2(),
  scrollDailyTime2(),
  buildDailyTime(),
];

function buildDailyTime() {
  laterDateHide("2022/11/9 00:00:00", "#dailyTimeSection");
  laterDateShow("2022/11/9 00:00:00", "#dailyTime2Section");
  laterDateShow("2022/11/12 00:00:00", "#dailyTimeSection");
  laterDateHide("2022/11/12 00:00:00", "#dailyTime2Section");
}

function dailyTime2() {
  // console.log(countDownTime);
  var dataCheck = dataDailyTime2 || false;
  if (!dataCheck) return false;

  var dailyTimeArray = createDaysMultiTimesArray(11, 9, 0, 7);

  // setTimeout、setInterval的作用域在window
  // tick = 100毫秒 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，並且搶在變價前更新
  // buildByCustomTime(dailyTimeArray, [buildSlider], 100);
  // buildByCustomTime(dailyTimeArray, [], 100,['countDownNumberObject', addDailyTime, true]);
  buildByCustomTime(dailyTimeArray, [buildSlider], 100, [
    "countDownNumberObject",
    addDailyTime,
    true,
  ]);
  // console.log(dailyTimeArray);
}

// 計算當月的天數
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// 每天的三個時段
function createDaysMultiTimesArray(startMonth, startDate, startTime, duration) {
  // startTime = 起始時間
  const daysMultiTimesArray = [];
  const currentMonthDays = getDaysInMonth(2022, startMonth);
  const firstTimeInterval = 8; // 第一次換品時間
  const secondTimeInterval = 16; // 第二次換品時間

  // 根據活動持續天數來生成每天三時段的時間
  for (let i = 0; i < duration; i++) {
    // 如果目前日期等於該月最大的日期，則月份 ++

    if (startDate + i < currentMonthDays + 1) {
      const dayDuration1 = new Date(
        `2022/${startMonth}/${startDate + i} ${startTime}:00`
      );

      const dayDuration2 = new Date(
        `2022/${startMonth}/${startDate + i} ${
          startTime + firstTimeInterval
        }:00`
      );

      const dayDuration3 = new Date(
        `2022/${startMonth}/${startDate + i} ${
          startTime + secondTimeInterval
        }:00`
      );

      daysMultiTimesArray.push(dayDuration1, dayDuration2, dayDuration3);
    } else {
      const dayDuration1 = new Date(
        `2022/${startMonth + 1}/${
          i - (currentMonthDays - startDate)
        } ${startTime}:00`
      );

      const dayDuration2 = new Date(
        `2022/${startMonth + 1}/${i - (currentMonthDays - startDate)} ${
          startTime + firstTimeInterval
        }:00`
      );

      const dayDuration3 = new Date(
        `2022/${startMonth + 1}/${i - (currentMonthDays - startDate)} ${
          startTime + secondTimeInterval
        }:00`
      );

      daysMultiTimesArray.push(dayDuration1, dayDuration2, dayDuration3);
    }
  }

  return daysMultiTimesArray;
}

// 建立當天的dynamic product的slider
function buildSlider(i) {
  var dailyTimeEl = document.querySelector("#dailyTime2 .swiper-wrapper");

  // 歸零：每天i循環都先清空dailyTimeEl、其內會有各個li，
  // 還必須清除span.swiper-notification，每一次i會產出一個
  // 不要開loop否則要update輪播不然dup會錯
  while (dailyTimeEl.firstChild) {
    dailyTimeEl.removeChild(dailyTimeEl.firstChild);
  }

  dataDailyTime2[i].forEach(function (el) {
    var dailyTimeChild = buildDynamicAutoSync(el);
    dailyTimeEl.appendChild(dailyTimeChild);
  });

  // FIXME:detectApp推遲到 window load後才載入輪播可能是自動變價失敗原因
  // window.addEventListener("load", sliderDailyReady);
  dailyTime2Ready();
}

function dailyTime2Ready() {
  var dailySlider = document.querySelector("#dailyTime2 .daily__slider");

  var sliderDailyContents = new Swiper(dailySlider, {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,
    // init: !isWindowWidth(960),
    // navigation: isWindowWidth(960) ? {
    //   nextEl: '#sliderTabNext',
    //   prevEl: '#sliderTabPrev',
    // } : false,
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
      // loadPrevNextAmount: 4,
    },
    // loop: true,
    // pagination: {
    //   el: "#sliderBnPager",
    //   type: "bullets",
    //   clickable: true,
    // },
    slidesPerView: 2,
    // slidesPerGroup: 3,
    // spaceBetween: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    speed: 600,
  });

  return sliderDailyContents;
}

// 每秒填入
function addDailyTime() {
  // 十位數和個位數分開的話不會因為數字1寬度不足產生跳動問題
  // console.log(countDownNumberObject);
  var dailyHourTens = document.getElementById("dailyHourTens2");
  var dailyHourUnits = document.getElementById("dailyHourUnits2");
  var dailyMinTens = document.getElementById("dailyMinTens2");
  var dailyMinUnits = document.getElementById("dailyMinUnits2");
  var dailySecTens = document.getElementById("dailySecTens2");
  var dailySecUnits = document.getElementById("dailySecUnits2");

  dailyHourTens.innerHTML = window.countDownNumberObject.hourTens;
  dailyHourUnits.innerHTML = window.countDownNumberObject.hourUnits;
  dailyMinTens.innerHTML = window.countDownNumberObject.minTens;
  dailyMinUnits.innerHTML = window.countDownNumberObject.minUnits;
  dailySecTens.innerHTML = window.countDownNumberObject.secTens;
  dailySecUnits.innerHTML = window.countDownNumberObject.secUnits;
}

function scrollDailyTime2() {
  var scrollItem = document.getElementById("decorDailyTimeLeft2");
  var scrollItem2 = document.getElementById("decorDailyTimeRight2");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.6);
    var scrollPercentage2 = getScrollPercentage(scrollItem2, 0, 0.6);

    var angle = -360 + scrollPercentage * 360;
    var angle2 = 360 + scrollPercentage * -360;

    var value = scrollPercentage * 1;

    scrollItem.style.transform =
      "rotate(" + angle + "deg) scale(" + value + ")";
    scrollItem2.style.transform =
      "rotate(" + angle2 + "deg) scale(" + value + ")";

    // scrollItem.style.opacity = value;
    scrollItem2.style.opacity = value;

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
    }
  });
}
