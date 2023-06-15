import { isWindowWidth } from 'utils/js/detect.js'

// 1. 讓data只要填銷編就能自己填商品圖片 
// 2. 正常只要給dataSource和targetImgElement，預設會自動檢查銷編key為productNumber的並填入，不管有沒有銷編key，如果有會imgSrc就會走這邊、以及如果有imgAlt會填上img tag的alt屬性，沒有則預設抓name當alt
// 3. 把isLazyLoad設成true會把src改填在data-src、不填alt避免叉燒包出現(預設關閉)
// 4. 預設在寬768以上用XL的圖片size、以下用L，要修改可以填入imgSizeArray：[windowWidth, webSize, mobileSize]
// 5. 可以給custom陣列： customArray = [productNumberKey, imgSrcKey, altKey]決定要抓data中何種屬性當作目標
// 連結，注意因為是陣列，順序要對，如果屬性不對會在console中報錯
// 6. 為了可以一次填src與alt，採用將目標img tag傳入function，而不用return資料的方式
export function buildProductNumberImg(dataSource, targetImgElement, isLazyLoad, imgSizeArray, customArray) {

  // 填連結確認來源是銷編且有填
  var dataSource = dataSource || {};
  var targetImgElement = targetImgElement || {};
  // console.log(dataSource);
  var isLazyLoad = isLazyLoad || false;

  if (Array.isArray(customArray)) {
    var productNumberKey = customArray[0] ? customArray[0] : 'productNumber';
    var imgSrcKey = customArray[1] ? customArray[1] : 'imgSrc';
    if(!isLazyLoad) var altKey = customArray[2] ? customArray[2] : 'imgAlt';
    // console.log(productNumberKey, imgSrcKey, altKey);

  } else {
    var productNumberKey = 'productNumber';
    var imgSrcKey = 'imgSrc';
    if(!isLazyLoad) var altKey = 'name';
  }

  if (Array.isArray(imgSizeArray)) {
    var breakpoint = imgSizeArray[0] ? imgSizeArray[0] : 768;
    var webSize = imgSizeArray[1] ? imgSizeArray[1] : 'XL';
    var mobileSize = imgSizeArray[2]? imgSizeArray[2] : 'L';
    // console.log(breakpoint, webSize, mobileSize);
  } else {
    var breakpoint = 768;
    var webSize = 'XL';
    var mobileSize = 'L';    
  }

  if (dataSource.hasOwnProperty(productNumberKey) && typeof dataSource[productNumberKey] === 'number' && !dataSource.hasOwnProperty(imgSrcKey)) {
    var itemSrcPrefix = 'https://media.etmall.com.tw/NXimg/00';
    var itemSize = isWindowWidth(breakpoint) ? webSize : mobileSize; 
    var itemSrcPost = '-1_' + itemSize + '.jpg';

    var productNumber = dataSource[productNumberKey];
    var pre4Number = productNumber.toString().slice(0, 4);
    var targetImgSrc = itemSrcPrefix + pre4Number + '/' + productNumber + '/' + productNumber + itemSrcPost;
  } else if (dataSource.hasOwnProperty(imgSrcKey)){
    var targetImgSrc = dataSource[imgSrcKey];
    // console.log(targetImgSrc)
  } else {
    console.error('未指定銷售編號或是圖片來源');
  }

  if(isLazyLoad) {
    targetImgElement.dataset.src = targetImgSrc;
  } else {
    targetImgElement.src = targetImgSrc;
    if (dataSource.hasOwnProperty(altKey)) targetImgElement.alt = dataSource[altKey];
  }

  
}