// 此檔案壓縮混淆後在asset處直接引入資料夾、並在index.pug直接用script標籤引入，此處只放未壓縮前的程式碼備份
// 由此檔案引入data與controller，避免被直接翻到，但這隻檔案仍會被看倒
var check = document.getElementById( 'check' );
var dataScript = document.createElement('script');
var controller = document.createElement('script');

dataScript.id = 'dataScript';
dataScript.src = 'data-scratch.js';
controller.id = 'controller';
controller.src = 'controller.js';

document.body.insertBefore(dataScript, check.nextSibling);

var dataScriptEl = document.getElementById('dataScript');

document.body.insertBefore(controller, dataScriptEl.nextSibling);