import { isIE } from 'utils/js/detect.js'

function makeIEAlert() {
  // 檢測是否為ie，不是就不執行
  if (!isIE()) return false;

  // 判斷網址(不是umall就都秀etmall)
  var detectLink = location.href.indexOf("u-mall") == -1;
  var etmallText = "東森會員";
  var umallText = "Her森森會員"
  var memberText = detectLink ? etmallText : umallText;

  var alertText = "您好，微軟（Microsoft）已於2022年6月15日停止支援 Windows 10 對 Internet Explorer 11（IE11）的支援。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對 Internet Explorer 11（IE11）瀏覽器及其前代版本的支援。\n\n建議您立即移轉至 Microsoft Edge 瀏覽器、或是安裝其它的瀏覽器。";


  alert(memberText + alertText);
}

export var notSupportIEAlert = makeIEAlert();
