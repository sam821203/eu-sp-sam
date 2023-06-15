export function changePriceFormat ( price ) {
  // console.log( price, Number(price).toLocaleString(), formatMoney(price));

  // 如果會補三位逗號(IE>=11)
  if(Number.prototype.toLocaleString) {
    // 當被填入"1,000"或是促銷文案時轉換數字會回報NaN，直接回傳
    if (isNaN(Number(price))) return console.error(price + '非數字無法加總');

    // 注意如果不填數值price=""時Number("")會轉成0因此畫面會呈現$0，而數值不填應該是把price這行移除，
    // 因此可以達到警示效果(此行未刪)，和價錢不該為零(price=0)一樣能警告價格不正確
    else return Number(price).toLocaleString();

  } else return formatMoney(price) // IE10以下用正規表達式處理
}

function formatMoney(nStr){
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
  x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}