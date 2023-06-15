// 與使用var意思相同，window 全域變數
window.dataSlider = [
    // webHref:  大小網連結
    // appHref:  app連結 
    // imgSrc :  圖片絕對路徑，前面請填這包所在的網址
    // intro  :  用在滑鼠移到連結上會出現的資訊以及SEO，不填畫面正常，但是為了UX和SEO，建議填，可以複製貼上品名即可
  {
    webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104109/w/index.html',
    appHref: 'a',
    imgSrc: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1104145/w/BN-1.png',
    intro: 'DeMon Q彈飲36盒送金元寶',
  },
  {
    webHref: 'https://www.u-mall.com.tw/p/61246',
    appHref: 'b',
    imgSrc: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1104145/w/BN-2.png',
    intro: '華陀扶元堂 六味龜鹿膠原錠',
  },
  {
    webHref: 'https://www.u-mall.com.tw/c2/44237',
    appHref: 'c',
    imgSrc: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1104145/w/BN-3.png',
    intro: '陳芳語 HUAWEI nova 4e',
  },
  {
    webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104107/w/index.html',
    appHref: 'd',
    imgSrc: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1104145/w/BN-4.png',
    intro: '五月天 HITACHI日立 527公升日本原裝六門變頻冰箱 RHW530JJ/R-HW530JJ',
  },
  {
    webHref: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201904/SP_1104089/w/index.html',
    appHref: 'e',
    imgSrc: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1104145/w/BN-5.png',
    intro: '【EASY SHOP】花香戀曲 無鋼圈A-D罩內衣(藍戀灰)',
  },
  {
    webHref: 'https://www.u-mall.com.tw/c3/107218',
    appHref: 'f',
    imgSrc: 'https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1104145/w/BN-6.png',
    intro: '輝葉 Werun小智跑步機',
  },
];

makeSliderDOM();

function makeSliderDOM() {

  // 抓取所有的className '.carousel__wrap'
  var slider = document.querySelectorAll('.carousel__wrap');

  // 計算有幾個carousel__wrap 並做防呆，如果資料數量跟className數量不相同時，跳出錯誤提示
  // if(slider.length !== dataSlider.length) {
  //   return console.error('')
  // }
  if(slider.length !== dataSlider.length) return console.error('slider.length & dataSlider.length not the same!');



  // 跑forEach迴圈 el --> data變數 , i --> 長度
  dataSlider.forEach( function(el, i) {
    // 新增tags
    var sliderAnchor = document.createElement('a');
    var sliderImg = document.createElement('img');
    
    // 設定屬性
    sliderAnchor.target = "_blank";
    sliderAnchor.title = el.intro;

    // 下面fuction 判斷是app還是大網網址
    sliderAnchor.href = detectApp(el);
    sliderImg.src = el.imgSrc;
    sliderImg.alt = el.intro;

    // 將塞好的值丟進去
    sliderAnchor.appendChild(sliderImg);
    slider[i].appendChild(sliderAnchor);
  });
  return true;
}

function detectApp(el) {
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);
    if (isUiWebview) return el.appHref;
    else return el.webHref;
}