import { isIE9 } from 'utils/js/detect.js'

function makeIE9Alert() {
  // 檢測是否為ie9，不是就不執行
  if (!isIE9()) return false;

  // 判斷網址決定塞哪個qrcode(不是umall就都秀etmall)
  var detectLink = location.href.indexOf("u-mall") == -1;
  var etmallText = "東森會員";
  var umallText = "森森會員"
  var memberText = detectLink ? etmallText : umallText;

  var alertText = "您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。";


  alert(memberText + alertText);
}

export var notSupportIE9Alert = makeIE9Alert();
