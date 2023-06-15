// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';
import {moveActiveToItem} from 'utils/js/move-active.js'
import {buildDynamicAutoSync} from 'utils/js/build-dynamic-by-number.js'
import {createDateArray} from 'utils/js/build-time.js'
import {buildByCustomTime} from 'utils/js/build-time.js'
import {setIntervalFix} from 'utils/js/build-time.js'

export var initDailyTime = [dailyTime(), checkTime()];

function dailyTime() {
  var dataCheck = dataDailyTime || false;
  if (!dataCheck) return false;

  // TODO: 每日換品
  // 總共有n天，但倒數要抓下一個index做計算，因此要給n+1天，最後一天的倒數才會正常
  // 注意是9點開始換品
  var arrayDailyTimeDate = createDateArray("2021/6/30 9:00:00", 14);

  // setTimeout、setInterval的作用域在window
  // tick = 100毫秒 較吃效能，但是可以使用微秒，且陣列太長時可以迅速換到正確品，並且搶在變價前更新

  //- 帶入假資料
  var today = new Date();
  var scheduledOpen = new Date("2021/6/30 10:00:00");
  var today__getTime = today.getTime(),
    scheduledOpen__getTime = scheduledOpen.getTime();
  if (today__getTime < scheduledOpen__getTime) {
    //- 假資料
    var data_fake = createDateArray("2021/6/29 10:00:00", 2);
    buildByCustomTime(data_fake, [buildSlider], 100);
  }
  else {
    buildByCustomTime(arrayDailyTimeDate, [buildSlider], 100);
  }
}

// 建立當天的dynamic product的slider
function buildSlider(i) {
  var dailyTimeEl = document.querySelector('#dailyTime .product__wrap');

  // 歸零：每天i循環都先清空dailyTimeEl、其內會有各個li，
  // 還必須清除span.swiper-notification，每一次i會產出一個
  // 不要開loop否則要update輪播不然dup會錯
  while (dailyTimeEl.firstChild) {
    dailyTimeEl.removeChild(dailyTimeEl.firstChild);
  }

  dataDailyTime[i].forEach(function (el, index) {
    var dailyTimeChild = buildDynamicAutoSync(el, {
      outerTag: 'div',
      isSlider: false,
    });
    buildProductPart(dailyTimeChild);
    dailyTimeEl.appendChild(dailyTimeChild);
  });

}

// 建立dynamic新增的部分：時間
function buildProductPart(el) {
  var elTime = document.createElement('div');

  elTime.classList.add('product__time');
  el.insertBefore(elTime, el.firstChild);
}

function checkTime() {
  setIntervalFix(function () {
    var hourNow = new Date().getHours();
    var arrayProductTime = Array.apply(null, document.querySelectorAll('.product__time'));

    if (hourNow >= 9 && hourNow < 15) {
      moveActiveToItem(arrayProductTime, 0);
      //- 打開時商品沒有鎖
      arrayProductTime[0].parentElement.classList.add('active--no--icon');
    } else if (hourNow >= 15 && hourNow < 22) {
      moveActiveToItem(arrayProductTime, 1);
      arrayProductTime[1].parentElement.classList.add('active--no--icon');
    } else {
      moveActiveToItem(arrayProductTime, 2);
      arrayProductTime[2].parentElement.classList.add('active--no--icon');
    }
  }, 1000)

}
