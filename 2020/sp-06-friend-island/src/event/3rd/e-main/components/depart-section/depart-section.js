import { detectElementTop } from 'utils/js/detect.js'
import { getScrollTop } from 'utils/js/detect'

var cars = Array.apply(null, document.querySelectorAll(".decoration--depart"));
// 第二島開始才有車所以陣列拿掉第一個div、carPosition的length也少一
cars.shift();

// 定義往X軸偏移幅度、Y移動距離(因為每次背景圖不一樣，得手動測試肉眼求值)
var carPosition = [
  { xRadio: -0.58, yMax: 400},
  { xRadio: -0.65, yMax: 240 },
  { xRadio: 0.8, yMax: 280 },
  { xRadio: -0.88, yMax: 235 },
  { xRadio: -0.95, yMax: 350 },
  { xRadio: -0.88, yMax: 170 },
  { xRadio: 0.88, yMax: 135 },
];

// 計算大小網比例
var windowRadio = window.innerWidth / 960;
// 設定縮放參數(如果1以上表示是大網就不變，小於1就是小網，小網y軸要縮短所以用參數縮短
var windowParam = (windowRadio > 1) ? 1 : windowRadio;

document.addEventListener('scroll', function () {
  // 視窗scroll距離
  var widowScroll = getScrollTop() + 135; // +135就是距離頂端多出(往下)135px、提早發動


  cars.forEach(function (el, index) {
    // 目標物件距離頂端高度
    var elTop = detectElementTop(el);

    el.classList.remove('active');

    // 在螢幕距離大於目標高度又小於預設移動距離時會移動目標物
    if (widowScroll > elTop && widowScroll < elTop + carPosition[index].yMax) {
      el.classList.add('active');

      // 計算scroll差值
      var yDiff = (widowScroll - elTop) * windowParam;  // 小網的話就等比例縮短
      var xDiff = yDiff * carPosition[index].xRadio;

      // 填入目標物transform的translate數值
      el.style.transform = 'translate(' + xDiff + 'px,' + yDiff + 'px)';
      
    }
  });
});






