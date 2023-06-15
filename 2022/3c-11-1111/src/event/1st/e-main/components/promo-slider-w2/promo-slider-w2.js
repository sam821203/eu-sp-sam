import Swiper from "swiper/swiper-bundle.min.js";
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import dailyObject from "event/1st/e-main/pages/index/index-start-time.js";
import { setIntervalFix } from "utils/js/build-time.js";
import { buildByCustomTime } from "utils/js/build-time.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initPromoSliderW2 = [
  promoSliderW2Ready(),
  checkDifferentTime(),
  // ScrollPromoSliderW2(),
];

function promoSliderW2Ready() {
  var promoSliders = document.querySelectorAll(".container--promo-slider-w2");

  promoSliders.forEach(function (el) {
    var thisSlideItemsLength = el.querySelectorAll(".swiper-slide").length;
    var promoSliderItem = new Swiper("#promoSliderW2Item", {
      // autoplay: {
      //   delay: 2200,
      //   disableOnInteraction: false,
      // },
      initialSlide: Math.floor(
        Math.random() *
          document.querySelectorAll("#promoSliderW2Item .swiper-slide").length
      ),
      // effect: "coverflow",
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // },
      centeredSlides: true,
      // grabCursor: true,
      init: thisSlideItemsLength > 3 ? true : false,
      lazy: {
        loadPrevNext: true,
      },
      loop: true,
      perspective: true,
      // navigation: {
      //   nextEl: '#sliderSpecialNext',
      //   prevEl: '#sliderSpecialPrev',
      // },
      // pagination: {
      //   el: '#sliderSpecialPager',
      //   type: 'bullets',
      //   clickable: true,
      // },
      slidesPerView: 3,
      // slidesPerGroup: 3,
      speed: 600,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
    });
    return promoSliderItem;
  });
}

function checkDifferentTime() {
  // 每日換品的時間現在移出去外面統一設定
  // 注意是10點開始換品
  var dailyTime = dailyObject.oneDay;
  var dateIndex = document.querySelectorAll(".date--index");
  var durationDateArray = [];

  dateIndex.forEach(function (el) {
    durationDateArray.push(dailyTime[el.innerText - 1]);
  });

  // setTimeout、setInterval的作用域在window
  // tick = 100毫秒 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，並且搶在變價前更新
  buildByCustomTime(durationDateArray, [buildPromoSliderW2], 100);
}

// 建立 promo sliders
function buildPromoSliders(node, sliders) {
  const promoSlidersNode = document.getElementById(node);
  const promoSliders = document.querySelectorAll(sliders);

  promoSliders.forEach((el) => {
    const isActive = el.classList.contains("active");
    const firstEl = promoSlidersNode.firstElementChild;

    if (isActive) {
      el.remove();
      firstEl.classList.add("active");
    } else {
      firstEl.classList.add("active");
    }
  });
}

function buildPromoSliderW2() {
  buildPromoSliders("promoSliderW2Item", ".container--promo-slider-w2");
}

// 滾動
function ScrollPromoSliderW2() {
  var promoSliderW2Left = document.getElementById("promoSliderW2Left");
  var promoSliderW2Right = document.getElementById("promoSliderW2Right");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(promoSliderW2Left, 0, 0.6);

    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    promoSliderW2Left.style.transform =
      "translateX(" + pos / 2 + "%) scale(" + value + ")";
    promoSliderW2Right.style.transform =
      "translateX(-" + pos + "%) scale(" + value + ")";
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if (scrollPercentage === 1) {
      promoSliderW2Left.classList.add("active");
      promoSliderW2Right.classList.add("active");
    } else {
      promoSliderW2Left.classList.remove("active");
      promoSliderW2Right.classList.remove("active");
    }
  });
}
