import { makeLink } from 'utils/js/detect.js'

// 讓data只要填銷編：前綴預填  
// 正常只要給dataSource和targetAnchor，預設會自動檢查銷編key為productNumber的並填入，若沒有銷編key，會抓大小網key為webLink、mobileLink、appLink的三個網址、以及如果有linkTitle會填上a tag的title屬性
// 可以給custom陣列： customArray = [productNumberKey, webLinkKey, mobileLinkKey, appLinkKey, titleKey]決定要抓data中何種屬性當作目標連結，注意因為是陣列，順序要對
// 如果屬性不對會在console中報錯
export function buildProductNumberLink(dataSource, targetAnchor, customArray) {

  // 填連結確認來源是銷編且有填
  var dataSource = dataSource || {};
  var targetAnchor = targetAnchor || {};
  // console.log(dataSource);
  

  if (typeof customArray === 'object') {
    var productNumberKey = customArray[0] ? customArray[0] : 'productNumber';
    var webLinkKey = customArray[1] ? customArray[1] : 'webLink';
    var mobileLinkKey = customArray[2] ? customArray[2] : 'mobileLink';
    var appLinkKey = customArray[3] ? customArray[3] : 'appLink';
    var titleKey = customArray[4] ? customArray[4] : 'linkTitle';
    // console.log(productNumberKey, webLinkKey, mobileLinkKey, appLinkKey, titleKey);

  } else {
    var productNumberKey = 'productNumber';
    var webLinkKey = 'webLink';
    var mobileLinkKey ='mobileLink';
    var appLinkKey = 'appLink';
    var titleKey = 'linkTitle';
  }

  if (dataSource.hasOwnProperty(productNumberKey) && typeof dataSource[productNumberKey] === 'number') {
    var itemPrefixWeb = 'https://www.etmall.com.tw/i/';
    var itemPrefixMobile = 'https://m.etmall.com.tw/Product/';
    var itemPrefixApp = 'etmall://open?pgid=1&gd=';

    var targetLinkWeb = itemPrefixWeb + dataSource[productNumberKey];
    var targetLinkMobile = itemPrefixMobile + dataSource[productNumberKey];
    var targetLinkApp = itemPrefixApp + dataSource[productNumberKey];
    } else {

    var targetLinkWeb = dataSource[webLinkKey] ? dataSource[webLinkKey] : 'javascript:void(0)';
    var targetLinkMobile = dataSource[mobileLinkKey] ? dataSource[mobileLinkKey] : 'javascript:void(0)';
    var targetLinkApp = dataSource[appLinkKey] ? dataSource[appLinkKey] : 'javascript:void(0)'; 
  }

  targetAnchor.href = makeLink(960, targetLinkApp, targetLinkWeb, targetLinkMobile);

  if (dataSource.hasOwnProperty(titleKey)) targetAnchor.title = dataSource[titleKey];
}