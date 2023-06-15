// 此檔案壓縮混淆後在asset處直接引入資料夾、由check.js用script標籤引入，此處只放未壓縮前的程式碼備份

// 內部隨機函式，帶入目標物件即可執行篩選，需要不重複要給一個空物件(報錯請在dev使用)
// 需要重複result = new makeRandom(obj);
// 不需要重複result = new makeRandom(obj, noRepeatObj);
// =============================
function makeRandom(obj, noRepeatObj) {
  if (typeof obj !== 'object') {
    // TODO: console.error dev用，正式要關掉
    // console.error('變數obj不正確，請重新檢查');
    return false;
  };

  this.obj = obj;

  if (noRepeatObj === undefined) { // 會重複
    return this.init();
  } else if (typeof noRepeatObj === 'object') { // 不重複
    return this.initNoRepeat(noRepeatObj);
  } else if (typeof noRepeatObj !== 'object') {
    // TODO: console.error dev用，正式要關掉
    // console.error('需要不重複請給定空物件，給參數並非物件，請檢查');
  }

}

// 獲取機率總和
makeRandom.prototype.sum = function (key) {
  var obj = this.obj;
  var sum = 0;
  for (var i in obj) {
    sum += obj[i][key];
  }
  return sum;
};

// 取得結果並執行篩選
makeRandom.prototype.init = function () {
  var result = null;
  var obj = this.obj;
  var sum = this.sum('p');	// 計算機率總和(p為prob機率)
  for (var i in obj) {
    var draw = parseInt(Math.random() * sum);
    // 如果以總和數字骰出小於等於p數字的就是中獎
    if (draw <= obj[i].p) {
      result = obj[i];

      //TODO: dev用，打開知道選中哪些(要在obj中加入name屬性等之類判別方式)，注意production版要關掉
      // console.log(obj[i].i);

      // 當屬性有r時且r＝0時不重複出現(出現後設置機率為0)
      if (typeof obj[i].r !== 'undefined' && obj[i].r === 0) {
        obj[i].p = 0;
      }
      // 抽中就跳出此循環，不執行後面的剔除
      break;
      // 如果沒抽中就剔除該選項的機率(因為該選項被剔除，所以機率在機率總和中也要被剔除)
    } else {
      sum -= obj[i].p;
    }
  }
  return result;
};

makeRandom.prototype.initNoRepeat = function (noRepeatObj) {
  var result = null;
  var obj = this.obj;
  var sum = this.sum('p');	// 計算機率總和(p為prob機率)

  for (var i in obj) {
    var draw = parseInt(Math.random() * sum);
    // 如果以總和數字骰出小於等於p數字的就是中獎
    // 利用物件key只能唯一的特性，如果物件沒這個key就填入，下次遇到這個key就會pass
    if (draw <= obj[i].p && !noRepeatObj[obj[i].i]) {

      noRepeatObj[obj[i].i] = true;
      result = obj[i];
      obj[i].p = 0;
      //TODO: dev用，打開知道選中哪些(要在obj中加入name屬性等之類判別方式)，注意production版要關掉
      // console.log(obj[i].i);

      // 抽中就跳出此循環，不執行後面的剔除
      break;

      // 如果沒抽中就剔除該選項的機率(因為該選項被剔除，所以機率在機率總和中也要被剔除)
    } else {
      sum -= obj[i].p;
    }
  }
  return result;
};
// =============================


// 外部隨機資料的函式，只傳times則會重複，傳任何noRepeat則不重複
// =============================
function setRandomData(times, noRepeat) {
  var randomData = [];

  // 不重複、傳入空物件，重複則不用
  if (typeof noRepeat !== 'undefined') { // 不重複

    var noRepeatObj = {};

    for (var i = 0; i < times; i++) {
      var dataItem = new makeRandom(obj, noRepeatObj);

      randomData.push(dataItem);
    }
  } else { // 會重複
    for (var i = 0; i < times; i++) {
      var dataItem = new makeRandom(obj);

      randomData.push(dataItem);
    }
  }

  return randomData;
}
// =============================


// 刪除來源
// =============================
function removeData() {
  var check = document.getElementById('check');
  var data = document.getElementById('dataScript');
  var controller = document.getElementById('controller');

  document.body.removeChild(check);
  document.body.removeChild(data);
  document.body.removeChild(controller);
}
// =============================


//TODO: 外部函式、每次抽卡規則決定函式(抽幾次、要不要重複)
// 抓取obj中的nr變數(noRepeat的意思)決定要不要重複
// 每100毫秒檢查一次data是否載入，載入後執行load卡面、刪除來源、關閉檢查
// =============================
function loadObjData() {
  var checkDataObjLoad = setInterval(function () {

    if (typeof obj !== 'undefined') {

      finalCard = setRandomData(1, true);  // 不重複

      //TODO: dev用，打開知道最終pass出去的卡片，注意production版要關掉
      // console.log(finalCard);

      removeData();
      clearInterval(checkDataObjLoad);
    }
  }, 100);
}
// =============================


// 最終傳到app-bundle.js的陣列
var finalCard;
loadObjData();