import { isObject } from 'utils/js/detect.js'
import { isMultiple } from 'utils/js/detect.js'

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
export function checkProductNumberData(dataSource, customObject, callback, isCheckDataSource) {

  // 如果在其他函式最前面驗證過是否存在dataSource了，這邊可以設成false跳過，預設true會執行isDataSource檢查
  var isCheckDataSource = (isCheckDataSource === undefined) ? true : isCheckDataSource;
  var checkedCustomObject = checkCustomObject(customObject);
  
  // 建立最終傳入callback物件
  var checkedData;

  // 如果其他地方已經檢查過則就預設不用重複檢查是否存在dataSource
  if(isCheckDataSource) isDataSource(dataSource);

  // 檢查dataSource格式，是字串或是數字則製作最終物件
  if(typeof dataSource === 'string' ||typeof dataSource === 'number') {
    var productNumber = Number(dataSource);

    if(isNaN(productNumber) || productNumber === 0) {

      console.log(dataSource);
      console.error('銷編數值有誤');

    } else checkedData = {'productNumber': productNumber};

  } else { //是物件則檢查物件內銷編格式並調整統一
    isObject(dataSource, '資料格式不正確');

    // 確認customObject中productNumberKey為何
    var productNumberKey = checkedCustomObject.productNumberKey || 'productNumber';

    // 確認物件內的銷編格式正確
    if(typeof dataSource[productNumberKey] === 'string' || typeof dataSource[productNumberKey] === 'number') {
      var productNumber = Number(dataSource[productNumberKey]);
      // console.log(productNumber);
      

      if(isNaN(productNumber) || productNumber === 0) {

        console.log(dataSource);
        console.error('銷編數值有誤');

      } else checkedData = dataSource; // 物件內銷編格式確認好後將整個data物件填入最終變數

    } else if(dataSource[productNumberKey]) { // 存在卻不是string或number

      console.log(dataSource);
      console.error('銷編格式錯誤');

    } else { // 此處為無銷編者
      // console.log(dataSource, dataSource[productNumberKey]);
      var nameKey = checkedCustomObject.nameKey || 'name';
      var textKey = checkedCustomObject.textKey || 'text';
      var priceKey = checkedCustomObject.priceKey || 'price';

      if(!dataSource[nameKey] || !(dataSource[textKey] || dataSource[priceKey])) {

        console.log(dataSource);
        console.error('無銷編的話品名與價格/促銷字兩者都要填');

      } else checkedData = dataSource; // 物件內銷編格式確認好後將整個data物件填入最終變數
    }
  }

  // 檢查進入callback前的最終data
  // console.log(checkedData);

  // 將checkedData物件、checkedCustomObject傳入callback
  // 先確認callback格式
  if(!isMultiple(callback)) { // 單一函式

    if(typeof callback === 'function') return callback(checkedData, checkedCustomObject)
    else console.error('callback並非函式'); 

  } else {
    var callbackArray = [];

    callback.forEach(function(el) {
      if(typeof el === 'function') callbackArray.push(callback(checkedData, checkedCustomObject));
      else console.error('callback並非函式');
    });

    return callbackArray;
  }
}
