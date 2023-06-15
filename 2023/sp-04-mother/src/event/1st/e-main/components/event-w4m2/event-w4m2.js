import Swiper from 'swiper/swiper-bundle.min.js';
import { siblingRandom } from "utils/js/build-random.js";
import { detectApp } from "utils/js/detect.js";

import { getScrollPercentage } from "utils/js/scroll.js";

export var initRandomW4M2 = [
  setInterval(function () {
    chooseRandomW4M2Item();
  }, 2000),
  buildEventW4M2Slider(),
  scrollEventW4M2(),
];

function buildEventW4M2Slider() {
  window.addEventListener("load", sliderEventW4M2Ready);
  window.addEventListener("resize", sliderEventW4M2Ready);
}

function chooseRandomW4M2Item() {
  var w4m2Items = Array.apply(null, document.querySelectorAll("#w4m2Wrap a"));
  var arrayAnimationClass = ["active", "active"];
  var chooseClassIndex = siblingRandom(
    arrayAnimationClass.length,
    "siblingRandomCheckW4M2AnimationIndex"
  );
  var chooseItemIndex = siblingRandom(w4m2Items.length);

  w4m2Items.forEach(function (item) {
    arrayAnimationClass.forEach(function (className) {
      item.classList.remove(className);
    });
  });
  w4m2Items[chooseItemIndex].classList.add(
    arrayAnimationClass[chooseClassIndex]
  );
}

function sliderEventW4M2Ready() {
  let sliderEventW4M2 = Swiper;
  let init = false;

  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 960px)');
  let desktop = window.matchMedia('(min-width: 960px)');

  if(mobile.matches) {
    if (!init) {

      init = true;

      sliderEventW4M2 = new Swiper("#sliderEventW4M2", {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          // reverseDirection: true,
        },
        grabCursor: true,
        // initialSlide: Math.floor(
        //   Math.random() *
        //     document.querySelectorAll("#sliderEventW4M2 .swiper-slide").length
        // ),
        lazy: {
          loadPrevNext: true,
        },
        // init: thisSlideItemsLength > 1 ? true : false,
        // loop: true,
        // pagination: {
        //   el: '#sliderBnPager',
        //   type: 'bullets',
        //   clickable: true,
        // },
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn : 2,
        slidesPerColumnFill : 'row',
        // spaceBetween: '1.5%',
        speed: 600,
        // breakpoints: {
        //   960: {
        //     slidesPerView: 4,
        //   }
        // },
      });
    } else if(desktop.matches) {

      // 在桌機時銷毀掉 swiper 的設定
      sliderEventW4M2.destroy();
      init = false;
    }
  }

  return sliderEventW4M2;
}

// 滾動
function scrollEventW4M2() {
  var scrollItem = document.getElementById("decorEventW4M2Title");
  var scrollItem2 = document.getElementById("decorEventW4M2Flower");
  var scrollItem3 = document.getElementById("decorEventW4M2Left");
  var scrollItem4 = document.getElementById("decorEventW4M2Right");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.6);
    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    // scrollItem.style.transform = 'translateX(-' + pos + '%)';
    scrollItem.style.transform = 'translateY(' + pos + '%)';
    scrollItem.style.transformOrigin = 'bottom';
    scrollItem2.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transformOrigin = 'bottom';
    scrollItem3.style.transform = 'translateX(-' + (pos * 5) + '%)';
    scrollItem4.style.transform = 'translateX(' + (pos * 5) + '%)';
    // scrollItem2.style.transform = 'scale(' + value + ')';
    // scrollItem.style.opacity = value;

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
      scrollItem3.classList.add("active");
      scrollItem4.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
      scrollItem3.classList.remove("active");
      scrollItem4.classList.remove("active");
    }
  });
}
