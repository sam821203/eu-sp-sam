import { buildProductNumberLink } from 'utils/js/build-link.js'
import { createDateArray } from 'utils/js/build-time.js'

export var initDailyChange = dailyChange();

function dailyChange() {
  if(!dailyData) return false;
  // 8/26 - 9/11 每日換品
  var startDay = new Date();
  var nowDate = startDay.getDate();

  if (nowDate > 12 && nowDate < 25) return false;

  var startArray = createDateArray("2020/08/26 10:00", 16) //8/26 - 9/11共17天
  var nowMonth = startDay.getMonth() + 1;

  var dailyChangeAnchor = document.querySelector('#dailyChange a');
  var dailyChangeImg = document.querySelector('#dailyChange a img');
  var dailyMonth = document.getElementById('dailyMonth');
  var dailyDate = document.getElementById('dailyDate'); 

  // 把日期填上標題
  dailyMonth.innerHTML = nowMonth;
  dailyDate.innerHTML = (nowDate < 10) ? ('0' + nowDate) : nowDate;

  // 判斷今天日期是不是在startArray，是則填連結、圖片
  startArray.forEach(function(el, index){
    // console.log(startDay.getTime() >= el.getTime());
    if(startDay.getTime() >= el.getTime()) {
      dailyChangeImg.src= "daily-item-" + (index + 1) + ".png";
      // console.log(dailyData[index]);
      buildProductNumberLink(dailyData[index], dailyChangeAnchor);
    }
  });

}

