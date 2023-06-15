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
// import { initHero } from "event/2nd/e-main/components/hero-section/hero-section.js";
// import { initParallax } from 'utils/bg-decoration-instance/parallax/parallax.js';
import { initPromo } from "event/2nd/e-main/components/promo-event/promo-event.js";
import { initDynamicSliderW3M3 } from "event/2nd/e-main/components/dynamic-slider-w3m3/dynamic-slider-w3m3.js";
import { initDynamicSliderW2M2 } from "event/2nd/e-main/components/dynamic-slider-w2m2/dynamic-slider-w2m2.js";
import { initRandomW3m3 } from "event/2nd/e-main/components/event-w3m3/event-w3m3.js";
import { initDynamicSliderW2M22 } from "event/2nd/e-main/components/dynamic-slider-w2m2-2/dynamic-slider-w2m2-2.js";
import { initRandomW3m32 } from "event/2nd/e-main/components/event-w3m3-2/event-w3m3-2.js";

import { initBnSection } from "event/2nd/e-main/components/bn-section/bn-section.js";
import { initTabSection } from "event/2nd/e-main/components/tab-section/tab-section.js";
import { initBnSection2 } from "event/2nd/e-main/components/bn-section-2/bn-section-2.js";
import { initDailyTime } from "event/2nd/e-main/components/daily-time/daily-time.js";
import { initBnSlider } from "event/2nd/e-main/components/bn-slider/bn-slider.js";
import { initPromoSpecial } from "event/2nd/e-main/components/promo-special/promo-special.js";
import { initBnSection3 } from "event/2nd/e-main/components/bn-section-3/bn-section-3.js";
/**
 * page js
 */

// var scrollBgTop = document.getElementById("scrollBgTop");

// function scrollAddFixed() {
//   if (window.scrollY >= 700) {
//     scrollBgTop.classList.add("bg-fixed");
//   } else {
//     scrollBgTop.classList.remove("bg-fixed");
//   }
// }

// scrollAddFixed();
// document.addEventListener("scroll", scrollAddFixed);

// remove door shaking animation
// setTimeout(function(){
//   var doorShaking = document.querySelector('.door-shaking-animate');
//   doorShaking.classList.remove('door-shaking-animate');
// }, 1600);

// ==================== 下雪特效 ====================
// The star of every good animation
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var transforms = [
  "transform",
  "msTransform",
  "webkitTransform",
  "mozTransform",
  "oTransform",
];

var transformProperty = getSupportedPropertyName(transforms);

// Array to store our Snowflake objects
var snowflakes = [];

// Global variables to store our browser's window size
let browserWidth = document.documentElement.clientWidth;
let browserHeight = document.documentElement.clientHeight;

// Specify the number of snowflakes you want visible
var numberOfSnowflakes = 290;

// detect browser Width
if (browserWidth < 961) numberOfSnowflakes = 260;

// Flag to reset the position of the snowflakes
var resetPosition = false;

//
// It all starts here...
//
function setup() {
  window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
  window.addEventListener("resize", setResetFlag, false);
}
setup();

//
// Vendor prefix management
//
function getSupportedPropertyName(properties) {
  for (var i = 0; i < properties.length; i++) {
    if (typeof document.body.style[properties[i]] != "undefined") {
      return properties[i];
    }
  }
  return null;
}

//
// Constructor for our snowFlake object
//
function snowFlake(element, speed, xPos, yPos) {
  // set initial snowflake properties
  this.element = element;
  this.speed = speed;
  this.xPos = xPos;
  this.yPos = yPos;

  // declare variables used for snowflake's motion
  this.counter = 0;
  this.sign = Math.random() < 0.5 ? 1 : -1;

  // setting an initial opacity and size for our snowflake
  this.element.style.opacity = 0.1 + Math.random();
  this.element.style.fontSize = 14 + Math.random() * 54 + "px";

  // detect browser Width
  if (browserWidth < 961 && browserWidth > 767) this.element.style.fontSize = 12 + Math.random() * 42 + "px";
  if (browserWidth < 767) this.element.style.fontSize = 12 + Math.random() * 30 + "px";
}

//
// The function responsible for actually moving our snowflake
//
snowFlake.prototype.update = function () {
  // using some trigonometry to determine our x and y position
  this.counter += this.speed / 5000;
  this.xPos += (this.sign * this.speed * Math.cos(this.counter)) / 40;
  this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;

  // setting our snowflake's position
  setTranslate3DTransform(
    this.element,
    Math.round(this.xPos),
    Math.round(this.yPos)
  );
  // console.log(this.yPos);

  // if snowflake goes below the browser window, move it back to the top
  if (this.yPos > browserHeight) {
    this.yPos = - 50;
  }
};

//
// A performant way to set your snowflake's position
//
function setTranslate3DTransform(element, xPosition, yPosition) {
  var val = "translate3d(" + xPosition + "px, " + yPosition + "px" + ", 0)";
  element.style[transformProperty] = val;
}

//
// The function responsible for creating the snowflake
//
function generateSnowflakes() {
  // get our snowflake element from the DOM and store it
  var originalSnowflake = document.querySelector(".snow-flake");

  // access our snowflake element's parent container
  var snowflakeContainer = originalSnowflake.parentNode;

  // get our browser's size
  browserWidth = document.documentElement.clientWidth;
  browserHeight = document.documentElement.clientHeight;

  // create each individual snowflake
  for (var i = 0; i < numberOfSnowflakes; i++) {
    // clone our original snowflake and add it to snowflakeContainer
    var snowflakeClone = originalSnowflake.cloneNode(true);
    snowflakeContainer.appendChild(snowflakeClone);

    // set our snowflake's initial position and related properties
    var initialXPos = getPosition(50, browserWidth);
    var initialYPos = getPosition(50, browserHeight);
    var speed = 5 + Math.random() * 40;

    if (browserWidth < 961) speed = 1 + Math.random() * 40;

    // create our Snowflake object
    var snowflakeObject = new snowFlake(
      snowflakeClone,
      speed,
      initialXPos,
      initialYPos
    );
    snowflakes.push(snowflakeObject);
  }

  // remove the original snowflake because we no longer need it visible
  snowflakeContainer.removeChild(originalSnowflake);

  // call the moveSnowflakes function every 30 milliseconds
  moveSnowflakes();
}

//
// Responsible for moving each snowflake by calling its update function
//
function moveSnowflakes() {
  for (var i = 0; i < snowflakes.length; i++) {
    var snowflake = snowflakes[i];
    snowflake.update();
  }

  // Reset the position of all the snowflakes to a new value
  if (resetPosition) {
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    for (var i = 0; i < snowflakes.length; i++) {
      var snowflake = snowflakes[i];

      snowflake.xPos = getPosition(50, browserWidth);
      snowflake.yPos = getPosition(50, browserHeight);
    }

    resetPosition = false;
  }

  requestAnimationFrame(moveSnowflakes);
}

//
// This function returns a number between (maximum - offset) and (maximum + offset)
//
function getPosition(offset, size) {
  return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
}

//
// Trigger a reset of all the snowflakes' positions
//
function setResetFlag(e) {
  resetPosition = true;
}
