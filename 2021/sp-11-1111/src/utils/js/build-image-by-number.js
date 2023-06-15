import { isWindowWidth } from 'utils/js/detect.js'
import { checkProductNumberData } from 'utils/js/check-data.js'

// 此為新的依銷編建立image函式，更新的有：custom設定使用物件設定、銷售編號可以帶入純字串或是數字
// 改變的有此函式是回傳一個陣列，陣列[0]是回傳圖片imgSrc、陣列[1]為回傳圖片的alt
export function buildProductNumberImg(dataSource, customObject) {

  // 確認有資料來源正確就執行callback(因在build-dynamic-by-number會檢查isDataSource，所以設false跳過檢查)
  return checkProductNumberData(dataSource, customObject, buildImgByData, false);

}

function buildImgByData(checkedData, checkedCustomObject){
  // 確認customObject中productNumberKey為何
  var productNumberKey = checkedCustomObject.productNumberKey || 'productNumber';

  // 客製化圖片來源的key
  var imgSrcKey = checkedCustomObject.imgSrcKey || 'imgSrc';
  var altKey = checkedCustomObject.altKey || 'name';

  // 最終圖片來源的變數
  var targetImgSrc;
  var targetImgAlt;

  // console.log(checkedData[imgSrcKey]);

  // 如果有客製圖片來源則會走客制圖片來源，否則走銷編預設圖片來源
  if(checkedData[imgSrcKey]) {
    // console.log('img: custom');

    targetImgSrc = checkedData[imgSrcKey];

  } else if(checkedData[productNumberKey]) {
    // console.log('img: PN');

    // 設定圖片來源的預設值
    var imgSizeBreakpoint = checkedCustomObject.imgSizeBreakpoint || 768;
    var imgSizeWebSize = checkedCustomObject.imgSizeWebSize || 'XL';
    var imgSizeMobileSize = checkedCustomObject.imgSizeMobileSize || 'L';

    var itemSrcPrefix = 'https://media.etmall.com.tw/NXimg/00';
    var itemSize = isWindowWidth(imgSizeBreakpoint) ? imgSizeWebSize : imgSizeMobileSize; 
    var itemSrcPost = '-1_' + itemSize + '.jpg';

    var productNumber = checkedData[productNumberKey];
    var pre4Number = productNumber.toString().slice(0, 4);

    targetImgSrc = itemSrcPrefix + pre4Number + '/' + productNumber + '/' + productNumber + itemSrcPost;
  } else console.error('圖片來源填寫錯誤：未指定銷售編號或是圖片來源')


  if(checkedData[altKey]) targetImgAlt = checkedData[altKey];
  else targetImgAlt = "";

  return [targetImgSrc, targetImgAlt];
}