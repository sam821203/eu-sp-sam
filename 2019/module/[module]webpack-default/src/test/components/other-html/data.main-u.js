window.dataMainU = [
  // webHref是大小網連結、appHref是app連結、imgSrc是圖片絕對路徑，前面請填這包所在的網址
  // intro用在滑鼠移到連結上會出現的資訊以及SEO，不填畫面正常，但是為了UX和SEO，建議填，可以複製貼上品名即可
  // 沒有app的話appHref請不要空白，請貼與webHref同樣的網址即可。可以防止FB瀏覽器等偽裝成app瀏覽器導致判斷走到app那邊
  // ====================================== 手動編輯區開始 ======================================
  {
    webHref: "https://www.etmall.com.tw/i/2230532",
    appHref: "a",
    imgSrc: "3ca-pt1.80bbec24.jpg",
    intro1: "iPad新機降臨",
    intro2: "滿額抽好禮",
  },
  {
    webHref: "https://www.u-mall.com.tw/p/61246",
    appHref: "b",
    imgSrc: "3cb-pt1.95e8acdf.jpg",
    intro1: "DeMon_蜂王美",
    intro2: "姬Q彈飲",
  },
  {
    webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104109/w/index.html",
    appHref: "a",
    imgSrc: "e-pt1.ac9ac008.jpg",
    intro1: "日韓品牌冰箱聯合大賞",
    intro2: "最高送1000東森幣",
  },
  {
    webHref: "https://www.u-mall.com.tw/p/61246",
    appHref: "b",
    imgSrc: "b-pt1.8846f31f.jpg",
    intro1: "美麗母親節",
    intro2: "愛媽咪買1送1",
  },
  {
    webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104109/w/index.html",
    appHref: "a",
    imgSrc: "m-pt1.813bf190.jpg",
    intro1: "DeMonQ彈飲",
    intro2: "大方送豪禮",
  },
  {
    webHref: "https://www.u-mall.com.tw/p/61246",
    appHref: "b",
    imgSrc: "f-pt1.1b91b10e.jpg",
    intro1: "寵愛媽咪",
    intro2: "內衣$268up",
  },
  {
    webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104109/w/index.html",
    appHref: "a",
    imgSrc: "h-pt1.e718b6f8.jpg",
    intro1: "LifeGear",
    intro2: "指定品85折",
  },
  {
    webHref: "https://www.u-mall.com.tw/p/61246",
    appHref: "b",
    imgSrc: "t-pt1.56378e47.jpg",
    intro1: "帶媽媽去旅行",
    intro2: "買旅遊送600",
  },
  // ====================================== 手動編輯區結束 ======================================
];

makeSliderDOM("promoW4m2", dataMainU);

function makeSliderDOM(wrapId, dataSrc) {
  var eventZone = document.getElementById(wrapId);
  eventZone.innerHTML = "";

  dataSrc.forEach(function(el) {
    var eventAnchor = document.createElement('a');
    var eventImg = document.createElement('img');
    var evevntBg = document.createElement('img');
    var eventLi = document.createElement('li');
    var eventDiv = document.createElement('div');
    var eventP = document.createElement('p');

    eventLi.classList.add('banner__item');
    evevntBg.src = "ptbg.9c73063a.png";
    eventAnchor.target = "_blank";
    eventAnchor.title = el.intro1 + ' ' + el.intro2;
    eventAnchor.href = detectApp(el);
    eventImg.src = el.imgSrc;
    eventImg.alt = el.intro1 + ' ' + el.intro2;
    eventP.innerHTML = el.intro1 +'<br>' + el.intro2;
    eventDiv.appendChild(eventImg);
    eventAnchor.appendChild(eventDiv);
    eventAnchor.appendChild(eventP);
    eventLi.appendChild(eventAnchor);
    eventLi.appendChild(evevntBg);
    eventZone.appendChild(eventLi);
  });
}

function detectApp(el) {
  var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
  if (isUiWebview) return el.appHref;
  else return el.webHref;
}