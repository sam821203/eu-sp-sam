import { buildProductNumberNamePrice } from 'utils/js/build-name-price-by-number.js'
import { buildNamePrice } from 'utils/js/build-name-price.js'

// 此處會根據customObject設定的isAutoSync判斷回傳是來自autoSync還是dataSource內的資料
// isAutoSync分成預設的「auto」、強制的「all」、關閉(關閉預設使用詞為「none」、「"false"」、和布林false)
// 當isAutoSync關閉時，可以分別設定isNameAutoSync和isPriceAutoSync決定name和price兩者哪個要單獨自動更新
// 最後會回傳[name, price, isText]
// 注意autoSync是做tag出來，所以最後外層要用container.appendChild裝它
// 如果非autoSync是做context出來，所以要先用中間tag.innerHtml裝它，最後外層再用container.appendChild裝它
// isText是給後續判斷是否要做出$字號用
export function buildIfNeedAutoSync(dataSource, customObject) {

  var customObject = customObject || {};
  var nameKey = customObject.namekey || 'name';
  var priceKey = customObject.pricekey || 'price';
  var textKey = customObject.textkey || 'text';

  // 注意autoSync是做tag出來，所以最後外層要用container.appendChild裝它
  // 如果非autoSync是做context出來，所以要先用中間tag.innerHtml裝它，最後外層再用container.appendChild裝它
  var midNameElement = document.createElement('span');
  var midPriceElement = document.createElement('span');
  var finalNameData;
  var finalPriceData;
  var isText = false;

  // isAutoSync分成預設的「auto」、強制的「all」、關閉(關閉預設使用詞為「none」、「"false"」、和布林false)
  var isAutoSync = (customObject.isAutoSync === undefined) ? 'auto' : customObject.isAutoSync;

  //  當isAutoSync關閉時，可以分別設定isNameAutoSync和isPriceAutoSync決定name和price兩者哪個要單獨更新
  if(isAutoSync === false || isAutoSync === "false" || isAutoSync === "none") {
    var isNameAutoSync = (customObject.isNameAutoSync === undefined) ? false : customObject.isNameAutoSync;
    var isPriceAutoSync = (customObject.isPriceAutoSync === undefined) ? false : customObject.isPriceAutoSync;
  }

  // 預設是isAutoSync是auto時，如果data內有name與price/text key，則不會自動同步
  // 並且text和price同時設定的話以text優先
  if(isAutoSync === 'auto') {
    // console.log('auto');
  
    if(dataSource[nameKey]) {
      midNameElement.innerHTML = buildNamePrice(dataSource, customObject)[0];
      finalNameData = midNameElement;

    } else finalNameData = buildProductNumberNamePrice(dataSource, customObject)[0];

    if(dataSource[textKey]) isText = true;

    if(dataSource[textKey] || dataSource[priceKey]) {
      midPriceElement.innerHTML = buildNamePrice(dataSource, customObject)[1];
      finalPriceData = midPriceElement;

    } else {
      midPriceElement.appendChild(buildProductNumberNamePrice(dataSource, customObject)[1]);
      finalPriceData = midPriceElement;
    }

    // 如果isAutoSync === "all"時則不管name/price/text設定
  } else if(isAutoSync === "all") {
    // console.log('all');

    finalNameData = buildProductNumberNamePrice(dataSource, customObject)[0];

    midPriceElement.appendChild(buildProductNumberNamePrice(dataSource, customObject)[1]);
    finalPriceData = midPriceElement;

  } else if(isAutoSync === false || isAutoSync === "false" || isAutoSync === "none"){
    // console.log('none');

    // 當關閉isAutoSync時，isNameAutoSync與isPriceAutoSync生效，只要是truely即可
    // 下面三段if分別是設定name自動price手動、name手動price自動、兩者皆手動
    if(isNameAutoSync) {
      finalNameData = buildProductNumberNamePrice(dataSource, customObject)[0];
    } else {
      if(dataSource[nameKey]) {
        midNameElement.innerHTML = buildNamePrice(dataSource, customObject)[0];
        finalNameData = midNameElement;

      } else console.error('設定手動填name卻沒有找到來源');
    }

    if(isPriceAutoSync) {

      midPriceElement.appendChild(buildProductNumberNamePrice(dataSource, customObject)[1]);
      finalPriceData = midPriceElement;

    } else {
      if(dataSource[textKey]) isText = true;

      if(dataSource[textKey] || dataSource[priceKey]) {
        midPriceElement.innerHTML = buildNamePrice(dataSource, customObject)[1];
        finalPriceData = midPriceElement;
      } 
      else console.error('設定手動填text/price卻沒有找到來源');

    }

    if(!isNameAutoSync && !isPriceAutoSync) {
      if(dataSource[nameKey]) {
        midNameElement.innerHTML = buildNamePrice(dataSource, customObject)[0];
        finalNameData = midNameElement;

      } else console.error('設定手動填name卻沒有找到來源');

      if(dataSource[textKey]) isText = true;

      if(dataSource[textKey] || dataSource[priceKey]) {
        midPriceElement.innerHTML = buildNamePrice(dataSource, customObject)[1];
        finalPriceData = midPriceElement;

      }
      else console.error('設定手動填text/price卻沒有找到來源');
    }
  } else console.error('isAutoSync設定錯誤');

  return [finalNameData, finalPriceData, isText];
}