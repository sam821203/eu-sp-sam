document.body.classList.add("js-loading");

/**
 * import vendor js modules
 */
import WOW from "wow.js/dist/wow.js";
new WOW().init();

// swiper 6.1.2 no IE, add polyfill
import "swiper/swiper-bundle.css";
import "vendors/js/swiper-ie-polyfill.js";

// import 'vendors/js/lazyload.js'

/**
 * import normal layout js modules
 */
import { notSupportIE9Alert } from "utils/js/ie9-alert";
import { notSupportAndroid5 } from "utils/js/android5-alert";
import { initGlobalUXItems } from "utils/js/generate";
import { getScrollPercentage } from "utils/js/scroll.js";
// import { makeParallaxDefault } from 'utils/js/parallax-scroll.js';

/**
 * import components js modules
 */
import { initHero } from "event/1st/e-main/components/hero-section/hero-section.js";
import { initPromoSliderW3 } from "event/1st/e-main/components/promo-slider-w3/promo-slider-w3.js";
import { initPromoSliderW2 } from "event/1st/e-main/components/promo-slider-w2/promo-slider-w2.js";
import { initRandomW3m3 } from "event/1st/e-main/components/event-w3m3/event-w3m3.js";

/**
 * page js
 */
// 隨機產生星星
function buildStars() {
  var starsGroup = document.querySelector(".decor__stars");
  var allStars = document.querySelectorAll(".star");

  if (allStars.length > 0) {
    Array.prototype.forEach.call(allStars, function (child) {
      child.style.top =
        Math.random() * (starsGroup.offsetHeight - 0) + 0 + "px";
      child.style.left =
        Math.random() * (starsGroup.offsetWidth - 0) + 0 + "px";
      var random = Math.ceil(Math.random() * (3 - 1) + 1);
      child.style.height = random + "px";
      child.style.width = random + "px";
      child.style.animation =
        "star-shine " + (Math.random() * (5 - 1) + 1) + "s infinite linear";
    });
  }
}
buildStars();

// 滾動視差
function scrollBottomPopup() {
  var bgBottom = document.getElementById("scrollDecorBottom");
  if (window.scrollY >= 250) {
    bgBottom.classList.add("active");
  } else {
    bgBottom.classList.remove("active");
  }
}
document.addEventListener("scroll", scrollBottomPopup);

// var tesAnchor = document.querySelector( 'a[href="#note1"]');
// var testId = tesAnchor.getAttribute( 'href' );
// if(testId) {
//   console.log('hell ya');
// }
