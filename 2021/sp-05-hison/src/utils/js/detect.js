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

export function isIE() {
  // 可偵測到IE11以下(不包含EDGE和新EDGE)
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) return true;
  else return false;
}
// e.g. if (isIE()) {}

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
  var checkColor = /^#([0-9A-F]{3}){1,2}$/i.test(strColor);
  // 16進位只能有六碼
  // var checkColor = /^#[0-9A-F]{6}$/i.test(strColor);

  if (checkColor) {
    return checkColor;
  } else {
    // 檢查是否為保留字
    var legalColor = new Option().style;
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

// 偵測img是否載入完成，並回調
export function detectImageLoaded(path, callback) {
  var image = new Image()
  image.src = path

  if (image.complete) {
    // 圖片已經被載入
    callback(image)
  } else {
    // 如果圖片未被載入，則設定載入時的回調
    image.onload = function () {
      callback(image)
    }
  }
}

// 偵測scroll停止並callback
// callback接受兩種參數：如果是function，則當停止時會執行callback function，若要判斷是否停止給一個return true的function就會執行
// 另一種是給物件帶有五個狀況: 一開始、開始scroll、上滾時、下滾時、scroll停止時，要執行的function，會在符合狀況時執行對應function
// callObject = {callInit: callInit, callStartScroll: callStartScroll, callScrollUp: callScrollUp, callScrollDown: callScrollDown, callBack: callBack}
// 可指定scroll停止後的delay回應時間，預設500毫秒，代表scroll停止後+500毫秒執行callback(一定要給時間差才能偵測，時間越短效能越差)
export function detectScrollStop(callObject, delayTime){
  var posPrevScroll = 0;
  var posNextScroll = 0;
  var delayTime = delayTime || 500;
  var timer = null;

  if (posPrevScroll == posNextScroll) {
    // define callback
    switch (typeof callObject) {
      case 'function':
        var callBack = callObject;
        break;
      case 'object':
        var paramObject = callObject
        if (typeof callObject.callBack === 'function') {
          callObject.callBack();
        }
        break;
      case 'undefined':
        break;
    }
  }

  // callInit
  if (paramObject && typeof paramObject.callInit === 'function') paramObject.callInit();

  document.onscroll = function () {
    // callStartScroll
    if (paramObject && typeof paramObject.callStartScroll === 'function') paramObject.callStartScroll();

    if (posNextScroll - posPrevScroll < 0) {
      // 下滾
      if (paramObject && typeof paramObject.callScrollDown === 'function') paramObject.callScrollDown();
    } else if (posNextScroll - posPrevScroll > 0) {
      // 上滾
      if (paramObject && typeof paramObject.callScrollUp === 'function') paramObject.callScrollUp();
    }


    clearTimeout(timer);
    timer = setTimeout(isScrollEnd, delayTime);
    posPrevScroll = document.documentElement.scrollTop || document.body.scrollTop;
  }

  function isScrollEnd() {
    posNextScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (posPrevScroll == posNextScroll) {
      // switch callback
      if (callBack) {
        return callBack();
      } else if (paramObject) {
        if (typeof paramObject.callBack === 'function') {
          return callObject.callBack();
        }
      }
    }
  }
}

// 執行可以取得元素距離頂部高度
export function detectElementTop(el) {
  var actualTop = el.offsetTop
  var current = el.offsetParent
  while (current !== null) {
    actualTop += current.offsetTop
    current = current.offsetParent
  }
  return actualTop
}

// 執行可以取得scroll後螢幕上緣距離頂部高度
export function getScrollTop() {
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

export function isMonth(month) {
  var dateNow = new Date();
  if(dateNow.getMonth() === (Number(month) - 1)) return true;
  else return false;
}

export function isDate(dateFrom, dateTo) {
  var dateNow = new Date();
  if (dateTo === undefined ) {
    if(dateNow.getDate() === dateFrom) return true;
    else return false;
  } else {
    if(dateNow.getDate() >= Number(dateFrom) && dateNow.getDate() <= Number(dateTo)) return true;
    else return false;
  }
}

// 檢查是否是物件
export function isObject(detectSource, errorMsg){
  if(typeof detectSource !== 'object') {
    if(errorMsg) console.error(errorMsg);
    return false;
  } else if(Array.isArray(detectSource) || detectSource === null) {
    if(errorMsg) console.error(errorMsg);
      return false;
  } else return true;
}

// 偵測來源是字串或是陣列，並且回傳陣列。如果給的是字串直接加在陣列第一個，如果給的是陣列則複製一份回傳
// 最後可以設定是否要插入defaultValue，預設為false，就是給定的字串中會取代defaultValue，設為true則為插入
// isInsertDefaultValue設為true常見的場合就是插入預設的className避免取代掉關鍵如輪播的預設className
export function detectStringOrArray(data, defaultValue, errorMsg, isInsertDefaultValue){
  var arrayChecked = [];
  var dataType = typeof data;
  if(dataType === 'undefined') {
    if(defaultValue) arrayChecked.push(defaultValue);
  } else if (dataType === 'string') {
    if(isInsertDefaultValue) arrayChecked.push(defaultValue);
    arrayChecked.push(data);
  } else if (Array.isArray(data)) {
    if(isInsertDefaultValue) arrayChecked.push(defaultValue);
    data.forEach(function(el) {
      arrayChecked.push(el);
    });
  } else {
    if(errorMsg) console.error(errorMsg);
  }
  return arrayChecked;
}

// 如果是陣列或是物件回傳true，其他基本型別回傳false
export function isMultiple(value){
  if(Array.isArray(value) || isObject(value)) return true;
  else return false;
}

export function isInViewPort ( el, downPreLength, upPreLength ) {
  var downPreLength = downPreLength || 0;
  var upPreLength = upPreLength || downPreLength || 0;
  var viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // getBoundingClientRect().top 表示元素頂部距離視窗頂部的距離，隨著往下滾會縮小當等於0時頂碰頂
  var top = el.getBoundingClientRect() && el.getBoundingClientRect().top;
  // 當往下滾時元素頂部距離視窗頂部距離<=視窗高時，表示進入viewport，給個參數可以微調
  var scrollDownInViewPort = top <= ( viewPortHeight + downPreLength );
  // getBoundingClientRect().bottom 表示元素底部距離視窗頂部的距離，隨著往下滾會縮小當等於0時底碰頂，之後消失
  var bottom = el.getBoundingClientRect() && el.getBoundingClientRect().bottom;
  // 反過來說當元素底部向上滾時大於0時則進入viewport，給個參數可以微調
  var scrollUpInViewPort = bottom + upPreLength >= 0;

  // console.log( scrollDownInViewPort, scrollUpInViewPort);
  return scrollDownInViewPort && scrollUpInViewPort;
}
