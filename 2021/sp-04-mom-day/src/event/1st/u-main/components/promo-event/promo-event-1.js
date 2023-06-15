import { buildProductNumberLink } from 'utils/js/build-link.js'
import { createDateArray } from 'utils/js/build-time.js'

export var initDailyPromo = dailyPromo();

function dailyPromo() {
  if(!promoData) return false;
  // 9/11 - 9/24 每日換品、第一顆誘因
  var startDay = new Date();
  var nowDate = startDay.getDate();

  if (nowDate < 11 && nowDate > 26) return false;

  var startArray = createDateArray("2020/11/11 10:00", 14) // 9/11 - 9/24共14天
  var dailyPromoAnchor = document.querySelector('#dailyPromo a');
  var dailyPromoImg = document.querySelector('#dailyPromo a img');

  // 判斷今天日期是不是在startArray，是則填連結、圖片
  startArray.forEach(function(el, index){
    if(startDay.getTime() >= el.getTime()) {
      dailyPromoImg.src= "promo-1-" + (index + 1) + ".png";
      // console.log(promoData[index]);
      buildProductNumberLink(promoData[index], dailyPromoAnchor, [,,,,'name']);
    }
  });

}