export function detectWindowWidth(width, functionWeb, functionMobile) {
  var windowWidth = document.body.clientWidth;
  if (windowWidth >= width) {
    if (typeof functionWeb === 'function') return functionWeb();
  } else {
    if (typeof functionMobile === 'function') return functionMobile();
  }
}
// e.g. detectWindowWidth(768, null, function(){functionMobile();});

export function detectApp(toDoInWebview, toDoInBrowser) {
  var isUiWebview =
    /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
      navigator.userAgent
    );
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
  if (navigator.appName.indexOf('Internet Explorer') != -1) {
    // not IE10, IE11
    var badBrowser = navigator.appVersion.indexOf('MSIE 1') == -1;
    if (badBrowser) return true;
    else return false;
  } else return false;
}
// e.g. if (isIE9()) {}

export function isIE() {
  // 可偵測到IE11以下(不包含EDGE和新EDGE)
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) return true;
  else return false;
}
// e.g. if (isIE()) {}

export function isApp() {
  var isUiWebview =
    /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
      navigator.userAgent
    );
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

export function isNeedSliderRWD(
  width,
  sliderId,
  initLengthWeb,
  initLengthMobile
) {
  return detectWindowWidth(
    width,
    function () {
      return isNeedSlider(sliderId, initLengthWeb);
    },
    function () {
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
  var finalLink = isApp()
    ? appLink
    : isWindowWidth(width)
    ? webLink
    : mobileLink;
  if (!mobileLink) mobileLink = webLink;

  return finalLink;
}
// e.g. makeLink(960, appLink, webLink, mobileLink);

// 偵測img是否載入完成，並回調
export function detectImageLoaded(path, callback) {
  var image = new Image();
  image.src = path;

  if (image.complete) {
    // 圖片已經被載入
    callback(image);
  } else {
    // 如果圖片未被載入，則設定載入時的回調
    image.onload = function () {
      callback(image);
    };
  }
}

// 偵測scroll停止並callback
// callback接受兩種參數：如果是function，則當停止時會執行callback function，若要判斷是否停止給一個return true的function就會執行
// 另一種是給物件帶有五個狀況: 一開始、開始scroll、上滾時、下滾時、scroll停止時，要執行的function，會在符合狀況時執行對應function
// callObject = {callInit: callInit, callStartScroll: callStartScroll, callScrollUp: callScrollUp, callScrollDown: callScrollDown, callBack: callBack}
// 可指定scroll停止後的delay回應時間，預設500毫秒，代表scroll停止後+500毫秒執行callback(一定要給時間差才能偵測，時間越短效能越差)
export function detectScrollStop(callObject, delayTime) {
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
        var paramObject = callObject;
        if (typeof callObject.callBack === 'function') {
          callObject.callBack();
        }
        break;
      case 'undefined':
        break;
    }
  }

  // callInit
  if (paramObject && typeof paramObject.callInit === 'function')
    paramObject.callInit();

  document.onscroll = function () {
    // callStartScroll
    if (paramObject && typeof paramObject.callStartScroll === 'function')
      paramObject.callStartScroll();

    if (posNextScroll - posPrevScroll < 0) {
      // 下滾
      if (paramObject && typeof paramObject.callScrollDown === 'function')
        paramObject.callScrollDown();
    } else if (posNextScroll - posPrevScroll > 0) {
      // 上滾
      if (paramObject && typeof paramObject.callScrollUp === 'function')
        paramObject.callScrollUp();
    }

    clearTimeout(timer);
    timer = setTimeout(isScrollEnd, delayTime);
    posPrevScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
  };

  function isScrollEnd() {
    posNextScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

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
  var actualTop = el.offsetTop;
  var current = el.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

// 執行可以取得scroll後螢幕上緣距離頂部高度
export function getScrollTop() {
  var bodyTop = 0;
  if (typeof window.pageYOffset != 'undefined') {
    bodyTop = window.pageYOffset;
  } else if (
    typeof document.compatMode != 'undefined' &&
    document.compatMode != 'BackCompat'
  ) {
    bodyTop = document.documentElement.scrollTop;
  } else if (typeof document.body != 'undefined') {
    bodyTop = document.body.scrollTop;
  }
  /* 回傳出捲動後的高度值 */
  return bodyTop;
}

export function isMonth(month) {
  var dateNow = new Date();
  if (dateNow.getMonth() === Number(month) - 1) return true;
  else return false;
}

export function isDate(dateFrom, dateTo) {
  var dateNow = new Date();
  if (dateTo === undefined) {
    if (dateNow.getDate() === dateFrom) return true;
    else return false;
  } else {
    if (
      dateNow.getDate() >= Number(dateFrom) &&
      dateNow.getDate() <= Number(dateTo)
    )
      return true;
    else return false;
  }
}

export function isLaterThan(date) {
  var dateNow = new Date();

  if (dateNow > date) return true;
  else return false;
}

// 檢查是否是物件
export function isObject(detectSource, errorMsg) {
  if (typeof detectSource !== 'object') {
    if (errorMsg) console.error(errorMsg);
    return false;
  } else if (Array.isArray(detectSource) || detectSource === null) {
    if (errorMsg) console.error(errorMsg);
    return false;
  } else return true;
}

// 偵測來源是字串或是陣列，並且回傳陣列。如果給的是字串直接加在陣列第一個，如果給的是陣列則複製一份回傳
// 最後可以設定是否要插入defaultValue，預設為false，就是給定的字串中會取代defaultValue，設為true則為插入
// isInsertDefaultValue設為true常見的場合就是插入預設的className避免取代掉關鍵如輪播的預設className
export function detectStringOrArray(
  data,
  defaultValue,
  errorMsg,
  isInsertDefaultValue
) {
  var arrayChecked = [];
  var dataType = typeof data;
  if (dataType === 'undefined') {
    if (defaultValue) arrayChecked.push(defaultValue);
  } else if (dataType === 'string') {
    if (isInsertDefaultValue) arrayChecked.push(defaultValue);
    arrayChecked.push(data);
  } else if (Array.isArray(data)) {
    if (isInsertDefaultValue) arrayChecked.push(defaultValue);
    data.forEach(function (el) {
      arrayChecked.push(el);
    });
  } else {
    if (errorMsg) console.error(errorMsg);
  }
  return arrayChecked;
}

// 如果是陣列或是物件回傳true，其他基本型別回傳false
export function isMultiple(value) {
  if (Array.isArray(value) || isObject(value)) return true;
  else return false;
}

export function isInViewPort(el, downPreLength, upPreLength) {
  var downPreLength = downPreLength || 0;
  var upPreLength = upPreLength || downPreLength || 0;
  var viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  // getBoundingClientRect().top 表示元素頂部距離視窗頂部的距離，隨著往下滾會縮小當等於0時頂碰頂
  var top = el.getBoundingClientRect() && el.getBoundingClientRect().top;
  // 當往下滾時元素頂部距離視窗頂部距離<=視窗高時，表示進入viewport，給個參數可以微調
  var scrollDownInViewPort = top <= viewPortHeight + downPreLength;
  // getBoundingClientRect().bottom 表示元素底部距離視窗頂部的距離，隨著往下滾會縮小當等於0時底碰頂，之後消失
  var bottom = el.getBoundingClientRect() && el.getBoundingClientRect().bottom;
  // 反過來說當元素底部向上滾時大於0時則進入viewport，給個參數可以微調
  var scrollUpInViewPort = bottom + upPreLength >= 0;

  // console.log( scrollDownInViewPort, scrollUpInViewPort);
  return scrollDownInViewPort && scrollUpInViewPort;
}

export function isMobile(userAgent) {
  var result = false;
  if (userAgent == null || userAgent.length == 0) {
    userAgent = '';
  }
  if (userAgent.length >= 4) {
    if (userAgent.match('.*(android.+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)'+'|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket'+'|psp|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino).*') || userAgent.substring(0, 4).match('1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)'+'|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )'+'|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell'+'|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)'+'|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\'+'-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht'+'(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|'+'im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|'+'le(no|xi)|lg( g|\\/(k|l|u)|50|54|e\\-|e\\/|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|'+'xo)|mc(01|21|ca)|m\\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt'+'(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf'+'|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|'+'pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|'+'qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se'+'(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|'+'sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|'+'t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|'+'5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |'+'nc|nw)|wmlb|wonu|x700|xda(\\-|2|g)|yas\\-|your|zeto|zte\\-')) {
      result = true;
    }
  }
  return result;
}

// FIXME: iOS每個版本能處理的方式不一樣，沒有很完美，setTimeout無論有沒裝app都會觸發，待完成
export function detectInstallApp(schemeUrl, timeout = 25, downloadUrl) {
  var startTime = Date.now();
  var t = setTimeout(function() {
    var endTime = Date.now();

    if (endTime - startTime > timeout + 100) return;
    else alert( '請先裝東森購物app，才會自動跳轉。' );
  }, timeout);
  window.location = schemeUrl;
}

// 早於該日期則則隱藏，最後會回傳早於的話是true
export function earlyDateHide (date, section) {
  // 採用沒到新月份就關掉的方式
  if ( typeof date === 'string' ) var checkPoint = new Date( date );
  else if ( typeof date === 'object' ) var checkPoint = date;

  if ( !isLaterThan( checkPoint ) ) {
    var section = document.querySelector( section );

    section.style.display = 'none';
    return true;
  }
}

// 晚於該日期則則隱藏，最後會回傳晚於的話是true
export function laterDateHide (date, section) {
  // 採用沒到新月份就關掉的方式
  if ( typeof date === 'string' ) var checkPoint = new Date( date );
  else if ( typeof date === 'object' ) var checkPoint = date;

  if ( isLaterThan( checkPoint ) ) {
    var section = document.querySelector( section );

    section.style.display = 'none';
    return true;
  }
}

// 判斷requestAnimationFrame的函式(IE9以下才需要)
export function detectRaf (callback) {
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  if ( raf ) return raf( callback );
  else return callback();
}