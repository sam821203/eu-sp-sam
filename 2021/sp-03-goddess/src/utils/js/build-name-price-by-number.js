import { checkProductNumberData } from 'utils/js/check-data.js'

// 此為依銷編建立自動更新的tag，使用custom設定使用物件設定、銷售編號可以帶入純字串或是數字
// 此函式是回傳一個陣列，陣列[0]是回傳自動更新銷售編號的品名(name)Tag、
// 陣列[1]為回傳自動更新銷售編號的價格(price)Tag，會自動依照每三位千位數加逗點
// 使用方式為將品名與價格安插在所需要的container tag(如：div)內即可
export function buildProductNumberNamePrice(dataSource, customObject) {

  // 確認有資料、來源正確就執行callback(因在build-dynamic-by-number會檢查isDataSource，所以設false跳過檢查)
  return checkProductNumberData(dataSource, customObject, buildNamePriceByAutoSync, false);

}

function buildNamePriceByAutoSync(checkedData, checkedCustomObject){

  // 確認customObject中productNumberKey為何
  var productNumberKey = checkedCustomObject.productNumberKey || 'productNumber';

  var customNameTag = document.createElement('custom');
  var customPriceTag = document.createElement('custom');

  // if(!checkedData[productNumberKey]) console.error('缺少銷售編號無法自動同步');

  customNameTag.setAttribute('tag', 'GOOD_NAME');
  customNameTag.setAttribute('goodid', checkedData[productNumberKey]);
  customPriceTag.setAttribute('tag', 'GOOD_SALEPRC');
  customPriceTag.setAttribute('goodid', checkedData[productNumberKey]);

  // console.log(customNameTag, customPriceTag);
  return [customNameTag, customPriceTag];

}

