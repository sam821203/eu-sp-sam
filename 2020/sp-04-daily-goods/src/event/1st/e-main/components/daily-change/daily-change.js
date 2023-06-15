import { makeLink } from 'utils/js/detect.js'

export var initdailyChange = dailyChange();

function dailyChange() {
  var dailyPic = document.querySelector('#dailyPromo img');
  var dailyPicAnchor = document.querySelector('#dailyPromo a');
  var dailyWordPic = document.getElementById('dailyWordPic');
  var dailyItemAnchors = document.querySelectorAll('#dailyLink a');
  var dailyItemPics = document.querySelectorAll('#dailyLink img');

  // 星期幾
  var dateWeekNow = new Date().getDay();
  dailyPic.src = 'daily-pic-' + dateWeekNow + '.png';
  dailyWordPic.src = 'daily-word-' + dateWeekNow + '.png';

  // 4/6 - 4/17 每日換品
  var startDay = new Date().getDate();

  if (startDay < 6 || startDay > 17) return;
  
  var startIndex = startDay - 6; //6號是index 0;
  var finalDailyData = dailyData[startIndex];

  // 讓data只要填銷編：前綴預填
  var itemPrefixWeb = 'https://www.etmall.com.tw/i/';
  var itemPrefixMobile = 'https://m.etmall.com.tw/Product/';
  var itemPrefixApp = 'etmall://open?pgid=1&gd=';

  // 上每日優惠的連結(團片只有week0-6，但連結每天不一樣)
  dailyPicAnchor.href = makeLink(960, finalDailyData[0].appLink, finalDailyData[0].webLink, finalDailyData[0].mobileLink);

  // 上每天兩品的圖片與連結
  for(var i = 0; i < 2; i++) {
    // 連結
    var itemFinalLinkWeb = itemPrefixWeb + finalDailyData[i+1];
    var itemFinalLinkMobile = itemPrefixMobile + finalDailyData[i+1];
    var itemFinalLinkApp = itemPrefixApp + finalDailyData[i+1];

    dailyItemAnchors[i].href = makeLink(960, itemFinalLinkApp, itemFinalLinkWeb, itemFinalLinkMobile);

    // 圖片
    dailyItemPics[i].src = 'daily-item-' + (startIndex+1) + '-' + (i+1) + '.png';
  }
}
