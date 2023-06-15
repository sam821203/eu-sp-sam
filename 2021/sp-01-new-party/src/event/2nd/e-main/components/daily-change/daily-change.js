import { buildProductNumberLink } from 'utils/js/build-link.js'
import { createDateArray } from 'utils/js/build-time.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initDailyChange = dailyChange();

function dailyChange() {
  if(!dailyData) return false;
  // TODO: 每日換品
  // 總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
  var dailyDateArray = createDateArray("2021/1/8 10:00:00", 12)
  // setTimeout、setInterval的作用域在window

  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime(dailyDateArray, [addDailyLink, addDailyImgSrc], 100, ['countDownNumberObject', addDailyTime, true]);
}


// 每日換連結
function addDailyLink(i){
  // TODO: 超過n+1天就退出(因為要倒數所以n日的日期陣列要加一天成為n+1)，依照活動時間更改
  // if (!dailyData || i >= 32) return false; // 第一波
  if (!dailyData || i >= 14) return false; // 第二波

  var dailyChangeAnchor = document.querySelector('#dailyChange a');

  buildProductNumberLink(dailyData[i], dailyChangeAnchor);
}

// 每日換圖
function addDailyImgSrc(i) {
  // TODO: 超過n+1天就退出(因為要倒數所以n日的日期陣列要加一天成為n+1)，依照活動時間更改
  // if (!dailyData || i >= 32) return false; // 第一波
  if (!dailyData || i >= 14) return false; // 第二波

  var dailyChangeImg = document.querySelector('#dailyChange a img');

  // 第一波的圖片已經上傳，所以第二波時序號要依照活動開始日期更改
  // 第一波
  dailyChangeImg.src= "daily-item-" + (i + 1) + ".png";
  // 第二波
  // dailyChangeImg.src= "https://www.etmall.com.tw/XML/content/DMSetting/Final/202011/SP_1116698/daily-item-" + (i + 12) + ".png";

  dailyChangeImg.alt = "超級大牌"
}

// 每日換日期
function addNowDate(){
  var startDay = new Date();
  var nowMonth = startDay.getMonth() + 1;
  var nowDate = startDay.getDate();

  var dailyMonth = document.getElementById('dailyMonth');
  var dailyDate = document.getElementById('dailyDate');

  // 把日期填上標題
  dailyMonth.innerHTML = nowMonth;
  dailyDate.innerHTML = (nowDate < 10) ? ('0' + nowDate) : nowDate;
}

// 每秒填入
function addDailyTime(){ // 十位數和個位數分開的話不會因為數字1寬度不足產生跳動問題
  var dailyHourTens = document.getElementById('dailyHourTens');
  var dailyHourUnits = document.getElementById('dailyHourUnits');
  var dailyMinTens = document.getElementById('dailyMinTens');
  var dailyMinUnits = document.getElementById('dailyMinUnits');
  var dailySecTens = document.getElementById('dailySecTens');
  var dailySecUnits = document.getElementById('dailySecUnits');

  dailyHourTens.innerHTML = window.countDownNumberObject.hourTens;
  dailyHourUnits.innerHTML = window.countDownNumberObject.hourUnits;
  dailyMinTens.innerHTML = window.countDownNumberObject.minTens;
  dailyMinUnits.innerHTML = window.countDownNumberObject.minUnits;
  dailySecTens.innerHTML = window.countDownNumberObject.secTens;
  dailySecUnits.innerHTML = window.countDownNumberObject.secUnits;
}