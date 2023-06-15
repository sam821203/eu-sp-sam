import { isObject } from 'utils/js/detect.js'

// 此為自動填入銷編函式群的共用前置檢查函式

// 檢查有無輸入data來源
export function isDataSource(dataSource){
  // 確認有資料來源(dataSource)
  if(typeof dataSource === 'undefined') return console.error('沒有資料來源');
}

// 檢查客製化選項是否為物件，檢查完如果正常則回傳customObject，沒有客製化物件則回傳空物件
// 使用變數接收： var checkedCustomObject = checkCustomObject(customObject) 
export function checkCustomObject(customObject){

  if(!customObject) {
    return {};
  } else {
    isObject(customObject, '客製化設定請用物件表示');
  }

  return customObject;
}

// 檢查輸入來源中的銷編格式是否正確，正確就執行callback
export function checkProductNumberData(dataSource, customObject, callback) {

  // TODO: 如果直接引入這隻則可以在這檢查dataSource，如果其他地方已經檢查過則可以關掉不用重複檢查
  // isDataSource(dataSource);
  var checkedCustomObject = checkCustomObject(customObject);
  // 建立最終傳入callback物件
  var checkedData;

  // 檢查dataSource格式，是字串或是數字則製作最終物件
  if(typeof dataSource === 'string') {
    var productNumber = Number(dataSource);

    checkedData = {'productNumber': productNumber};
  } else if(typeof dataSource === 'number') {
    var productNumber = dataSource;

    checkedData = {'productNumber': productNumber};
  } else { //是物件則檢查物件內銷編格式並調整統一
    isObject(dataSource, '資料格式不正確');

    // 確認customObject中productNumberKey為何
    var productNumberKey = checkedCustomObject.productNumberKey || 'productNumber';

    // 確認物件內的銷編格式正確
    if(typeof dataSource[productNumberKey] === 'string') {
      var productNumber = Number(dataSource[productNumberKey]);
    } else if(typeof dataSource[productNumberKey] === 'number') {
      var productNumber = dataSource[productNumberKey];
    } else if(dataSource[productNumberKey]){ // 存在卻不是string或number
      console.error('銷售編號格式錯誤');
    }

    // 物件內銷編格式調整好後將整個data物件填入最終變數
    checkedData = dataSource;
  }

  // 將checkedData物件、checkedCustomObject傳入callback
  if(typeof callback === 'function') return callback(checkedData, checkedCustomObject)
  else console.error('callback並非函式');

}