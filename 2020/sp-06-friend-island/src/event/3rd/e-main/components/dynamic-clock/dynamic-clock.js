import { getClock } from 'utils/js/get-clock.js'
import { detectScrollStop } from 'utils/js/detect.js'

export var initHeroClock = [setClock(), scrollHide()];

function setClock() {
  // 可以切換星期格式
  // var weekFormat = ['日', '一', '二', '三', '四', '五', '六'];
  // var objectTime = getClock('', weekFormat);
  var objectTime = getClock();

  var clockHour = document.getElementById('clockHour');
  var clockMin = document.getElementById('clockMin');
  var clockMonth = document.getElementById('clockMonth');
  var clockDay = document.getElementById('clockDay');
  var clockWeek = document.getElementById('clockWeek');

  clockHour.innerHTML = objectTime.hour;
  clockMin.innerHTML = objectTime.min;
  clockMonth.innerHTML = objectTime.month;
  clockDay.innerHTML = objectTime.day;
  clockWeek.innerHTML = objectTime.week;

  setTimeout(setClock, 1000);
}

function scrollHide() {
  var heroClock = document.getElementById('dynamicClock');
  var startScroll = function () {
    heroClock.classList.remove('active');
  };
  var callBack = function () {
    heroClock.classList.add('active');
  };

  var callObject = {
    callStartScroll: startScroll,
    callBack: callBack
  };
  detectScrollStop(callObject);
}