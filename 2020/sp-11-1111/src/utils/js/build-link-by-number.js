import { makeLink } from 'utils/js/detect.js'
import { checkProductNumberData } from 'utils/js/check-data.js'

// 此為新的依銷編建立link函式，更新的有：custom設定使用物件設定、銷售編號可以帶入純字串或是數字
// 改變的有此函式是回傳一個陣列，陣列[0]是回傳網址、陣列[1]為回傳title

// customObject預設接收各種屬性(key)的設定：
// productNumberKey是銷編的屬性來源，預設為productNumberKey
// webLinkKey是客製化大網網址的屬性來源，預設為webLinkKey
// mobileLinkKey是客製化小網網址的屬性來源，預設為mobileLinkKey
// appLinkKey是客製化APP網址的屬性來源，預設為appLinkKey
// titleKey是客製化a連結中title的屬性來源，預設為name

export function buildProductNumberLink(dataSource, customObject) {

  // 確認有資料、格式正確就執行callback(因在build-dynamic-by-number會檢查isDataSource，所以設false跳過檢查)
  return checkProductNumberData(dataSource, customObject, buildLinkByData, false);

}

// 接收checkProductNumberData回傳的確認後物件，裡面會是{productNumber: 數字}或是原生的客製連結內容
function buildLinkByData(checkedData, checkedCustomObject){

  // 確認customObject中productNumberKey為何
  var productNumberKey = checkedCustomObject.productNumberKey || 'productNumber';

  // 客製化連結的key
  var webLinkKey = checkedCustomObject.webLinkKey || 'webLink';
  var mobileLinkKey = checkedCustomObject.mobileLinkKey || 'mobileLink';
  var appLinkKey = checkedCustomObject.appLinkKey || 'appLink';
  var titleKey = checkedCustomObject.titleKey || 'name'; // a tag的title屬性

  // 最終連結的變數
  var targetLinkWeb;
  var targetLinkMobile;
  var targetLinkApp;
  var targetLinkTitle;

  // console.log(checkedData[webLinkKey], checkedData[mobileLinkKey], checkedData[appLinkKey]);

  // 如果有客製連結則會走客制連結，否則走銷編預設連結
  if(checkedData[webLinkKey]) {
    // console.log('link: custom');

    targetLinkWeb = checkedData[webLinkKey];
    targetLinkMobile = checkedData[mobileLinkKey] ? checkedData[mobileLinkKey] : targetLinkWeb;
    targetLinkApp = checkedData[appLinkKey] ? checkedData[appLinkKey] : targetLinkMobile;

  } else if(checkedData[productNumberKey]) {
    // console.log('link: PN');

    // 設定連結的預設值
    var defaultLinkPrefixWeb = 'https://www.etmall.com.tw/i/';
    var defaultLinkPrefixMobile = 'https://m.etmall.com.tw/Product/';
    var defaultLinkPrefixApp = 'etmall://open?pgid=1&gd=';

    targetLinkWeb = defaultLinkPrefixWeb + checkedData.productNumber;
    targetLinkMobile = defaultLinkPrefixMobile + checkedData.productNumber;
    targetLinkApp = defaultLinkPrefixApp + checkedData.productNumber;

  } else console.error('網址填寫錯誤：沒有網址來源，客製連結至少要填web網址');


  // 設定link的title
  targetLinkTitle = checkedData[titleKey] || ""; // 沒有填title就預設空的

  return [makeLink(960, targetLinkApp, targetLinkWeb, targetLinkMobile), targetLinkTitle];

}