import Swiper from "swiper/swiper-bundle.min.js";
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import dailyObject from "event/1st/e-main/pages/index/index-start-time.js";
import { buildByCustomTime } from "utils/js/build-time.js";
import { getScrollPercentage } from "utils/js/scroll.js";

export var initPromoSliderSec = [
  promoSliderW3Ready(),
  checkWeekTime(),
  // ScrollPromoSliderW3(),
];

function promoSliderW3Ready() {
  var promoSliders = document.querySelectorAll(".container--promo-slider-w3");

  promoSliders.forEach(function (el) {
    var thisSlideItemsLength = el.querySelectorAll(".swiper-slide").length;
    var promoSliderItem = new Swiper("#promoSliderW3Item", {
      // autoplay: {
      //   delay: 2200,
      //   disableOnInteraction: false,
      // },
      initialSlide: Math.floor(
        Math.random() *
          document.querySelectorAll("#promoSliderW3Item .swiper-slide").length
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

// 滾動
function ScrollPromoSliderW3() {
  var promoSliderW3Left = document.getElementById("promoSliderW3Left");
  var promoSliderW3Right = document.getElementById("promoSliderW3Right");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(promoSliderW3Left, 0, 0.6);

    var pos = 75 + scrollPercentage * -75;
    // var value = scrollPercentage * 1;

    // promoSliderW3Title.style.transform = ' scale(' + value + ')';
    // promoSliderW3Left.style.transform = "translateY(" + pos + "%)";
    // promoSliderW3Right.style.transform = "translateY(" + pos + "%)";
    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if (scrollPercentage === 1) {
      promoSliderW3Left.classList.add("active");
      promoSliderW3Right.classList.add("active");
    } else {
      promoSliderW3Left.classList.remove("active");
      promoSliderW3Right.classList.remove("active");
    }
  });
}

function checkWeekTime() {
  // 每日換品的時間現在移出去外面統一設定
  // 注意是10點開始換品
  var dailySliderArray = dailyObject.sevenDay;

  // setTimeout、setInterval的作用域在window
  // tick = 100毫秒 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，並且搶在變價前更新
  buildByCustomTime(dailySliderArray, [buildPromoSliderW3], 100);
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

function buildPromoSliderW3() {
  buildPromoSliders("promoSliderW3Item", ".container--promo-slider-w3");
}
