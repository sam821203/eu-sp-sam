window.dataSp2u = [
  // webHref是大小網連結、appHref是app連結、imgSrc是圖片絕對路徑，前面請填這包所在的網址
  // intro用在滑鼠移到連結上會出現的資訊以及SEO，不填畫面正常，但是為了UX和SEO，建議填，可以複製貼上品名即可
  // 沒有app的話appHref請不要空白，請貼與webHref同樣的網址即可。可以防止FB瀏覽器等偽裝成app瀏覽器導致判斷走到app那邊
  // ====================================== 手動編輯區開始 ======================================
  {
    webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201905/SP_1104278/w/index.html",
    appHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201905/SP_1104278/w/index.html",
    imgSrc: "640x280-u-1.b49774be.jpg",
    intro: "新會員首購登記送100"
  },
  {
    webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104411/w/index.html",
    appHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104411/w/index.html",
    imgSrc: "640x280-u-2.8dd4532b.jpg",
    intro: "萊爾富送好禮"
  },
  // ====================================== 手動編輯區結束 ======================================
];

makeSliderDOM("bnGroupW2m1Two", dataSp2u);

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