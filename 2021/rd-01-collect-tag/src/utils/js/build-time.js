// 製作日期陣列：給予起始時間(格式："YYYY/MM/DD")、陣列長度即可回傳日期陣列，item內為new Date(日期)
// 可直接forEach內使用.getDate()等方法取得每個item的日期等
// 可以custom設置間隔日，預設為每一天取一次，可以設定每n天取一次
// e.g. createDateArray("2020/08/20", 2)，會回傳[new Date("2020/08/20"), new Date("2020/08/21")]
export function createDateArray(originDate, length, intervalsDay) {
  var startDay = new Date(originDate);
  var startTime = new Date(originDate).getTime();
  var dateArray = [];
  var index = 0;
  var intervalsDay = intervalsDay || 1; // 間隔日期，預設每隔一天

  while(index < length) {
    // setDate會修改原始資料造成日期不準(變成+1、+2、+4...)所以要設兩個變數startDay與Date分開取得原始資料來運算
    var dateItem = startDay.setTime(startTime + parseInt(index * intervalsDay * 24 * 60 * 60 * 1000));
    // console.log(new Date(dateItem));

    dateArray.push(new Date(dateItem));
    index++;
  }

  return dateArray;
}
// =====================================================================


// 依照給定的時間陣列每秒跑setIntervalFix，每timeInterval時間檢查一次(預設1秒，需要微秒可改)
// 時間match時執行給定的function並繼續計時，每次match皆會觸發function並給傳入此次的index
// 如果有多個function支援以陣列傳入會自動判斷並執行陣列內所有function
// 如果需要導出倒數計時的時間，給予custom陣列，依序裝入[在window內空物件"名稱", 要填入的方法, 是否呈現日期(布林)]
// countdownNumberArray = [ObjectName(string), functionAddObject, isDay]
// 設定需不需要日期isDay(預設false)，不需要日期時物件中的hour會把day*24算在內(2天的話顯示48小時)，需要日期會顯示日期(2day 0 hour)
export function buildByCustomTime(timeSource, functionSource, timeInterval, countdownNumberArray) {

  if (!timeSource) return false;

  var isNeedCountdownNumber = false;
  var targetIndex = 0;
  var timeInterval= timeInterval || 1000;

  // 如果有傳入裝倒數時間的物件與要執行的function的Array，才會打開isNeedCountdownNumber，後面才會執行計算數字
  if(Array.isArray(countdownNumberArray)) {
    if(!typeof countdownNumberArray[0] === 'string') {
      console.error('請輸入window的物件名稱(string)')
    }
    if(typeof countdownNumberArray[1] === 'function') {
      var functionAddObject = countdownNumberArray[1];
    }
    var isDay = countdownNumberArray[2] || false;
    isNeedCountdownNumber = true;

  }

  // 初始先執行過找出目前所在的區間
  for (var i = 0; i < timeSource.length - 1; i++) {

    // countDownTimer中targetIndex++的判斷，所以要放在最後面，其他function放前面
    countDownTimer();
  }
  // 繼續計時
  var timer = setIntervalFix(function () {

    if(isNeedCountdownNumber) {
      // FIXME:傳不出去變數，只能在window中設立，傳入預設訂的物件名稱，由這邊在window中建立該名稱的物件
      window[countdownNumberArray[0]] = countDownNumber(timeSource[targetIndex], isDay);

      if (typeof functionAddObject === 'function') functionAddObject();

      // console.log(window[countdownNumberArray[0]]);
    }

    // countDownTimer中有targetIndex++的判斷，所以要放在最後面，其他function放前面
    countDownTimer();

    // 結束時處理
    if (targetIndex > timeSource.length - 1) clearInterval(timer);
  }, timeInterval);

  // core 計算倒數，必須和targetIndex在同一function
  function countDownTimer() {
    var timeNow = new Date().getTime();
    var targetTime = new Date(timeSource[targetIndex]).getTime();
    var countDownTime = targetTime - timeNow;

    // hit & fire 
    if (countDownTime <= 0) {
      // 如果傳進來是function直接執行
      if(typeof functionSource === 'function') {
        functionSource(targetIndex);

        // 如果傳進來是陣列則跑迴圈全部執行
      } else if (Array.isArray(functionSource)) {
        var funcSourceLength = functionSource.length;
        var index = 0;
        while (funcSourceLength > 0) {
          functionSource[index](targetIndex);

          index++;
          funcSourceLength--;
        }
      }
      targetIndex++;
    }
  }
}
// =====================================================================


// 倒數計時的function，最小到微秒，會回傳日時分秒微秒，參數：目標日期
// 在外層使用setInterval call這個function就會持續return倒數計時的時間物件
// 若要微秒則使用setInterval(func, 100)即可有秒數尾巴有持續跑動的效果
// e.g. setInterval(function(){ var a = countDownNumber("2020/09/10 10:00") }, 100)
// 則在setInterval內使用a.day/hour/min/sec/micro就可以取得日/時/分/秒/微秒
// isDay預設false，會把每天24小時補在hours上(e.g.兩天後會回傳day: 2、hour: 48)，設成true則是正常(e.g. 兩天後會回傳day: 2、hour: 0)，注意即使isDay設成false，day屬性仍會正確顯示，純粹讓視覺好呈現(false時通常不顯示天數)
export function countDownNumber(targetDate, isDay) {
  var timeNow = new Date().getTime();
  var targetTime = new Date(targetDate).getTime();
  var isDay = isDay || false;
  var countDownTime = targetTime - timeNow;
  var microseconds = Math.floor(countDownTime/ 10);
  var seconds = Math.floor(countDownTime / 1000);
  var min = Math.floor(seconds / 60);
  var hour = Math.floor(min / 60);
  var day = Math.floor(hour / 24);

  hour %= 24;
  min %= 60;
  seconds %= 60;
  microseconds %= 60;

  // 不要日的話此hour可以回推所有日的小時
  // 有日的選項則正常顯示hour
  if(!isDay) hour += day * 24;

  // 結束時
  if(countDownTime <= 0) {
    return {
      day: '00',
      hour: '00',
      min: '00',
      sec: '00',
      micro: '00',
    }
  } else if (isNaN(countDownTime)) {
    return console.error('countDownTime is NaN，找不到目標時間');
  } else {
    return {
      day: day < 10 ? '0' + day : day.toString(),
      hour: hour < 10 ? '0' + hour : hour.toString(),
      min: min < 10 ? '0' + min : min.toString(),
      sec: seconds < 10 ? '0' + seconds : seconds.toString(),
      micro: microseconds < 10 ? '0' + microseconds : microseconds.toString(),
    }
  }


}
// =====================================================================


// 會修正遞迴偏差的計時器，可使用clearInterval或clearTimeout停止計時
export function setIntervalFix(callback, timeout) {
  var countIndex = 1; // 計時任務執行次數
  var timeout = timeout || 1000; // 計時任務的時間間隙
  var callback = callback || undefined;
  var stopCountId;
  var startTime = new Date().getTime();
  
  startCount(timeout);
  
  function startCount(timeInterval) {
    var countId = setTimeout(function() {
      var endTime = new Date().getTime();
      // 偏差值
      var deviation = endTime - (startTime + countIndex * timeout);
      // console.log(`${countIndex}: 偏差${deviation}ms`);

      if (typeof callback === 'function') {
        callback();
      } else if (callback !== undefined) {
        console.error('callback不是函數');
      }
    
      // 下一次計時
      countIndex++;
      startCount(timeout - deviation);

    }, timeInterval);

    return stopCountId = countId;
  }
  return stopCountId;
}
// =====================================================================