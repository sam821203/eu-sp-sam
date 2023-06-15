import Swiper from "swiper/swiper-bundle.min.js";
import { detectApp } from "utils/js/detect.js";
import { makeLink } from "utils/js/detect.js";
import { isApp } from "utils/js/detect.js";
import dailyObject from "event/2nd/e-main/pages/index/index-start-time.js";
import { siblingRandom } from "utils/js/build-random.js";
import { getScrollPercentage } from "utils/js/scroll.js";
// import { laterDateHide } from "utils/js/detect.js";
// import { laterDateShow } from "utils/js/detect.js";
import { buildByCustomTime } from "utils/js/build-time.js";

export var initPromo = [
  setInterval(function () {
    chooseRandomPromoItem();
  }, 1800),
  // detectApp( window.addEventListener( 'load', promoEventReady ), promoEventReady ),
  // changeLink(),
  // ScrollPromoEvent(),
  promoEvent(),
  setTimeout(function () {
    promoEventReady();
  }, 1000),
];

function promoEvent() {
  // setTimeout、setInterval的作用域在window
  // tick = 100毫秒 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，並且搶在變價前更新
  // buildByCustomTime(dailyTimeArray, [buildSlider], 100);
  // buildByCustomTime(dailyTimeArray, [], 100,['countDownNumberObject', addDailyTime, true]);

  buildByCustomTime(dataCustomTimeArray1, [buildPromoEventContent1], 100);
  buildByCustomTime(dataCustomTimeArray2, [buildPromoEventContent2], 100);
  buildByCustomTime(dataCustomTimeArray3, [buildPromoEventContent3], 100);
  buildByCustomTime(dataCustomTimeArray4, [buildPromoEventContent4], 100);
  buildByCustomTime(dataCustomTimeArray5, [buildPromoEventContent5], 100);
}

function removePromoEventContent(id) {
  var promoSliders = document.querySelector(`${id} .wrapper--promo-event`);
  // 歸零：每天i循環都先清空promoSliders、其內會有各個li，
  // 還必須清除span.swiper-notification，每一次i會產出一個
  // 不要開loop否則要update輪播不然dup會錯
  while (promoSliders.firstChild) {
    promoSliders.removeChild(promoSliders.firstChild);
    // promoSliders.removeChild(promoSliders.nextElementSibling);
  }

  return promoSliders;
}

// 檢查是否有圖片資源
function imageDataCheck(img) {

  img.addEventListener('error', function handleError() {
    const defaultImage = 'item-p-event-2-1-1.png';
  
    img.src = defaultImage;
  });
}

function buildPromoEventHTML(el, sliders) {
  // 每組陣列包進外層li裡，每次輪播動一組
  var itemWrap = document.createElement("li");
  var itemLink = document.createElement("a");
  var itemImg = document.createElement("img");

  // 下方取值的時候先拿掉了swiper-slide，改加在外層
  itemWrap.classList.add("swiper-slide", "promo__item");
  itemLink.classList.add("js-changeLink");

  if (isApp()) itemLink.href = el.appLink;
  else itemLink.href = el.webLink;
  
  itemImg.setAttribute("src", el.imgSrc);
  itemImg.setAttribute("alt", el.alt);

  // 檢查是否有圖片資源
  imageDataCheck(itemImg);

  itemLink.appendChild(itemImg);
  itemWrap.appendChild(itemLink);
  sliders.appendChild(itemWrap);
}

function buildPromoEventContent1(i) {
  var dataCheck = dataPromoBox1 || false;
  if (!dataCheck) return false;

  var promoSliders = removePromoEventContent("#promoEventItem1");
  dataCheck[i].forEach(function (el) {
    buildPromoEventHTML(el, promoSliders);
  });
}

function buildPromoEventContent2(i) {
  var dataCheck = dataPromoBox2 || false;
  if (!dataCheck) return false;

  var promoSliders = removePromoEventContent("#promoEventItem2");
  dataCheck[i].forEach(function (el) {
    buildPromoEventHTML(el, promoSliders);
  });
}

function buildPromoEventContent3() {
  var dataCheck = dataPromoBox3 || false;
  if (!dataCheck) return false;

  var promoSliders = removePromoEventContent("#promoEventItem3");

  if (typeof dataCheck[0] !== "undefined") {
    dataCheck[0].forEach(function (el) {
      buildPromoEventHTML(el, promoSliders);
    });
  }
}

function buildPromoEventContent4(i) {
  var dataCheck = dataItemBox1 || false;
  if (!dataCheck) return false;

  var promoSliders = removePromoEventContent("#promoEventItem4");

  if (typeof dataCheck[i] !== "undefined") {
    dataCheck[i].forEach(function (el) {
      buildPromoEventHTML(el, promoSliders);
    });
  }
}

function buildPromoEventContent5(i) {
  var dataCheck = dataItemBox2 || false;
  if (!dataCheck) return false;

  var promoSliders = removePromoEventContent("#promoEventItem5");

  if (typeof dataCheck[i] !== "undefined") {
    dataCheck[i].forEach(function (el) {
      buildPromoEventHTML(el, promoSliders);
    });
  }
}

function promoEventReady() {
  var promoSliders = document.querySelectorAll(".container--promo-event");

  promoSliders.forEach(function (el) {
    var thisSlideItemsLength = el.querySelectorAll(".swiper-slide").length;
    var sliderPromo = new Swiper(el, {
      autoplay: {
        delay: 1800 + Math.floor(Math.random() * 500),
        disableOnInteraction: false,
      },
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      grabCursor: true,
      init: thisSlideItemsLength > 1 ? true : false,
      // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
      // lazy: {
      //   loadPrevNext: true,
      // },
      loop: true,
      perspective: true,
      slidesPerView: 1,
      // slidesPerGroup: 1,
      // slidesPerColumn : 2,
      // slidesPerColumnFill : 'row',
      speed: 500 + Math.floor(Math.random() * 200),
      // watchSlidesProgress : true,
      // watchSlidesVisibility : true 
      observer: true,
      observeParents: true,
    });
    return sliderPromo;
  });
}

function changeLink(web, mobile, app) {
  var promoChangeLink = Array.apply(
    null,
    document.querySelectorAll(".js-changeLink")
  );
  promoChangeLink.forEach(function (el) {
    var webLink = web;
    var mobileLink = mobile;
    var appLink = app;
    var targetLink = makeLink(960, appLink, webLink, mobileLink);
    el.href = targetLink;
  });
}

function chooseRandomPromoItem() {
  var promoItems = Array.apply(
    null,
    document.querySelectorAll(".promo__block .event__item")
  );
  // console.log(promoItems);

  var chooseItemIndex = siblingRandom(promoItems.length);
  // console.log(chooseItemIndex);

  promoItems.forEach(function (item) {
    // arrayAnimationClass.forEach( function (className) {
    item.classList.remove("animate");
    // } );
  });
  promoItems[chooseItemIndex].classList.add("animate");
}

// 滾動
function ScrollPromoEvent() {
  var scrollItem = document.getElementById("promoEventLeft");
  var scrollItem2 = document.getElementById("promoEventRight");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.4);
    var pos = 100 + scrollPercentage * -100;
    scrollItem.style.transform = "translateX(" + pos + "%)";
    scrollItem2.style.transform = "translateX(-" + pos + "%)";

    // var value = scrollPercentage * 1;
    // scrollItem.style.opacity = value;

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
      scrollItem2.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
      scrollItem2.classList.remove("active");
    }
  });
}
