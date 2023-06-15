export function detectWindowWidth(width, functionWeb, functionMobile) {
  var windowWidth = document.body.clientWidth;
  if (windowWidth >= width) {
    if (typeof(functionWeb) === "function") return functionWeb();
  } else {
    if (typeof(functionMobile) === "function") return functionMobile();
  }
}
// e.g. detectWindowWidth(768, null, function(){functionMobile();});

export function detectApp(toDoInWebview, toDoInBrowser) {
  var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
  if (isUiWebview) return toDoInWebview;
  else return toDoInBrowser;
}
// e.g. detectApp(el.appHref, el.webhref);