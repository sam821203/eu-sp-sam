import { isDataSource } from 'utils/js/check-data.js'
import { checkCustomObject } from 'utils/js/check-data.js'

// 此為新的建立手動更新name與price的函式
// 此函式是回傳一個陣列，陣列[0]是回傳data中name的值、陣列[1]為回傳price/text的值
// 若data中沒設定price/text，陣列[1]就會回傳空值""，price設定錯誤會有回傳0可以有警示效果)
export function buildNamePrice(dataSource, customObject) {

  // TODO: isDataSource如果其他地方會檢測可以關掉
  // isDataSource(dataSource);
  var checkedCustomObject = checkCustomObject(customObject);

  var nameKey = checkedCustomObject.namekey || 'name';
  var priceKey = checkedCustomObject.pricekey || 'price';
  var textKey = checkedCustomObject.textkey || 'text';

  var targetName;
  var targetPrice;

  // 組裝name資料
  targetName = dataSource[nameKey] || "";

  // 判斷targetPriceContainer內要裝價格還是文字，價格的話多輸出一個span含$字號
  if(dataSource[textKey]) {
    var isText = true;
  }

  // 如果是text就填text，如果是金額再判斷可否自動補三位逗號(IE11會，IE10不會)
  // 如果text和price都存在，以text為主
  if(isText) {

    targetPrice = dataSource[textKey];

  } else {

    targetPrice = (function(){
  
      // 如果會補三位逗號(IE>=11)
      if(Number.prototype.toLocaleString) {
        // 當被填入"1,000"或是促銷文案時轉換數字會回報NaN，直接回傳
        if (isNaN(Number(dataSource[priceKey]))) return dataSource[priceKey] || "";
  
        // 注意如果不填數值price=""時Number("")會轉成0因此畫面會呈現$0，而數值不填應該是把price這行移除，
        // 因此可以達到警示效果(此行未刪)，和價錢不該為零(price=0)一樣能警告價格不正確
        else return Number(dataSource[priceKey]).toLocaleString() || "";
  
      } else return dataSource[priceKey] || ""; // IE10直接return
    })();

  }

  // console.log(targetName, targetPrice)
  return [targetName, targetPrice];
}