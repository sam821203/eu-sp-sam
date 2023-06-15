import { buildProductNumberLink } from 'utils/js/build-link.js'
import { createDateArray } from 'utils/js/build-time.js'

export var initDailyPromo = dailyPromo();

function dailyPromo() {
  if(!promoData) return false;
  // 8/26 - 9/11 每日換品
  var startDay = new Date();
  var nowDate = startDay.getDate();

  if (nowDate > 12 && nowDate < 25) return false;

  var startArray = createDateArray("2020/08/26 10:00", 16) //8/26 - 9/11共17天
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