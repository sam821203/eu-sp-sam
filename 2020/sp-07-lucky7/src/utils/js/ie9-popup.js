import { isIE9 } from 'utils/js/detect.js'

function makeIE9Popup() {
  // 檢測是否為ie9，不是就不執行
  // if (!isIE9()) return false;

  var alertText = "<p>您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7。隨之而來舊的作業系統與瀏覽器將會有被入侵和攻擊的風險。為了提升您購物時的安全性與便利性，我們停止對Windows 7以下版本作業系統Vista隨附的瀏覽器Internet Explorer 9 (IE9)及其前代版本的支援，<strong>我們將無法保證這些瀏覽器畫面與功能的健全以及購物的安全性</strong>。建議您使用谷歌(Google)提供的、全球市佔率60%以上的免費瀏覽器Google Chrome：</p><a href='https://www.google.com/intl/zh-TW/chrome/' style='display: block; text-align: center;'>https://www.google.com/intl/zh-TW/chrome/</a><p>或是使用手機版本：</p><img id='qrcodeImg' src='' style='display: block; margin-left: auto; margin-right: auto; width: 15%;'><a id='btnAgree' href='' style='display: block; margin-left: auto; margin-right: auto; padding: 0.5em; width: 14em; color: #fff; background-color: #cc1e05; border-radius: 10px; text-align: center;'>我已知悉，但還是想試試看</a>";

  var maskElement = document.createElement('section');
  var alertElement = document.createElement('div');

  alertElement.innerHTML = alertText;

  alertElement.style = "position: fixed; z-index: 6001; top: 25%; left: 0; right: 0; margin: auto; padding: 20px; width: 80%; background-color: #fbfdfd; font-size: 24px;"
  maskElement.style = "position: fixed; z-index: 6000; top: 0; left: 0; width: 100%; height: 100vh; background-color: rgba(0, 0, 0, .8); overflow: hidden;";

  maskElement.id = "alertSection";
  maskElement.appendChild(alertElement);
  document.body.appendChild(maskElement);

  var etmallQrcode = "data:image/jpeg;base64,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";

  var umallQrcode = 'data:image/jpeg;base64,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';

  // 要在append到body後才能get id
  var alertSection = document.getElementById('alertSection');
  var btnAgree = document.getElementById('btnAgree');
  var qrcodeImg = document.getElementById('qrcodeImg');

  // 判斷網址決定塞哪個qrcode(不是umall就都秀etmall)
  var detectLink = location.href.indexOf("u-mall") == -1;
  
  qrcodeImg.src = detectLink ? etmallQrcode : umallQrcode;

  // 按按鈕移除遮罩
  btnAgree.addEventListener('click', function(e){
    e.preventDefault();

    document.body.removeChild(alertSection);
  })

  
}

export var notSupportIE9Popup = makeIE9Popup();
