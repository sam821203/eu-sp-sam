window.dataW2m1 = [
  // webHref是大小網連結、appHref是app連結、imgSrc是圖片絕對路徑，前面請填這包所在的網址
  // intro用在滑鼠移到連結上會出現的資訊以及SEO，不填畫面正常，但是為了UX和SEO，建議填，可以複製貼上品名即可
  // 沒有app的話appHref請不要空白，請貼與webHref同樣的網址即可。可以防止FB瀏覽器等偽裝成app瀏覽器導致判斷走到app那邊
  // ====================================== 手動編輯區開始 ======================================
  {
    webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104109/w/index.html",
    appHref: "a",
    imgSrc: "event-w2m1-item-e-1.91e3e165.png",
    intro: "DeMon Q彈飲36盒送金元寶"
  },
  {
    webHref: "https://www.u-mall.com.tw/p/61246",
    appHref: "b",
    imgSrc: "event-w2m1-item-e-2.3060e95c.png",
    intro: "華陀扶元堂 六味龜鹿膠原錠"
  },
  // ====================================== 手動編輯區結束 ======================================
];

makeSliderDOM("eventW2m1", dataW2m1);

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