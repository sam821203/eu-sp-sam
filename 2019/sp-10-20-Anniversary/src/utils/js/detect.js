export function detectWindowWidth(width, functionWeb, functionMobile) {
  var windowWidth = document.body.clientWidth;
  if (windowWidth >= width) {
    if (typeof (functionWeb) === "function") return functionWeb();
  } else {
    if (typeof (functionMobile) === "function") return functionMobile();
  }
}
// e.g. detectWindowWidth(768, null, function(){functionMobile();});

export function detectApp(toDoInWebview, toDoInBrowser) {
  var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
  if (isUiWebview) return toDoInWebview;
  else return toDoInBrowser;
}
// e.g. detectApp(el.appHref, el.webhref);

export function isIE9() {
  if (navigator.appName.indexOf("Internet Explorer") != -1) {
    // not IE10, IE11
    var badBrowser = navigator.appVersion.indexOf("MSIE 1") == -1;
    if (badBrowser) return true;
  }
}
// e.g. if (isIE9()) {}

export function isNeedSlider(sliderId, initLengthGreatThan) {
  var initLengthGreatThan = initLengthGreatThan || 1;
  var itemString = sliderId + ' .swiper-slide';
  var sliderItems = document.querySelectorAll(itemString);
  
  if (sliderItems.length > initLengthGreatThan) return true;
  return false;
}
// e.g. if (isNeedSlider(sliderId, 2)) { var bnSlider = new Swiper('#bnSlider',{})}

export function isNeedSliderRWD(width, sliderId, initLengthWeb, initLengthMobile) {
  return detectWindowWidth(width, 
    function(){
      return isNeedSlider(sliderId, initLengthWeb);
    }, 
    function(){
      return isNeedSlider(sliderId, initLengthMobile);
    }
  );
}
// e.g. if (isNeedSliderRwd(sliderId, 2, 1)) { var bnSlider = new Swiper('#bnSlider',{})}

