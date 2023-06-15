window.dataCommonEvent = [
    // webHref是大小網連結、appHref是app連結、imgSrc是圖片絕對路徑，前面請填這包所在的網址
    // intro用在滑鼠移到連結上會出現的資訊以及SEO，不填畫面正常，但是為了UX和SEO，建議填，可以複製貼上品名即可
    // 沒有app的話appHref請不要空白，請貼與webHref同樣的網址即可。可以防止FB瀏覽器等偽裝成app瀏覽器導致判斷走到app那邊
  {
    webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104109/w/index.html',
    appHref: 'a',
    imgSrc: 'event-item-1.png',
    intro: 'DeMon Q彈飲36盒送金元寶',
  },
  {
    webHref: 'https://www.u-mall.com.tw/p/61246',
    appHref: 'b',
    imgSrc: 'event-item-2.png',
    intro: '華陀扶元堂 六味龜鹿膠原錠',
  },
  {
    webHref: 'https://www.u-mall.com.tw/c2/44237',
    appHref: 'c',
    imgSrc: 'event-item-3.png',
    intro: '陳芳語 HUAWEI nova 4e',
  },
];

makeSliderDOM();

function makeSliderDOM() {
  var eventZone = document.getElementById('eventZone');

  dataCommonEvent.forEach( function(el) {
    var eventAnchor = document.createElement('a');
    var eventImg = document.createElement('img');
    
    eventAnchor.target = "_blank";
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