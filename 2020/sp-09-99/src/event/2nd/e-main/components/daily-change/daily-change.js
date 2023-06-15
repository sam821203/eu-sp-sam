import { buildProductNumberLink } from 'utils/js/build-link.js'
import { createDateArray } from 'utils/js/build-time.js'
import { buildByCustomTime } from 'utils/js/build-time.js'

export var initDailyChange = dailyChange();

function dailyChange() {
  if(!dailyData) return false;
  // 9/11 - 9/25 每日換品
  // 總共只有14天，但倒數要抓下一個index做計算，因此要給15天，最後一天的倒數才會正常
  var dailyDateArray = createDateArray("2020/09/11 10:00:00", 15) // 9/11 - 9/25共14天
  // setTimeout、setInterval的作用域在window

  buildByCustomTime(dailyDateArray, [addNowDate, addDailyLink, addDailyImgSrc], 1000, ['countDownNumberObject', addDailyTime]);
}


// 每日換連結
function addDailyLink(i){
  // TODO: 超過14天就退出(因為要倒數所以日期陣列是15天)
  if (!dailyData || i >= 14) return false;
  var dailyChangeAnchor = document.querySelector('#dailyChange a');
  
  buildProductNumberLink(dailyData[i], dailyChangeAnchor);
}

// 每日換圖
function addDailyImgSrc(i) {
  // TODO: 超過14天就退出(因為要倒數所以日期陣列是15天)
  if (!dailyData || i >= 14) return false;
  var dailyChangeImg = document.querySelector('#dailyChange a img');

  dailyChangeImg.src= "daily-item-" + (i + 1) + ".png";
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
function addDailyTime(){
  var dailyHour = document.getElementById('dailyHour');
  var dailyMin = document.getElementById('dailyMin');
  var dailySec = document.getElementById('dailySec');

  dailyHour.innerHTML = window.countDownNumberObject.hour;
  dailyMin.innerHTML = window.countDownNumberObject.min;
  dailySec.innerHTML = window.countDownNumberObject.sec;
}