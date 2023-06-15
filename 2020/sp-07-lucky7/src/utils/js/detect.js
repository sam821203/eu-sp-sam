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

export function detectAndroidVersion() {
  var ua = (ua || navigator.userAgent).toLowerCase();
  var match = ua.match(/android\s([0-9\.]*)/i);
  return match ? match[1] : undefined;
}
// will return version, e.g. 5.0.1

export function isWindowWidth(width) {
  var windowWidth = document.body.clientWidth;
  if (windowWidth >= width) {
    return true;
  } else {
    return false;
  }
}
// will return true or false

export function isIE9() {
  if (navigator.appName.indexOf("Internet Explorer") != -1) {
    // not IE10, IE11
    var badBrowser = navigator.appVersion.indexOf("MSIE 1") == -1;
    if (badBrowser) return true;
    else return false;
  } else return false;
}
// e.g. if (isIE9()) {}

export function isApp() {
  var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
  if (isUiWebview) return true;
  else return false;
}
// will return true or false

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

// 檢查色碼
export function isColor(strColor) {
  // 16進位的三碼也給過
  let checkColor = /^#([0-9A-F]{3}){1,2}$/i.test(strColor);
  // 16進位只能有六碼
  // let checkColor = /^#[0-9A-F]{6}$/i.test(strColor);

  if (checkColor) {
    return checkColor;
  } else {
    // 檢查是否為保留字
    let legalColor = new Option().style;
    legalColor.color = strColor;
    return legalColor.color == strColor;
  }
}
// will return true or false

// 決定連結，先檢查是不是app，是的話吐app連結，不是的話再檢查指定寬度，
// 夠寬吐web連結，不夠寬吐mobile連結，rwd沒有mobile連結就吐web連結
export function makeLink(width, appLink, webLink, mobileLink) {
  var finalLink = isApp() ? appLink : isWindowWidth(width) ? webLink : mobileLink;
  if (!mobileLink) mobileLink = webLink;

  return finalLink;
}
// e.g. makeLink(960, appLink, webLink, mobileLink);
