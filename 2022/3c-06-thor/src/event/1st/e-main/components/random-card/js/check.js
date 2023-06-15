// 此檔案壓縮混淆後在asset處直接引入資料夾、並在index.pug直接用script標籤引入，此處只放未壓縮前的程式碼備份

var checkApp = function () {
  var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
  if (isUiWebview) return true;
  else return false;
}

// 檢查是app的話在這支檔案後面(app-bundle前面)直接插入data-card.js、controller.js
// 以此方式可避免在大網時直接在資料夾內找到data-card.js(但這隻檔案還是會被看到，因此壓縮混淆做抵抗)

// TODO: dev時去assets底下的check.js改成if(!e())就能在大小網使用
var check = document.getElementById('check');

if (checkApp()) {
  var dataScript = document.createElement('script');
  var controller = document.createElement('script');

  dataScript.id = 'dataScript';
  dataScript.src = 'data-card.js';
  controller.id = 'controller';
  controller.src = 'controller.js';

  document.body.insertBefore(dataScript, check.nextSibling);

  var dataScriptEl = document.getElementById('dataScript');

  document.body.insertBefore(controller, dataScriptEl.nextSibling);

} else {
  document.body.removeChild(check);
}