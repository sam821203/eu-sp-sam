import { buildProductNumberLink } from 'utils/js/build-link.js'
import { createDateArray } from 'utils/js/build-time.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initDailyChange = dailyChange();

function dailyChange() {
  if(!dailyData) return false;
  // 10/26 - 11/26 每日換品
  // 總共只有31天，但倒數要抓下一個index做計算，因此要給32天，最後一天的倒數才會正常
  var dailyDateArray = createDateArray("2020/10/26 10:00:00", 32) // 10/26 - 11/27共32天
  // setTimeout、setInterval的作用域在window

  buildByCustomTime(dailyDateArray, [addDailyLink, addDailyImgSrc], 1000, ['countDownNumberObject', addDailyTime, true]);
}


// 每日換連結
function addDailyLink(i){
  // TODO: 超過14天就退出(因為要倒數所以日期陣列是32天)
  if (!dailyData || i >= 32) return false;
  var dailyChangeAnchor = document.querySelector('#dailyChange a');
  
  buildProductNumberLink(dailyData[i], dailyChangeAnchor);
}

// 每日換圖
function addDailyImgSrc(i) {
  // TODO: 超過14天就退出(因為要倒數所以日期陣列是32天)
  if (!dailyData || i >= 32) return false;

  var dailyChangeImg = document.querySelector('#dailyChange a img');

  dailyChangeImg.src= "https://www.etmall.com.tw/XML/content/DMSetting/Final/202011/SP_1116698/daily-item-" + (i + 1) + ".png";
  dailyChangeImg.alt = "今日最大牌"
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