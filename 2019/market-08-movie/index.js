addForEach();
detectApp(window.addEventListener('load', sliderEventReady), sliderEventReady);
makeOverlay();

function detectApp(toDoInWebview, toDoInBrowser) {
  var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
  if (isUiWebview) return toDoInWebview;
  else return toDoInBrowser;
}
function isIE9() {
  if (navigator.appName.indexOf("Internet Explorer") != -1) {
    var badBrowser = navigator.appVersion.indexOf("MSIE 1") == -1;
    if (badBrowser) return true;
  }
}
function addForEach() {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
}
function sliderEventReady() {
  var sliderEl = document.querySelector('#sliderMovie');
  var sliderEvent = new Swiper('#sliderMovie', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true,
    // loop: true,
    navigation: {
      nextEl: sliderEl.nextElementSibling.nextElementSibling,
      prevEl: sliderEl.nextElementSibling,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 600,
    simulateTouch: false,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
    },
  })
}

function makeOverlay() {
  var openersNodelist = document.querySelectorAll('#sliderMovie a');
  var openers = isIE9() ? Array.apply(null, openersNodelist) : openersNodelist;
  var overlaysNodelist = document.querySelectorAll('#movieDialog .dialog__item');
  var overlays = isIE9() ? Array.apply(null, overlaysNodelist) : overlaysNodelist;
  
  openers.forEach(function(el, i) {
    el.addEventListener('click', function(e){
      e.preventDefault();
      overlays[i].style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
    if (openers.length === overlays.length) {
      overlays[i].addEventListener('click', function () {
        this.style.display = 'none';
        document.body.style.overflow = '';
      });
    } else {
      console.error('按鈕數量與蓋板數量不符');
    }
  });
}