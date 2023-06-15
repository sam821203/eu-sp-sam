// 這是手寫scroll parallax
// 目標element要是position absolute並CSS寫好will-change: scroll-position
// param越接近1越接近fix(等於1時等同fix，大於1時越往上滾會越往下)
// param越接近0時越等同原本scroll速度(等於0時與scroll等速，小於0時越往上滾會跑走越快)
// TODO: 注意可能會蓋住宮格的問題(原因：parallax圖層有relative就有預設z-index，滾動太慢到宮格出現時parallax圖層還在畫面上就有可能遮住宮格，解法：對所有section加上relative，讓所有宮格也能有預設z-index)
import { isWindowWidth } from 'utils/js/detect'
import { getScrollTop } from 'utils/js/detect'

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

function debounce(method, context){
        clearTimeout(method.tId)
        method.tId = setTimeout(function(){
            method.call(context);
        }, 300);
}

function throttle ( method, delay ) {
  var delay = delay || 100;
  var that = this;
  var last = 0;
  return function () {
    var now = Date.now();
    if (now - last > delay) {
      method.apply(that, arguments);
      last = now;
    }
  }
}
// ==================================================


function setParallax(el, param) {
  // el.style.marginTop = param * -100 + 'px';
  document.addEventListener('scroll', function () {
    // 加上電梯和浮水印的高度，如果沒有這兩個就可以直接用上面的setParallax

    // 用top
    // el.style.top = getScrollTop() * parseFloat(param) + 'px'
    // 用transform
    el.style.transform = 'translate3d(0,' + getScrollTop() * parseFloat(param) + 'px,0)';
  });
}

function setBgParallax(el, param) {
  // el.style.marginTop = param * -100 + 'px';
  document.addEventListener('scroll', function () {
    // 加上電梯和浮水印的高度，如果沒有這兩個就可以直接用上面的setParallax

    if ( getScrollTop() >= 1000 ) {
      var yValue = getScrollTop() * parseFloat( param );
      el.style.backgroundPosition = '50% ' + yValue + 'px';
    } else {
      el.style.backgroundPosition = '50% 0';
    }

  });
}
