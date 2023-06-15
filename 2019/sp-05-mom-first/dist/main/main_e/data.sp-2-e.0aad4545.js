window.dataSp2e = [
  // webHref是大小網連結、appHref是app連結、imgSrc是圖片絕對路徑，前面請填這包所在的網址
  // intro用在滑鼠移到連結上會出現的資訊以及SEO，不填畫面正常，但是為了UX和SEO，建議填，可以複製貼上品名即可
  // 沒有app的話appHref請不要空白，請貼與webHref同樣的網址即可。可以防止FB瀏覽器等偽裝成app瀏覽器導致判斷走到app那邊
  // ====================================== 手動編輯區開始 ======================================
  {
    webHref: "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1107517/w/index.html",
    appHref: "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201905%2fSP_1107780%2fm%2fapp.html&t=5%E6%9C%88%E4%BB%BD%E7%99%BB%E5%85%A5%E8%A1%A8%E5%96%AE%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
    imgSrc: "640x280-e-1.b0221873.jpg",
    intro: "APP超級會員首購有禮"
  },
  {
    webHref: "https://www.etmall.com.tw/XML/content/DMSetting/Final/201904/SP_1107707/w/index.html",
    appHref: "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201904%2fSP_1107707%2fm%2fapp.html&t=0424-0513_%E5%85%A8%E5%AE%B6%E8%B3%BC%E7%89%A9%E8%B6%A3%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
    imgSrc: "640x280-e-2.3976a28a.jpg",
    intro: "全家購物趣消費登記送好禮"
  },
  // ====================================== 手動編輯區結束 ======================================
];

makeSliderDOM("bnGroupW2m1Two", dataSp2e);

function makeSliderDOM(wrapId, dataSrc) {
  var eventZone = document.getElementById(wrapId);
  eventZone.innerHTML = "";

  dataSrc.forEach(function (el) {
    var eventAnchor = document.createElement('a');
    var eventImg = document.createElement('img');

    // eventAnchor.target = "_blank";
    eventAnchor.title = el.intro;
    eventAnchor.href = detectApp(el);
    eventImg.src = el.imgSrc;
    eventImg.alt = el.intro;

    eventAnchor.appendChild(eventImg);
    eventZone.appendChild(eventAnchor);
  });
}

function detectApp(el) {
  var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
  if (isUiWebview) return el.appHref;
  else return el.webHref;
}