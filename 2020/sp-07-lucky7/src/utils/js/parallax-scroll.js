// 這是手寫scroll parallax
// 目標element要是position absolute並CSS寫好will-change: scroll-position
import { isWindowWidth } from 'utils/js/detect'
export function makeParallaxDefault(el, param) {
  setParallax(el, param);
}

export function makeParallaxBgDefault(el, param) {
  setBgParallax(el, param);
}

export function makeParallaxRAF(el, param) {
  requestAnimationFrame(function() {
    setParallax(el, param);
  });
}


// FIXME: Throttle無效 ===================================
export function makeParallaxThrottle(el, param, sec) {
  throttle (function(){
    setParallax(el, param);
  }, sec);
}

function debounce(func, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args)
    }, delay);
  }
}

function throttle(func, threshhold) {
  var last, timer;
  if (threshhold) threshhold = 250;
  return function () {
    var context = this
    var args = arguments
    var now = +new Date()
    if (last && now < last + threshhold) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        func.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
// ==================================================


function setParallax(el, param) {
  document.addEventListener('scroll', function () {
    // el.style.willChange =  "scroll-position";
    el.style.top = getScrollTop() * parseFloat(param) + 'px';
  });
}

function setBgParallax(el, param) {
  el.style.marginTop = param * -100 + 'px';
  document.addEventListener('scroll', function () {
    // 加上電梯和浮水印的高度，如果沒有這兩個就可以直接用上面的setParallax
    el.style.top = getScrollTop() * parseFloat(param) + 'px'
    // if (isWindowWidth(1213)) {
    //   el.style.top = getScrollTop() * parseFloat(param) + 'px';
    // } else if (isWindowWidth(1024)) {
    //   el.style.top = 40 + getScrollTop() * parseFloat(param) + 'px';
    // } else if (isWindowWidth(768)) {
    //   el.style.top = 0 + getScrollTop() * parseFloat(param) + 'px';
    // } else {
    //   el.style.top = 0 + getScrollTop() * parseFloat(param) + 'px';
    // }
    
  });
}

function getScrollTop() {
  var bodyTop = 0;
  if (typeof window.pageYOffset != "undefined") {
    bodyTop = window.pageYOffset;

  } else if (typeof document.compatMode != "undefined"
    && document.compatMode != "BackCompat") {
    bodyTop = document.documentElement.scrollTop;

  } else if (typeof document.body != "undefined") {
    bodyTop = document.body.scrollTop;
  }
  /* 回傳出捲動後的高度值 */
  return bodyTop;
}