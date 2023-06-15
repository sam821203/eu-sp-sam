import dailyObject from 'event/2nd/e-main/pages/index/index-start-time.js'
import { buildProductNumberLink } from 'utils/js/build-link.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initDailyChange = dailyChange();

function dailyChange () {
  var dataCheck = dailyChangeData || false;
  if ( !dataCheck ) return false;

  // 每日換品的時間現在移出去外面統一設定
  var dailyChangeArray = dailyObject.oneDay;

  // TODO: tick = 1000 效能比較好，但是陣列太多天時要換很久才會換到正確品
  // tick = 100 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，斟酌使用
  buildByCustomTime(dailyChangeArray, [addDailyLink, addDailyImgSrc, addDailyTime], 100,['countDownNumberObject', addDailyTime, true]);
}


// 每日換連結
function addDailyLink(i){
  var dailyChangeAnchor = document.querySelector('#dailyChange a');

  buildProductNumberLink(dailyChangeData[i], dailyChangeAnchor);
}

// 每日換圖
function addDailyImgSrc(i) {
  var dailyChangeImg = document.querySelector('#dailyChange a img');

  dailyChangeImg.src= "daily-item-" + (i + 1) + ".png";
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