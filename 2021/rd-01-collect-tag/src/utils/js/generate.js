export function generateGlobalUXItems() {
  // scroll progress bar
  // ================================
  var initProgressBar = false;

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
    return bodyTop;
  }
  function progressBarWidth() {
    var finalWidth;
    var nowScroll = getScrollTop();
    var bodyHeight = document.body.scrollHeight - window.innerHeight;
    var bodyWidth = document.body.clientWidth;

    finalWidth = parseInt(nowScroll / bodyHeight * bodyWidth);
    return finalWidth;
  }
  function makeProgressBar() {
    var body = document.body;
    var wrap = document.createElement('div');
    var bar = document.createElement('div');
    wrap.id = 'progressBarWrap';
    wrap.style.opacity = 0; // 開始先隱藏
    wrap.style.position = 'fixed';
    wrap.style.zIndex = 200;
    wrap.style.top = 0;
    wrap.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    wrap.style.width = '100%';
    wrap.style.height = '0.5vh';
    bar.style.backgroundColor = '#cc1e05';
    bar.style.backgroundImage = 'linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)';
    bar.style.height = '100%';
    bar.id = 'progressBar';

    wrap.appendChild(bar);
    body.insertBefore(wrap, body.firstChild);
    if (getScrollTop()) initProgressBar = true; // 如果在最上面(getScrollTop() = 0)則不改變數

  }
  function detectScroll() {
    var wrap = document.getElementById('progressBarWrap');
    var bar = document.getElementById('progressBar');
    bar.style.width = progressBarWidth() + 'px';

    // 如果不在最上面則打開隱藏，如果在最上面則打開init，之後就會打開隱藏且再滾回來都不會消失
    if (initProgressBar) wrap.style.opacity = 1; else initProgressBar = true;

  }
  makeProgressBar();

  // 檢查有幾個progress bar，超過2條沒有id的(舊bar)移除
  function checkBar() {
    var alllBars = Array.apply(null, document.querySelectorAll('#progressBar'));
    var newBarHasId = 0;

    if (alllBars.length > 1) {
      alllBars.forEach(function (el, index) {
        var barWrap = el.parentNode;

        if (barWrap.id === 'progressBarWrap') {
          newBarHasId++;

          // 超過一個newBar就砍
          if (newBarHasId > 1) barWrap.parentNode.removeChild(barWrap);

        } else {
          // 舊bar都砍
          barWrap.parentNode.removeChild(barWrap);
        }
      });
    }
  }
  document.addEventListener('DOMContentLoaded', function(){
    checkBar();
  });


  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  window.addEventListener('load', function () {
    requestAnimationFrame ? requestAnimationFrame(detectScroll) : detectScroll();
  });
  window.addEventListener('scroll', function () {
    requestAnimationFrame ? requestAnimationFrame(detectScroll) : detectScroll();
  });
}

export var initGlobalUXItems = generateGlobalUXItems();
