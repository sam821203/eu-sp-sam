window.dataSp = [
  // webHref是大小網連結、appHref是app連結、imgSrc是圖片絕對路徑，前面請填這包所在的網址
  // intro用在滑鼠移到連結上會出現的資訊以及SEO，不填畫面正常，但是為了UX和SEO，建議填，可以複製貼上品名即可
  // 沒有app的話appHref請不要空白，請貼與webHref同樣的網址即可。可以防止FB瀏覽器等偽裝成app瀏覽器導致判斷走到app那邊
  // ====================================== 手動編輯區開始 ======================================
  {
    webHref: "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104109/w/index.html",
    appHref: "a",
    imgSrc: "https://media.etmall.com.tw/XML/AdvImage/2019/04/6562_20190423154551_652/640x280-154544133.jpg",
    intro: "DeMon Q彈飲36盒送金元寶"
  },
  {
    webHref: "https://www.u-mall.com.tw/p/61246",
    appHref: "b",
    imgSrc: "https://media.etmall.com.tw/XML/AdvImage/2019/04/6563_20190419144935_130/640x280 (1)-182413536.jpg",
    intro: "華陀扶元堂 六味龜鹿膠原錠"
  },
  // ====================================== 手動編輯區結束 ======================================
], e("bnGroupW2m1", dataSp);

function e(e, n) {
  var a = document.getElementById(e);
  n.forEach(function(e) {
    var n = document.createElement("a"),
      i = document.createElement("img");
    n.title = e.intro, n.href = t(e), i.src = e.imgSrc, i.alt = e.intro, n.appendChild(i), a.appendChild(n)
  })
}

function t(e) { return /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent) ? e.appHref : e.webHref }