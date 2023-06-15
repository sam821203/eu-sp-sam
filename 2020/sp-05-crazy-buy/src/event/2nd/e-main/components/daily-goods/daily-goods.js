import { makeLink } from 'utils/js/detect.js'

export var initdailyGoods = dailyGoods();

function dailyGoods() {
  if ( typeof dailyData === 'undefined') return false;

  var heroGoodsAnchor = document.querySelector('#goodsHero a');
  var heroGoodsImg = document.querySelector('#goodsHero img');
  var nextGoodsAnchors = document.querySelectorAll('#goodsPromo a');
  var nextGoodsImgs = document.querySelectorAll('#goodsPromo img');
  var nextGoodsName = document.querySelectorAll('#goodsPromo .item__name');
  var nextGoodsPrePrice = document.querySelectorAll('#goodsPromo .price--pre');
  var nextGoodsPreDate = document.querySelectorAll('#goodsPromo .date--pre');
  var nextGoodsPostDate = document.querySelectorAll('#goodsPromo .date--post');

  // 5/11 - 5/25 每日換品
  var startDay = new Date().getDate();
  var startHour = new Date().getHours();
  var startIndex;

  if (startDay < 11 || startDay > 25) return;
  
  if (startHour >= 10) {
    startIndex = startDay - 11; // 11號是index 0; 10點以後是index
  } else {
    startIndex = startDay - 11 - 1; // 11號是index 0; 10點以前是index -1
  };

  var todayData = dailyData[startIndex];


  // 填上todayData的資料到heroGoods
  // 連結
  buildLink(todayData, heroGoodsAnchor);
  // 圖片
  heroGoodsImg.src = 'daily-hero-' + (startIndex + 1) + '.png';

  // 填後兩天Goods資訊
  for (var i = 0; i < 2; i++) {
    var nextData = dailyData[startIndex + 1 + i] // nextday是隔天開始，所以是startIndex + 1
    // 連結
    buildLink(nextData, nextGoodsAnchors[i]);

    // 圖片：圖片編號從1開始所以多+1、nextday也是多+1開始所以共+2
    nextGoodsImgs[i].src = 'product-' + (startIndex + i + 2) + '.png';
    nextGoodsImgs[i].alt = nextData.name;

    // 品名
    nextGoodsName[i].innerHTML = nextData.name;
    // pre價格
    nextGoodsPrePrice[i].innerHTML = nextData.prePrice;
    // 日期前敘述(粗體)
    nextGoodsPreDate[i].innerHTML = nextData.date;
    // 日期後敘述
    nextGoodsPostDate[i].innerHTML = nextData.postText;
  }
}

function buildLink(dataSource, targetAnchor){
  // 讓data只要填銷編：前綴預填  
  // 填連結確認來源是銷編且有填
  var dataSource = dataSource || {};
  var targetAnchor = targetAnchor || {};

  if (dataSource.hasOwnProperty('productNumber') && typeof dataSource.productNumber === 'number') {
    var itemPrefixWeb = 'https://www.etmall.com.tw/i/';
    var itemPrefixMobile = 'https://m.etmall.com.tw/Product/';
    var itemPrefixApp = 'etmall://open?pgid=1&gd=';

    var heroGoodsLinkWeb = itemPrefixWeb + dataSource.productNumber;
    var heroGoodsLinkMobile = itemPrefixMobile + dataSource.productNumber;
    var heroGoodsLinkApp = itemPrefixApp + dataSource.productNumber;

    targetAnchor.href = makeLink(960, heroGoodsLinkApp, heroGoodsLinkWeb, heroGoodsLinkMobile);
  } else {
    // 如果不是銷編就填web、mobile、app
    targetAnchor.href = makeLink(960, dataSource.appLink, dataSource.webLink, dataSource.mobileLink);
  }
  targetAnchor.title = dataSource.name;

}